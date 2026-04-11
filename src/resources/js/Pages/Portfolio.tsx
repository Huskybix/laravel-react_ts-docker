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
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primaryOrange">This Website</h2>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Laravel</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">React</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Typescript</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Inertia.js</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Tailwind</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Vite</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Zustand</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">MySQL</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Docker</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Node</span>
                    </div>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>A from-scratch portfolio and personal website project to prove full-stack PHP competency outside of commercial work.</p>
                        <p>It features a variety of useful concepts and skills, such as utilizing Zustand state management for an online store, user logins and management, dynamic navigation choices based on user role, and a fully responsive design.</p>
                        <p>I've developed it fully containerized using Docker from the start to so I could improve with the technology, as prior to this I've only used it for Azurite file storage for a different project along with a few minor dabblings here and there.</p>
                        <p>Fun fact! I'm currently hosting this site myself on an Intel NUC mini PC running Ubuntu Server.</p>
                    </span>

                    <h3 className="font-semibold mt-4">The Shop</h3>
                    <span className="flex flex-col gap-1">
                        <p>The shop uses a state management library for React called Zustand in order to implement a persistent cart.</p>
                        <p>Running in tandem with this is a piece of middleware in the form of a Zustand hook, which validates the cart whenever a user changes page or attempts to check out. This ensures the app is aware of stock levels at all times and can actively remove items from a cart should they no longer be available.</p>
                        <p>In addition to the sidebar cart, a full screen cart is available via a link on desktop, or forced automatically on smaller devices. This ensures the cart stays responsive to ensure a solid user experience.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primaryOrange">Stable Microsystems</h2>

                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Umbraco</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">.NET Core</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Angular</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Javascript</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Tailwind</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Node</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">SQL Server</span>
                    </div>

                    <h3 className="font-semibold mt-4">Site Overview</h3>
                    <span className="flex flex-col gap-1">
                        <a href="https://www.stablemicrosystems.com" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Site Home
                        </a>
                        <p>Stable Microsystems is a fairly expansive website leveraging the Umbraco platform, which is a .NET Core based content management system.</p>
                        <p>Tailwind and vanilla Javascript are leveraged extensively across the whole project, with the latter being employed to power the image galleries, rotating banners, blog home and the filterable product index, plus other smaller interactive elements.</p>
                        <p>Umbraco utilizes Angular for its back-end CMS templates, and I was involved in ensuring these were implemented correctly. This was largely to ensure custom components displayed fully in the editor, as otherwise they would only display titles or plain text in most cases.</p>
                    </span>

                    <h3 className="font-semibold mt-4">Product Index</h3>
                    <span className="flex flex-col gap-1">
                        <a href="https://www.stablemicrosystems.com/probes-and-attachments/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Filterable Product Index
                        </a>
                        <p>This page is a filterable component that allows users to search and sort through a large database of products. In order to reduce load times and reliance on database queries, I used Umbraco's indexes for data caching and retrieval to improve performance.</p>
                        <p>It uses a combination of a razor view, a back-end .NET controller and Javascript in order to achieve proper filtering and pagination of results, as well as generate selected tags on the fly and properly concatenate URL attributes.</p>
                        <p>On mobile devices, the filering section shifts to become a retractable full-screen dropdown for ease of use. Via clever use of Tailwind and JS, I managed to accomplish this without duplicating the filter list at all.</p>
                    </span>

                    <h3 className="font-semibold mt-4">Blog Home</h3>
                    <span className="flex flex-col gap-1">
                        <a href="https://www.stablemicrosystems.com/blog" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Blog Home
                        </a>
                        <p>The blog home is another filterable component that relies on tags applied to individual blog post pages for its logic.</p>
                        <p>As with the product index, I implemeneted efficient filtering and pagination mechanisms via Umbraco's indexing to reduce load times and reliance on database queries.</p>
                        <p>It uses a combination of a razor view, a back-end .NET controller and Javascript in order to achieve proper filtering and pagination of results, while handling highlighting of tags and updating URL attributes.</p>
                        <p>Due to space limitations on mobile devices, the filtering component and search responsively shift to a much more compact and suitable layout on smaller screens.</p>
                    </span>

                    <h3 className="font-semibold mt-4">Pages</h3>
                    <span className="flex flex-col gap-1">
                        <div className="flex flex-row gap-2">
                        <a href="https://www.stablemicrosystems.com/blog/2026/hyper-texture-what-it-means-and-how-to-create-it/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Blog Pages
                        </a>
                        <a href="https://www.stablemicrosystems.com/products/taxtplusc-texture-analyser/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Standard Pages
                        </a>
                        <a href="https://www.stablemicrosystems.com/products/powder-flow-analyser/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                            Product Pages
                        </a>
                        </div>
                        <p>As the primary developer on this site, I was responsible for a variety of custom pagetypes and components. Sections on the blog, product and standard pages are all fully modular for ease of use by less technically minded content editors and designed to be fully responsive in any configuration.</p>
                        <p>All design work on the site was done by the client, with my role focusing on implementation and optimization, with the latter being particularly important given the large amount of high quality imagery on the site and editors who often make particularly expansive blog entries or detailed pages.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primaryOrange">BCS Careers Quiz Microsite</h2>
                    <h3 className="font-semibold mt-4">Key Pages</h3>
                    <a href="https://www.stablemicrosystems.com/probes-and-attachments/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                        Main Page
                    </a>
                    <a href="https://www.stablemicrosystems.com/probes-and-attachments/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                        Quiz Applet
                    </a>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Umbraco</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Vue.js</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">.NET Core</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Tailwind</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">SQL Server</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Node</span>
                    </div>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>These pages were written in tandem, with one being an interactive Vue.js quiz applet that calls back to the other which contains information on a variety of IT career paths.</p> 
                        <p>All development on this was done by myself, including the large graphical information segments.</p>
                        <p>It's fully responsive and features several clever design adjustments to look great on any size device.</p>
                        <p>The quiz applet keeps a cumulative score relating to answers given, with points allocated to each role based on the user's responses. The final scores then get passed off to an API on the back end which reroutes the user to the main careers page with their result highlighted and expanded, with runner-up roles listed.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-primaryOrange">Firebrand Training</h2>
                    <h3 className="font-semibold mt-4">Key Pages</h3>
                    <a href="https://www.stablemicrosystems.com/probes-and-attachments/" target="_blank" className="text-primaryOrange underline underline-offset-2 font-semibold hover:opacity-70 transition-opacity after:content-['_↗']">
                        Main Website
                    </a>
                    <h3 className="font-semibold mt-4">Tech Stack</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 py-0.5 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Umbraco</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">.NET Core</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Angular</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Javascript</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Tailwind</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Node</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">Webpack</span>
                        <span className="flex items-center bg-primaryOrangeDarkest rounded-xl px-3 text-base text-gray-200 font-bold w-max text-shadow-md text-shadow-gray-500">SQL Server</span>
                    </div>
                    <h3 className="font-semibold mt-4">About</h3>
                    <span className="flex flex-col gap-1">
                        <p>Firebrand training is another Umbraco website I worked on which was geared more toward sales and course booking.</p>
                        <p>The site has since changed hands, but the core architecture our team built remains largely intact.</p>
                        <p>The main difficulty factor in developing for Firebrand was the vast number of regions they served, and a need for both region specific data and translations while maintaining consistency and usability. Due to them having such a large volume of stored data, a robust and well planned API was essential, and we had to ensure that we only ever accessed what we needed in order to maintain performance and a solid user experience.</p>
                        <p>As with Stable Microsystems, Umbraco utilizes Angular for its back-end CMS templating and I worked on those here as well.</p>
                    </span>
                </div>
                <hr className="border-gray-300" />
            </div>
        </MainLayout>
    );
}
