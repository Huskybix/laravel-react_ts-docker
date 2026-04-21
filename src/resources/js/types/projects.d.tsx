import siteLogo from '@/Assets/Images/husky-logo-white.webp';
import smsLogo from '@/Assets/Images/sms-logo.webp';
import bcsLogo from '@/Assets/Images/bcs-logo.webp';
import fbLogo from '@/Assets/Images/fb-logo.webp';

export const PROJECTS = [
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

export type Project = typeof PROJECTS[0];