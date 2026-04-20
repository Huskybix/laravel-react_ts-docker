import { useRef, useCallback } from "react";

type TiltCardProps = {
    project: Project;
    onOpen: (id: string, cardEl: HTMLDivElement) => void;
};

function TiltCard({ project, onOpen }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const rafRef  = useRef<number | null>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const el = cardRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top)  / rect.height - 0.5;
            gsap.to(el, {
                rotateY: x * 16,
                rotateX: -y * 16,
                scale: 1.04,
                duration: 0.15,
                ease: 'power1.out',
                transformPerspective: 600,
                overwrite: 'auto',
            });
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const el = cardRef.current;
        if (!el) return;
        gsap.to(el, {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 600,
            overwrite: 'auto',
        });
    }, []);

    const handleClick = useCallback(() => {
        const el = cardRef.current;
        if (!el) return;
        onOpen(project.id, el);
    }, [project.id, onOpen]);

    return (
        <div
            ref={cardRef}
            data-card-id={project.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="relative flex flex-col items-center justify-center gap-4 select-none rounded-2xl overflow-hidden bg-navBackground border border-white/5 p-8 aspect-[4/3] cursor-pointer"
            style={{ willChange: 'transform' }}
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,183,26,0.07), transparent 70%)' }}
            />
            <img
                src={project.logo}
                alt={project.name}
                className={`${project.logoClass} object-contain max-h-20 pointer-events-none`}
            />
            <span className="font-semibold text-white/80 text-sm tracking-wide pointer-events-none">
                {project.name}
            </span>
            <div className="absolute bottom-3 right-4 text-primaryOrange text-base font-semibold tracking-widest pointer-events-none">
                TAP TO EXPAND
            </div>
        </div>
    );
}