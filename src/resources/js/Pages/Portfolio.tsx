import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Portfolio() 
{
    return (
        <MainLayout
            header={
                <h1 className="text-xl font-semibold leading-tight">
                    Portfolio
                </h1>
            }
        >
            <Head title="Portfolio" />
            
            <div className="flex flex-col gap-8">
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">This Website</h2>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <ul className="list-disc list-inside">
                        <li>Laravel</li>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Inertia.js</li>
                        <li>Tailwind</li>
                        <li>Vite</li>
                        <li>Zustand</li>
                        <li>MySQL</li>
                    </ul>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>I built this site with Laravel and React as a demonstration of expertise, as I do not currently have any large scale commercial PHP projects to showcase.</p>
                        <p>It features a variety of useful concepts and skills, such as utilizing Zustand state management for an online store, user logins and management, dynamic navigation choices based on user role, and a fully responsive design.</p>
                        <p>Fun fact! I'm currently hosting this site myself on an Intel NUC mini PC.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Stable Microsystems</h2>
                    <h3 className="font-semibold mt-4">Key Pages</h3>
                    <a href="https://www.stablemicrosystems.com" target="_blank" className="underline cursor-pointer">
                        Site Home
                    </a>
                    <a href="https://www.stablemicrosystems.com/probes-and-attachments/" target="_blank" className="underline cursor-pointer">
                        Filterable Product Index
                    </a>
                    <a href="https://www.stablemicrosystems.com/blog" target="_blank" className="underline cursor-pointer">
                        Blog Home
                    </a>
                    <a href="https://www.stablemicrosystems.com/blog/2026/hyper-texture-what-it-means-and-how-to-create-it/" target="_blank" className="underline cursor-pointer">
                        Blog Pages
                    </a>
                    <a href="https://www.stablemicrosystems.com/products/taxtplusc-texture-analyser/" target="_blank" className="underline cursor-pointer">
                        Standard Pages
                    </a>
                    <a href="https://www.stablemicrosystems.com/products/powder-flow-analyser/" target="_blank" className="underline cursor-pointer">
                        Product Pages
                    </a>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <ul className="list-disc list-inside">
                        <li>Umbraco .NET Core</li>
                        <li>Angular</li>
                        <li>Javascript</li>
                        <li>Tailwind</li>
                        <li>Node</li>
                        <li>SQL Server</li>
                    </ul>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>Stable Micro Systems is a fairly expansive website leveraging the Umbraco platform, which is a .NET Core based content management system.</p> 
                        <p>As the primary developer on this site, I was responsible for a variety of custom pagetypes and components. Sections on the blog, product and standard pages are all fully modular for ease of use by less technically minded content editors and designed to be fully responsive in any configuration.</p>
                        <p>All design work on the site was done by the client, with my role focusing on implementation and optimization, with the latter being particularly important given the large amount of high quality imagery on the site and editors who often make particularly expansive blog entries or detailed pages.</p>
                        <p>Javascript is leveraged in several places, such as the image galleries, rotating banners, blog home and the filterable product index, plus other interactive elements across the site.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">BCS Careers Microsite</h2>
                    <h3 className="font-semibold mt-4">Key Pages</h3>
                    <a href="https://www.bcs.org/it-careers/tech-career-quiz/" target="_blank" className="underline cursor-pointer">
                        Main Page
                    </a>
                    <a href="https://www.bcs.org/it-careers/tech-career-quiz/quiz/" target="_blank" className="underline cursor-pointer">
                        Quiz Applet
                    </a>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <ul className="list-disc list-inside">
                        <li>Vue.js</li>
                        <li>.NET Core</li>
                        <li>Tailwind</li>
                    </ul>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>These pages were written in tandem, with one being an interactive Vue.js quiz applet that calls back to the main page which is used to give information on a variety of IT career paths.</p> 
                        <p>All development on this was done by myself, including the large graphical information segments.</p>
                        <p>It's fully responsive and features several clever design adjustments to look great on any size device.</p>
                        <p>The quiz applet keeps a cumulative score relating to answers given, with points allocated to each role based on the user's response.</p>
                        <p>Scores then get passed off to an API on the back end which then reroutes the user to the main careers page with their result highlighted and expanded, and runner-up results displayed.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
            </div>
        </MainLayout>
    );
}
