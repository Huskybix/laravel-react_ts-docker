<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

public function run(): void
{
    Project::create([
        'name'       => 'This Website',
        'logo_path'  => '/Images/husky-logo-white.webp',
        'logo_class' => 'max-w-[8rem]',
        'sort_order' => 0,
        'stack'      => ['PHP', 'Laravel', 'React', 'Typescript', 'Inertia.js', 'Tailwind', 'Vite', 'Zustand', 'MySQL', 'Docker', 'Node', 'GSAP', 'Three.js'],
        'sections'   => [
            [
                title: 'About',
                links: [],
                body: [
                    `A hand crafted portfolio and personal website project to prove my PHP, Laravel and React competency outside of commercial work. As part of a standard Laravel setup it makes use of MySQL and nginx, plus Laravel Breeze for easy out of the box authentication integration. The project itself features a variety of useful concepts and skills put to practice, such as utilizing Zustand state management for an online store, GSAP for fluid animations, and a little Three.js for a pinch of 3D magic. Additionally, behind the scenes it also has user logins and management features plus dynamic navigation choices based on user role.`,
                    `I developed it within a Docker container from inception as a method of properly learning how to run containers as I had only used the platform for Azurite data storage prior to this project. I was also manually deploying this container on my server initially as well, and I've grown quite comfortable with Docker overall from doing so along with the ins and outs of necessary YAML changes between dev and prod. All in all, I think I'm quite ready to tackle Kubernetes next!`,
                    `The code for this site is available to view on my <a href="https://github.com/Huskybix/laravel-react_ts-docker/" target="_blank" className="text-primaryOrange hover:underline">GitHub</a>. All updates get automatically deployed via GitHub Actions.`,
                ],
            ],
            [
                title: 'Portfolio',
                links: [],
                body: [
                    `The portfolio page makes use of segmented data I have been serialized and stored in the database, which I then pull through to render out these expandable tiles. The expansion and contraction itself is handled by GSAP, the fluid Javascript animation library I've also utilized heavily on the landing page of this website, and I've added a hook into presses of the escape key to close them without the need to interact with the close button if preferable.`,
                    `Using Tailwind I shift the layout of this page on screen sizes below 1024px, primarily to shift the logo to the left above the title rather than keeping it inline. This allows me to render it out more clearly as I then do not need to shrink it down exponentially to fit onto small screens.`,
                ],
            ],
            [
                title: 'The Shop',
                links: ['href' => '/shop', 'label' => 'Shop', 'external' => true],
                body: [
                    `I've used the state management library Zustand to implement a persistent cart across the shop pages.`,
                    `On desktop, when products are added to the cart a retractable sidebar pops out to display what you are currently looking to purchase, with a running total. This can be hidden or displayed at will through use of a cart toggle at the top of the page.`,
                    `In mobile view the sidebar would interfere with the content too much, so instead of the retractable sidebar the cart button instead takes you to a separate cart page. This page can also be accessed directly from the sidebar in desktop mode.`,
                    `The stock tracking is fully functional, and will decrement when items are "purchased" via the checkout page. I've also included automatic cart updates for when stock count decreases below the desired count of a given item in your cart. This is handled quite simply by having the Checkout controller run a check against stock levels when accessing the page, and displays notices to users as part of these validation updates as well.`,
                ],
            ],
        ],
    ]);

    Project::create([
        name: 'Stable Micro Systems',
        logo: smsLogo,
        logoClass: 'max-h-[2rem] w-max',
        stack: ['Umbraco', 'ASP.NET Core', 'Angular', 'Javascript', 'Tailwind', 'Node', 'SQL Server'],
        sections: [
            [
                title: 'Site Overview',
                links: ['href' => 'https://www.stablemicrosystems.com', 'label' => 'Stable Micro System Site Home', 'external' => true],
                body: [
                    `A fairly expansive website leveraging the Umbraco platform, an ASP.NET Core based CMS, along with Parcel and Node for resource compilation.`,
                    'Within the administrative area common to Umbraco installs I was involved in the creation of custom modular components and pagetypes, creating both the site-facing templates and also custom Angular views for each to ensure they displayed correctly on the back end for editors.',
                ],
            ],
            [
                title: 'Product Index',
                links: ['href' => 'https://www.stablemicrosystems.com/probes-and-attachments/', 'label' => 'Stable Micro System Filterable Product Index', 'external' => true],
                body: [
                    'A filterable index page allowing users to search and sort through the many products Stable Micro Systems sell.',
                    "I created a custom Examine index for this project which collates and caches every product page within the solution along with their assigned categories of application. I then pull through a set of results via a page controller by filtering the contents of this index against those applications via the values passed in from the query string whilst using Javascript and URL attributes to manage the state of visibly selected filters on the Razor view. As part of this filtering process we have a maximum amount of results displayable per page and paginate excess results if the amount returned exceeds this.",
                    'On mobile the filter section shifts to a retractable full-screen dropdown due to space limitations. I managed to achieve without duplicating the filter list, thus reducing overheads slightly with just a little clever CSS.',
                    `The logic for this page got quite complex as the client wanted certain filters to be selectable in tandem with others, while others would override all existing filters entirely. Selected filters would also affect the state of opened categories on pageload as well, and as I was writing this entirely in standard Javascript meant I had to do all state management by hand. Additionally most filterable categories are generated programmatically from existing category data within the product page index, and as some of these include special characters or whitespace would need to be handled properly such that the code on both sides could handle them properly whilst recognising them as the same category.`
                ],
            ],
            [
                title: 'Blog Home',
                links: ['href' => 'https://www.stablemicrosystems.com/blog', 'label' => 'Stable Micro System Blog Home', 'external' => true],
                body: [
                    `Similarly to the product index this blog landing page utilizes a custom Examine index which collates all Blog Post pages along with their primary and ancillary categories, another page controller then uses the current query string to then filter the results using those assignments. For example, a post may be about "Food" largely, which is a primary parent category, and will appear if only filtered on food as a category, but we then have more minor category assignments within that such as "Sauces" or "Snacks" to drill down to specific topics. Overall the implementation is a lot simpler as only a single category of any type is selectable at a given moment, and I simply set the URL attributes and page state based around that.`,
                    `A minor complication that needed to be worked around is in assigning subcategories against specific primary categories, as subcategory names aren't unique. If for example 3D Printing is selected under food, it should only highlight that subcategory, not every 3D Printing pill. I accomplished this by passing the primary category with the selected subcategory via data attributes on the buttons so that they could be programmatically and predictably generated without needing to append unique values to them.`,
                    `Pagination is also handled the same way as before, with a maximum cap of results on any given page and the excess paginated using further query string attributes to define the current page.`
                ],
            ],
            [
                title: 'Pages',
                'links' => [
                    ['href' => 'https://www.stablemicrosystems.com/blog/2026/hyper-texture-what-it-means-and-how-to-create-it/', 'label' => 'Stable Micro System Blog Page', 'external' => true],
                    ['href' => 'https://www.stablemicrosystems.com/products/taxtplusc-texture-analyser/', 'label' => 'Stable Micro System Standard Page', 'external' => true],
                    ['href' => 'https://www.stablemicrosystems.com/products/powder-flow-analyser/', 'label' => 'Stable Micro System Product Page', 'external' => true],
                ],
                body: [
                    'These three pagetypes are what take up the bulk of the site, with each doing precisely what the name implies.',
                    'Standard pages and Product pages are the most similar, with the major difference being that Product pages feature unique product information and a built-in image gallery with lightboxing at the top of the page. Below that, both feature a sticky contents section which maps via anchor links to page sections within the main content body. This contents section can be disabled in both cases in order for the content to span the page full width instead should an editor choose.',
                    `The Blog pages are a little different in that they're built around a more centralized content article, accompanied by a sticky share bar, post date and rough reading duration. Beyond that, they use most of the same content blocks as the other two page types.`,
                    `Across all of these I've developed a wide variety of custom content blocks for the client, some examples of which include expanding Q&A boxes, adaptive data tables, image galleries, video players, alternative page layouts and a variety of information cards, plus many more.`
                ],
            ],
            [
                title: 'Form Request Pages',
                links: ['href' => 'https://www.stablemicrosystems.com/forms/request-manuals-and-user-guides/', 'label' => 'Stable Micro Systems Manual Request Page', 'external' => true],
                body: [
                    `These pages run on an Alpine.js cart system which hooks into Umbraco Forms as its checkout in order to send requests off to the client's support team. The Alpine code acts as a simple state manager, keeping track of what items were selected initially whilst allowing this whole process to run on a single page by progressing to the secondary "checkout" state after submitting the cart.`
                ],
            ],
        ],
    ]);
}