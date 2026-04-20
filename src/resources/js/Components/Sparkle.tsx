import React, { useEffect, useState, useRef } from 'react';

const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

const generateSparkle = () => {
    const hue    = random(0, 360);
    const color  = `oklch(85% 0.3 ${hue})`;
    return {
        id:        String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size:      random(30, 58),
        style: {
          top:  `${random(-20, 80)}%`,
          left: `${random(-10, 110)}%`,
        },
    };
};

function SparkleInstance({
    size,
    color,
    style,
}: {
    size: number;
    color: string;
    style: React.CSSProperties;
}) {
    return (
        <span className="sparkle-wrapper" style={style}>
            <svg width={size} height={size} viewBox="0 0 160 160" fill="none" className="sparkle-svg">
                <path d="M80 0 C80 0 84 80 160 80 C84 80 80 160 80 160 C80 160 76 80 0 80 C76 80 80 0 80 0Z" fill={color} />
            </svg>
        </span>
    );
}

export default function Sparkles({ children }: { children: React.ReactNode }) {
    const color = 'oklch(85% 0.3 60)';
    const [sparkles, setSparkles] = useState(() => [generateSparkle()]);
    const prefersReducedMotion = useRef(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        if (prefersReducedMotion.current) return;

        const interval = setInterval(() => {
        const now  = Date.now();
        const next = generateSparkle();
        setSparkles((prev) => [
            ...prev.filter((s) => now - s.createdAt < 750),
            next,
        ]);
        }, 350);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="sparkles-root">
            {sparkles.map((s) => (
                <SparkleInstance key={s.id} {...s} />
            ))}
            <span className="sparkles-child">
                {children}
            </span>
        </span>
    );
}
