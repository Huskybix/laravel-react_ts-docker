import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const IS_MOBILE = typeof window !== 'undefined' && (window.innerWidth <= 1024 || /Android|iPhone|iPad/i.test(navigator.userAgent));

const SECTION_COLORS = [
    '#00ff7b',
    '#a5099d',
    '#fff202',
    '#EEAC11',
];

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
        const lerpSpeed = IS_MOBILE ? 0.025 : 0.05;

        currentRot.current = THREE.MathUtils.lerp(currentRot.current, targetRot, lerpSpeed);

        groupRef.current.rotation.y = currentRot.current;
        groupRef.current.rotation.x = currentRot.current * 0.25;

        if (solidMatRef.current) {
            currentColor.current.lerp(targetColor.current, lerpSpeed);
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
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    scrollY.current = window.scrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };
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

    return (
        <div style={{position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', }}>
        <Canvas camera={{ position: [0, 0, 5] }} dpr={IS_MOBILE ? 1 : Math.min(window.devicePixelRatio, 2)}>
            <ambientLight intensity={0.1} />

            <DiagonalSpotLight />
            
            <Pyramid scrollY={scrollY} targetColor={targetColor} />
        </Canvas>
        </div>
    );
}
