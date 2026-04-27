import { useState, useRef, useCallback, useEffect } from 'react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import { PROJECTS, type Project } from '@/types/projects.d';
import TiltCard from '@/Components/TiltCard';

function ExpandedContent({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <div className="flex flex-col h-full items-center py-8">
            <div className="flex flex-col lg:flex-row pb-6 justify-between border-b border-white/10 w-[90vw] md:w-[80vw] lg:w-[75vw]">
                <div className="flex gap-4 flex-col flex-grow w-full lg:w-1/2 order-2 lg:order-1">
                    <h2 className="font-bold text-primaryOrange text-xl md:text-2xl">{project.name}</h2>
                    <div className="flex flex-row flex-wrap gap-1.5 mt-2">
                        {project.stack.map(s => (
                            <span key={s} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primaryOrangeDarker text-gray-200 border border-white/10">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row gap-4 justify-between lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0 min-w-0 overflow-hidden">
                    <img 
                        src={project.logo} 
                        alt={project.name} 
                        className="w-full max-w-[24rem] object-contain object-left max-h-14" 
                    />
                    <button onClick={onClose} className="ml-4 shrink-0 w-9 h-9 flex items-center justify-center cursor-pointer rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors text-lg font-light" aria-label="Close">
                        ✕
                    </button>
                    </div>
            </div>

            <div className="overflow-y-auto pt-6 flex flex-col gap-8 w-[90vw] md:w-[80vw] lg:w-[75vw]">
                {project.sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-3">
                        <h3 className="font-semibold text-gray-100 text-base">{section.title}</h3>
                        {section.links.length > 0 && (
                            <div className="flex flex-row flex-wrap gap-3">
                                {section.links.map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel="noreferrer"
                                        className="text-primaryOrange underline underline-offset-2 font-semibold text-sm hover:opacity-70 transition-opacity"
                                    >
                                        {link.label} &#8599;
                                    </a>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-col gap-1.5 text-gray-200 text-sm leading-relaxed">
                            {section.body.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [contentVisible, setContentVisible] = useState(false);

    const floatRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const originRef = useRef<DOMRect | null>(null);
    const activeProject = PROJECTS.find(p => p.id === activeId) ?? null;

    const handleOpen = useCallback((id: string, cardEl: HTMLDivElement) => {
        const rect = cardEl.getBoundingClientRect();
        originRef.current = rect;
        setActiveId(id);
        setContentVisible(false);

        // Kill any running tween
        tlRef.current?.kill();

        // Get the other cards
        const otherCards = gridRef.current
            ? Array.from(gridRef.current.querySelectorAll<HTMLElement>('[data-card-id]'))
                  .filter(el => el.dataset.cardId !== id)
            : [];

        const float = floatRef.current;
        if (!float) return;

        // Snap float to card position instantly
        gsap.set(float, {
            display: 'block',
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: '1rem',
            opacity: 1,
        });

        // Build the expand timeline
        const tl = gsap.timeline({
            onComplete: () => {
                setContentVisible(true);
                document.body.style.overflow = 'hidden';
            },
        });

        // Fade out other cards and header quickly
        tl.to([otherCards, headerRef.current], {
            opacity: 0,
            duration: 0.2,
            ease: 'power1.out',
        });

        // Expand the float to fill below the navbar
        tl.to(float, {
            top: 80,
            left: 0,
            width: '100vw',
            height: 'calc(100dvh - 80px)',
            borderRadius: 0,
            duration: 0.5,
            ease: 'power3.inOut',
        }, '<0.05');

        // Hide the source card placeholder once float has moved away
        tl.set(cardEl, { opacity: 0 }, 0.1);

        tlRef.current = tl;
    }, []);

    const handleClose = useCallback(() => {
    const rect = originRef.current;
    const float = floatRef.current;
    if (!rect || !float) return;
    setContentVisible(false);
    tlRef.current?.kill();
    const otherCards = gridRef.current
        ? Array.from(gridRef.current.querySelectorAll<HTMLElement>('[data-card-id]'))
              .filter(el => el.dataset.cardId !== activeId)
        : [];
    const sourceCard = gridRef.current?.querySelector<HTMLElement>(
        `[data-card-id="${activeId}"]`
    );
    const tl = gsap.timeline({
        onComplete: () => {
            gsap.set(float, { display: 'none' });
            setActiveId(null);
            document.body.style.overflow = '';
        },
    });
    // Shrink float back to card position
    tl.to(float, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: '1rem',
        duration: 0.45,
        ease: 'power3.inOut',
    });
    // Fade in other cards gradually, starting partway through the shrink
    tl.to(otherCards, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        stagger: 0.05,
    }, '-=0.3'); // starts 0.3s before shrink ends
    // Fade header back in alongside other cards
    tl.to(headerRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
    }, '<');
    // Source card stays invisible until shrink completes, then snaps visible
    tl.set(sourceCard ?? [], { opacity: 1 });
    tlRef.current = tl;
}, [activeId]);

    useEffect(() => {
        gsap.set(floatRef.current, { display: 'none' });

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

useEffect(() => {
    if (!activeId) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
}, [activeId, handleClose]);

    return (
        <PortfolioLayout>
            <Head title="Portfolio" />

            <div className="fluid px-8 md:px-16 lg:px-32 py-16 md:py-24 flex flex-col gap-12">
                <div ref={headerRef} className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Portfolio</h1>
                    <p className="text-white-gray-200 text-lg">A selection of projects I've built and shipped.</p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-32">
                    {PROJECTS.map(project => (
                        <TiltCard
                            key={project.id}
                            project={project}
                            onOpen={handleOpen}
                        />
                    ))}
                </div>
            </div>

            <div ref={floatRef} className="fixed bg-navBackground overflow-hidden" style={{ zIndex: 50, display: 'none' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none" style={{ opacity: contentVisible ? 0 : 1, transition: 'opacity 0.2s ease', }}>
                    {activeProject && (
                        <>
                            <img
                                src={activeProject.logo}
                                alt={activeProject.name}
                                className={`${activeProject.logoClass} object-contain max-h-20`}
                            />
                            <span className="font-semibold text-white/80 text-sm tracking-wide">
                                {activeProject.name}
                            </span>
                        </>
                    )}
                </div>

                {/* Full content */}
                <div style={{ opacity: contentVisible ? 1 : 0, transition: 'opacity 0.25s ease', height: '100%', }}>
                    {activeProject && (
                        <ExpandedContent project={activeProject} onClose={handleClose} />
                    )}
                </div>
            </div>
        </PortfolioLayout>
    );
}