import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const SECTION_COLORS = [
    '#00ff7b',
    '#a5099d',
    '#fff202',
    '#EEAC11',
];

// Soft-edged volumetric beam — fades radially so no hard cone edge is visible
function VolumetricBeam({
    position,
    rotation,
    length = 8,
    radius = 1.2,
}: {
    position: [number, number, number];
    rotation: [number, number, number];
    length?: number;
    radius?: number;
}) {
    const material = useMemo(() => new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        uniforms: {
            color:  { value: new THREE.Color('#ffffff') },
            length: { value: length },
        },
        vertexShader: `
        varying vec3 vPos;
        varying vec2 vUv;
        void main() {
            vPos = position;
            vUv  = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
        fragmentShader: `
        uniform vec3  color;
        uniform float length;
        varying vec3  vPos;
        varying vec2  vUv;

        void main() {
            // Distance from the cone's central axis (for radial soft edge)
            // The cone is along Y axis; radius grows linearly from tip to base
            float yNorm    = (vPos.y + length * 0.5) / length;  // 0 at tip, 1 at base
            float maxR     = mix(0.0, 1.0, yNorm);               // cone silhouette
            float distFromAxis = length(vPos.xz);
            float radial   = 1.0 - smoothstep(maxR * 0.3, maxR, distFromAxis);

            // Fade along length — bright at top, faint at bottom
            float lengthFade = 1.0 - yNorm;

            float alpha = radial * lengthFade * 0.25;
            gl_FragColor = vec4(color, alpha);
        }
        `,
    }), [length]);

    return (
        <mesh position={position} rotation={rotation} material={material}>
            <coneGeometry args={[radius, length, 48, 1, true]} />
        </mesh>
    );
}

function Pyramid({
    scrollY,
    targetColor,
}: {
    scrollY: React.MutableRefObject<number>;
    targetColor: React.MutableRefObject<THREE.Color>;
}) {
    const groupRef     = useRef<THREE.Group>(null);
    const solidMatRef  = useRef<THREE.MeshStandardMaterial | null>(null);
    const currentColor = useRef(new THREE.Color(SECTION_COLORS[0]));
    const currentRot   = useRef(0);

    useEffect(() => {
        if (!groupRef.current) return;

        const geometry = new THREE.ConeGeometry(1.5, 2.5, 4);

        const solidMat = new THREE.MeshStandardMaterial({
            color: SECTION_COLORS[0],
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide,
            depthWrite: true,
            roughness: 0.4,
            metalness: 0.1,
        });
        solidMatRef.current = solidMat;
        groupRef.current.add(new THREE.Mesh(geometry, solidMat));

        const edges   = new THREE.EdgesGeometry(geometry);
        const lineGeo = new LineSegmentsGeometry();
        lineGeo.setPositions(edges.attributes.position.array as Float32Array);

        const lineMat = new LineMaterial({
            color: '#ffffff',
            linewidth: 2,
            transparent: true,
            opacity: 0.8,
            resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        });

        groupRef.current.add(new LineSegments2(lineGeo, lineMat));

        const onResize = () => lineMat.resolution.set(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            geometry.dispose();
            edges.dispose();
            lineGeo.dispose();
            solidMat.dispose();
            lineMat.dispose();
        };
    }, []);

    useFrame(() => {
        if (!groupRef.current) return;

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress  = maxScroll > 0 ? scrollY.current / maxScroll : 0;
        const targetRot = progress * Math.PI * 2;
        currentRot.current = THREE.MathUtils.lerp(currentRot.current, targetRot, 0.05);

        groupRef.current.rotation.y = currentRot.current;
        groupRef.current.rotation.x = currentRot.current * 0.25;

        if (solidMatRef.current) {
            currentColor.current.lerp(targetColor.current, 0.05);
            solidMatRef.current.color.copy(currentColor.current);
        }
    });

  return <group ref={groupRef} />;
}

function DiagonalSpotLight() {
    const lightRef  = useRef<THREE.SpotLight>(null);
    const targetRef = useRef<THREE.Object3D>(new THREE.Object3D());

    useEffect(() => {
        if (lightRef.current) {
        lightRef.current.target = targetRef.current;
        }
    }, []);

    return (
        <>
            <primitive object={targetRef.current} position={[0, 0, 0]} />
            <spotLight
                ref={lightRef}
                position={[3.5, 5, 3]}
                angle={0.35}
                penumbra={0.6}
                intensity={15}
                distance={14}
                decay={1.2}
                color="#ffffff"
            />
        </>
    );
}

export default function PyramidBackground() {
    const scrollY     = useRef(0);
    const targetColor = useRef(new THREE.Color(SECTION_COLORS[0]));

    useEffect(() => {
        const onScroll = () => { scrollY.current = window.scrollY; };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>(
        'header.intro-section, .flip-section, section.content, .fin-section'
        );

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const idx = Array.from(sections).indexOf(entry.target as HTMLElement);
                if (idx !== -1) {
                targetColor.current.set(
                    SECTION_COLORS[Math.min(idx, SECTION_COLORS.length - 1)]
                );
                }
            }
            });
        },
        { threshold: 0.4 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

  /*
    To aim the beam from [3.5, 5, 3] toward [0, 0, 0]:
    - The cone's default orientation has the wide end at +Y (top), tip at -Y (bottom)
    - We want the wide end at the light source, tip pointing toward the pyramid
    - Direction vector from light to target, then compute rotation
  */
    const beamPos: [number, number, number]  = [3.5, 5, 3];
    const beamRot: [number, number, number]  = [
        -Math.atan2(3, Math.sqrt(3.5 * 3.5 + 5 * 5)),  // tilt toward -Z
        0,
        Math.atan2(3.5, 5),                            // tilt toward -X
    ];

    return (
        <div style={{position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.1} />

            <DiagonalSpotLight />

            <VolumetricBeam position={beamPos} rotation={beamRot} length={7} radius={1.2} />

            <Pyramid scrollY={scrollY} targetColor={targetColor} />
        </Canvas>
        </div>
    );
}
