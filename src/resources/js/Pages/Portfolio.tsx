import { useState, useRef, useCallback, useEffect } from 'react';
import PortfolioLayout from '@/Layouts/PortfolioLayout';
import { Head } from '@inertiajs/react';
import gsap from 'gsap';
import siteLogo from '@/Assets/Images/husky-logo-white.webp';
import smsLogo from '@/Assets/Images/sms-logo.webp';
import bcsLogo from '@/Assets/Images/bcs-logo.webp';
import fbLogo from '@/Assets/Images/fb-logo.webp';

// ─── Project Data ──────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        id: 'this-site',
        name: 'This Website',
        logo: siteLogo,
        logoClass: 'max-w-[8rem]',
        stack: ['Laravel', 'React', 'Typescript', 'Inertia.js', 'Tailwind', 'Vite', 'Zustand', 'MySQL', 'Docker', 'Node'],
        sections: [
            {
                title: 'About',
                links: [],
                body: [
                    'A hand crafted portfolio and personal website project to prove my PHP, Laravel and React competency outside of commercial work.',
                    'It features a variety of useful concepts and skills put to practice, such as utilizing Zustand state management for an online store, GSAP for fluid animations, and a little Three.js for a pinch of 3D magic.',
                    'Behind the scenes it also has user logins and management features plus dynamic navigation choices based on user role.',
                    'I developed it within a Docker container from inception as a method of properly learning that technology.',
                    'As part of a standard Laravel setup, it makes use of MySQL and nginx and is hosted on a Digitalocean Droplet running Ubuntu.',
                    <>The code for this site is available to view on my <a href="https://github.com/Huskybix/laravel-react_ts-docker/" target="_blank" className="text-primaryOrange hover:underline">GitHub</a>. All updates get automatically deployed via GitHub Actions.</>,
                ],
            },
            {
                title: 'The Shop',
                links: [{ href: '/shop', label: 'Shop', external: true }],
                body: [
                    'The shop uses Zustand to implement a persistent cart.',
                    'Running in tandem is a Zustand middleware hook which validates the cart whenever a user changes page or attempts to check out, ensuring the app is aware of stock levels at all times.',
                    'A full screen cart is available via a link on desktop, or forced automatically on smaller devices.',
                ],
            },
        ],
    },
    {
        id: 'sms',
        name: 'Stable Micro Systems',
        logo: smsLogo,
        logoClass: 'max-h-[2rem] w-max',
        stack: ['Umbraco', '.NET Core', 'Angular', 'Javascript', 'Tailwind', 'Node', 'SQL Server'],
        sections: [
            {
                title: 'Site Overview',
                links: [{ href: 'https://www.stablemicrosystems.com', label: 'Site Home', external: true }],
                body: [
                    'A fairly expansive website leveraging the Umbraco platform, a .NET Core based CMS.',
                    'Tailwind and vanilla Javascript power image galleries, rotating banners, the blog home and a filterable product index, plus other interactive elements.',
                    'I was involved in ensuring Angular CMS templates were implemented correctly so custom components displayed fully in the editor.',
                ],
            },
            {
                title: 'Product Index',
                links: [{ href: 'https://www.stablemicrosystems.com/probes-and-attachments/', label: 'Filterable Product Index', external: true }],
                body: [
                    'A filterable component allowing users to search and sort through a large database of products.',
                    "I used Umbraco's indexes for data caching and retrieval to improve performance and reduce load times.",
                    'Uses a razor view, .NET controller and Javascript for filtering, pagination, dynamic tags and URL attributes.',
                    'On mobile, the filter section shifts to a retractable full-screen dropdown achieved without duplicating the filter list.',
                ],
            },
            {
                title: 'Blog Home',
                links: [{ href: 'https://www.stablemicrosystems.com/blog', label: 'Blog Home', external: true }],
                body: [
                    'Another filterable component relying on tags applied to individual blog posts.',
                    "Implemented efficient filtering and pagination via Umbraco's indexing to reduce load times.",
                    'Handles tag highlighting and URL attribute updates, with a compact responsive layout on smaller screens.',
                ],
            },
            {
                title: 'Pages',
                links: [
                    { href: 'https://www.stablemicrosystems.com/blog/2026/hyper-texture-what-it-means-and-how-to-create-it/', label: 'Blog Pages', external: true },
                    { href: 'https://www.stablemicrosystems.com/products/taxtplusc-texture-analyser/', label: 'Standard Pages', external: true },
                    { href: 'https://www.stablemicrosystems.com/products/powder-flow-analyser/', label: 'Product Pages', external: true },
                ],
                body: [
                    'As the primary developer I was responsible for a variety of custom page types and components.',
                    'Sections on blog, product and standard pages are fully modular for ease of use by less technically minded content editors and designed to be fully responsive in any configuration.',
                    'My role focused on implementation and optimisation, particularly important given the large volume of high quality imagery on the site.',
                ],
            },
        ],
    },
    {
        id: 'bcs',
        name: 'BCS Careers Quiz',
        logo: bcsLogo,
        logoClass: 'max-w-[7rem]',
        stack: ['Umbraco', 'Vue.js', '.NET Core', 'Tailwind', 'SQL Server', 'Node'],
        sections: [
            {
                title: 'About',
                links: [],
                body: [
                    'These pages were written in tandem — an interactive Vue.js quiz applet that calls back to a careers info page covering a variety of IT career paths.',
                    'All development was done by me, including graphic edits in GIMP.',
                    'Both pages are fully responsive and feature several clever design adjustments to look great on any size device.',
                ],
            },
            {
                title: 'Main Page',
                links: [{ href: 'https://www.bcs.org/it-careers/tech-career-quiz/', label: 'Main Page', external: true }],
                body: [
                    'An Umbraco razor view utilising Tailwind for layout and styling.',
                    'The design was provided by the client via Figma.',
                    'Getting the banners and large role infographics to behave exactly as the client wanted while maintaining responsiveness and reasonable load times required a few clever solutions.',
                ],
            },
            {
                title: 'Quiz Applet',
                links: [{ href: 'https://www.bcs.org/it-careers/tech-career-quiz/quiz/', label: 'Quiz Applet', external: true }],
                body: [
                    'Written in Vue.js as a standalone application for an efficient, seamless user experience across devices.',
                    'The app keeps a cumulative score across answers with points allocated per role. Final scores get passed to a back-end API which reroutes the user to the careers page with their top result expanded.',
                ],
            },
        ],
    },
    {
        id: 'firebrand',
        name: 'Firebrand Training',
        logo: fbLogo,
        logoClass: 'h-[67px]',
        stack: ['Umbraco', '.NET Core', 'Angular', 'Javascript', 'Tailwind', 'Node', 'Webpack', 'SQL Server'],
        sections: [
            {
                title: 'About',
                links: [{ href: 'https://firebrand.training/', label: 'Main Website', external: true }],
                body: [
                    'Firebrand are a multinational training and certification provider. Their site is built on Umbraco and our team reworked it from the ground up, utilizing a well-optimized API we built from scratch in ASP.NET Core.',
                    'The site has since changed hands, but the core architecture our team built remains largely intact.',
                    'The main challenge was the vast number of regions served, requiring region-specific data and translations while maintaining consistency. A robust, well-planned API was essential to maintain speed and performance.',
                    'I also worked on Angular CMS templates here, as with Stable Micro Systems.',
                ],
            },
        ],
    },
];

