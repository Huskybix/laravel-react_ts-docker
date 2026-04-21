import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WelcomeLayout from '@/Layouts/WelcomeLayout';
import Sparkles from '@/Components/Sparkle';
import FlipCard from '@/Components/FlipCard';
import ContactForm from '@/Components/ContactForm';
import '@css/welcomePage.css';

const is_mobile = typeof window !== 'undefined' && (window.innerWidth <= 1024 || /Android|iPhone|iPad/i.test(navigator.userAgent));

const WORDS = [
    { text: 'make websites.', color: '#ffb71a' },
    { text: 'solve problems.', color: '#4dffbb' },
    { text: 'build worlds.',   color: '#69db7c' },
    { text: 'debug.',          color: '#4dabf7' },
    { text: 'learn.',          color: '#d118ff' },
    { text: 'ship.',           color: '#f783ac' },
    { text: 'collaborate.',    color: '#74c0fc' },
    { text: 'create.',         color: '#ffd43b' },
];

export default function WelcomePage() {
    useEffect(() => {
        const html = document.documentElement;
        const start = Math.floor(Math.random() * 101);
        const end   = Math.floor(Math.random() * 101) + 900;

        html.dataset.theme          = 'dark';
        html.dataset.animate        = 'true';
        html.dataset.snap           = 'true';
        html.dataset.syncScrollbar  = 'true';
        html.style.setProperty('--start', String(start));
        html.style.setProperty('--hue',   String(start));
        html.style.setProperty('--end',   String(end));

        if (CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) 
        {
            return () => {
                delete html.dataset.theme;
                delete html.dataset.animate;
                delete html.dataset.snap;
                delete html.dataset.syncScrollbar;
                html.style.removeProperty('--start');
                html.style.removeProperty('--hue');
                html.style.removeProperty('--end');
            };
        }

        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.intro-name', {
            x: '100vw',
            opacity: 0,
            ease: 'power3.out',
            duration: 0.6,
            scrollTrigger: {
                trigger: '.intro-name',
                start: 'center 50%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.from('.intro-role', {
            y: '-4rem',
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.intro-name',
                start: 'center 40%',
                end: 'center 10%',
                scrub: 1,
            },
        });

        if(!is_mobile)
        {
            gsap.from('.flip-section', {
                x: '-100vw',
                opacity: 0,
                ease: 'power3.out',
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.flip-section',
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            });
        }

        gsap.fromTo('.develop-section',
        {
            xPercent: 0,
            opacity: 0,
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.words-section',
                start: 'bottom 50%',  // starts as words-section is finishing
                end: 'bottom 5%',    // fully slid in by the time words is well past
                scrub: 0.5,           // smooth scroll-linked animation
            },
        });

        const items = gsap.utils.toArray<HTMLElement>('ul li');
        const centerY = `center ${Math.round(screen.height / 2)}px`;

        gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

        const dimmer = gsap
            .timeline()
            .to(items.slice(1), { opacity: 1, stagger: 0.5 })
            .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

        ScrollTrigger.create({
            trigger: items[0],
            endTrigger: items[items.length - 1],
            start: centerY,
            end: centerY,
            animation: dimmer,
            scrub: 0.2,
        });

        const scroller = gsap.timeline().fromTo(
            html,
            { '--hue': start },
            { '--hue': end, ease: 'none' }
        );

        ScrollTrigger.create({
            trigger: items[0],
            endTrigger: items[items.length - 1],
            start: centerY,
            end: centerY,
            animation: scroller,
            scrub: 0.2,
        });

        return () => {
            ScrollTrigger.getAll().forEach((t: { kill: () => any; }) => t.kill());
            delete html.dataset.theme;
            delete html.dataset.animate;
            delete html.dataset.snap;
            delete html.dataset.syncScrollbar;
            html.style.removeProperty('--start');
            html.style.removeProperty('--hue');
            html.style.removeProperty('--end');
        };
    }, []);

    return (
        <WelcomeLayout>
            <header id="intro-section" className="intro-section fluid pt-[30vh] md:pt-[40vh] lg:pt-[50vh]">
                <h1 className="intro-hi">Hi there.</h1>
                <p className="intro-name">I'm <span className="text-primaryOrange">Niall</span>.</p>
                <p className="intro-role !text-center">
                <Sparkles>Web Developer</Sparkles>
                </p>
            </header>

            <FlipCard />

            <main>
                <section className="words-section content fluid mb-40 justify-center px-8 md:px-24 lg:px-40">
                    <h2>
                        <span aria-hidden="true">
                        I&nbsp;
                        </span>
                        <span className="sr-only hidden">
                        I can do things.
                        </span>
                    </h2>
                    <ul aria-hidden="true" style={{ '--count': WORDS.length } as React.CSSProperties}>
                        {WORDS.map((word, i) => (
                        <li
                            key={word.text}
                            style={{ '--i': i, '--phrase-color': word.color } as React.CSSProperties}
                        >
                            {word.text}
                        </li>
                        ))}
                    </ul>
                </section>

                <section className="develop-section content fluid flex w-full justify-center px-8 md:px-24 lg:px-40">
                    <div className="font-bold text-center">
                        I develop <span className="text-primaryOrange glow-pulse">exactly</span> what you need.
                    </div>
                </section>

                <section id="contact-section" className="fin-section flex flex-col gap-8 px-8">
                    <span className="!text-primaryOrange font-semibold text-4xl">
                        Get in touch
                    </span>
                    <ContactForm />
                </section>
            </main>

            <footer>Niall Storie © 2026</footer>
        </WelcomeLayout>
    );
}
