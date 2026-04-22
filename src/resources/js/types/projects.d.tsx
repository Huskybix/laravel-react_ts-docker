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
        stack: ['PHP', 'Laravel', 'React', 'Typescript', 'Inertia.js', 'Tailwind', 'Vite', 'Zustand', 'MySQL', 'Docker', 'Node', 'GSAP', 'Three.js'],
        sections: [
            {
                title: 'About',
                links: [],
                body: [
                    `A hand crafted portfolio and personal website project to prove my PHP, Laravel and React competency outside of commercial work. As part of a standard Laravel setup it makes use of MySQL and nginx, plus Laravel Breeze for easy out of the box authentication integration. The project itself features a variety of useful concepts and skills put to practice, such as utilizing Zustand state management for an online store, GSAP for fluid animations, and a little Three.js for a pinch of 3D magic. Additionally, behind the scenes it also has user logins and management features plus dynamic navigation choices based on user role.`,
                    `I developed it within a Docker container from inception as a method of properly learning how to run containers as I had only used the platform for Azurite data storage prior to this project. I was also manually deploying this container on my server initially as well, and I've grown quite comfortable with Docker overall from doing so along with the ins and outs of necessary YAML changes between dev and prod. All in all, I think I'm quite ready to tackle Kubernetes next!`,
                    <>The code for this site is available to view on my <a href="https://github.com/Huskybix/laravel-react_ts-docker/" target="_blank" className="text-primaryOrange hover:underline">GitHub</a>. All updates get automatically deployed via GitHub Actions.</>,
                ],
            },
            {
                title: 'The Shop',
                links: [{ href: '/shop', label: 'Shop', external: true }],
                body: [
                    `I've used the state management library Zustand to implement a persistent cart across the shop pages.`,
                    `On desktop, when products are added to the cart a retractable sidebar pops out to display what you are currently looking to purchase, with a running total. This can be hidden or displayed at will through use of a cart toggle at the top of the page.`,
                    `In mobile view the sidebar would interfere with the content too much, so instead of the retractable sidebar the cart button instead takes you to a separate cart page. This page can also be accessed directly from the sidebar in desktop mode.`,
                    `The stock tracking is fully functional, and will decrement when items are "purchased" via the checkout page. I've also included automatic cart updates for when stock count decreases below the desired count of a given item in your cart. This is handled quite simply by having the Checkout controller run a check against stock levels when accessing the page, and displays notices to users as part of these validation updates as well.`,
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