type Project = typeof PROJECTS[0];

// ─── Tilt Card ─────────────────────────────────────────────────────────────────

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

// ─── Expanded Content ──────────────────────────────────────────────────────────

function ExpandedContent({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 shrink-0">
                <div className="flex gap-4 flex-col">
                    <img
                        src={project.logo}
                        alt={project.name}
                        className={`max-w-[24rem] w-max object-contain max-h-14`}
                    />
                    <div>
                        <h2 className="font-bold text-primaryOrange text-xl md:text-2xl">{project.name}</h2>
                        <div className="flex flex-row flex-wrap gap-1.5 mt-2">
                            {project.stack.map(s => (
                                <span key={s} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="ml-4 shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-colors text-lg font-light"
                    aria-label="Close"
                >
                    ✕
                </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-8">
                {project.sections.map((section) => (
                    <div key={section.title} className="flex flex-col gap-3">
                        <h3 className="font-semibold text-white/90 text-base">{section.title}</h3>
                        {section.links.length > 0 && (
                            <div className="flex flex-row flex-wrap gap-3">
                                {section.links.map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel="noreferrer"
                                        className="text-primaryOrange underline underline-offset-2 font-semibold text-sm hover:opacity-70 transition-opacity after:content-['_↗']"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-col gap-1.5 text-white/70 text-sm leading-relaxed">
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

// ─── Page ──────────────────────────────────────────────────────────────────────

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

    // Escape key
    useEffect(() => {
        if (!activeId) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [activeId, handleClose]);

    // Hide float on mount
    useEffect(() => {
        if (floatRef.current) gsap.set(floatRef.current, { display: 'none' });
    }, []);

    return (
        <PortfolioLayout>
            <Head title="Portfolio" />

            <div className="fluid px-32 py-16 md:py-24 flex flex-col gap-12">
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
                {/* Thumbnail shown while animating open */}
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