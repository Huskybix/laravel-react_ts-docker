import ParallaxLayout from '@/Layouts/ParallaxLayout';
import { Head } from '@inertiajs/react';

function ParallaxDashboard() 
{
    return (
        <div className="relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-purple-500 min-h-100vh mb-32">
                <div className="flex flex-col gap-4 mx-8 max-w-[80vw] mt-16 md:mt-0">
                    <h1 className="text-4xl font-bold text-shadow-md text-shadow-gray-700">Hello there!</h1>
                    <span className="flex flex-col gap-2 text-white">
                    <p>Welcome to my own personal little learning experience. I've worked with .NET for a long long time now so I really wanted to get my feet wet figuring out what's new in the world of PHP. I know MVC inside out these days so applying that knowledge to Laravel is going smoothly, it's mostly a case of mapping what I know on to Laravel's structure.</p>
                    <p>It seemed like a fantastic idea to pick up a few things about Docker while I did all this as well so I've been developing this project fully containerized. No more messing with old fashioned LAMP or WAMP installs, lightning fast dev environment, and has more uses besides? Perfection. I've touched on it before for other work but I've never had an excuse to get very hands on with it outside of Azurite storage.</p>
                    <p>If you keep on scrolling down, you'll see a little bit of fancy parallax and some more info on my background, otherwise feel free to take a look around!</p>
                    </span>
                </div>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white min-h-100vh">
                <div className="flex flex-col gap-4 mx-8 max-w-[80vw]">
                    <h1 className="text-4xl font-bold text-shadow-md text-shadow-gray-700">Parallax</h1>
                    <span className="flex flex-col gap-2 text-white">
                        <p>Speaking of parallax, did you know it's widely considered to be extremely inaccessible, as far as web standards are concerned? I've worked with companies before who had to abide by accessibility standards to the absolute best level they could, seeing as nearly their entire online presence is systems to interact with the general public. Visitors may be blind, completely new to using the internet, or even just particularly prone to motion sickness from effects like this, and throwing flashy stacked sections like the ones on this page at them which can't be tabbed through like a standard page is therefore a bad idea.</p>
                        <p>You can implement toggles to turn all of this on and off, but that isn't really the best idea. After all, if someone is blind how would they even know they need to look for one? Completely unfair expectation, I'm sure you'd agree. It's much better to simply build a nice, bright page operating under standard pageflow rules, that way everyone is happy.</p>
                    </span>
                </div>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white min-h-100vh">
                <div className="flex flex-col gap-4 mx-8 max-w-[80vw]">
                    <h1 className="text-4xl font-bold text-shadow-md text-shadow-gray-700">Front End Development</h1>
                    <span className="flex flex-col gap-2 text-white">
                        <p>I love front end work, it's so rewarding to see your work come to life right in front of you, and to be able to make it look and feel exactly how you want. I have a lot of experience with CSS and Tailwind, and I've always ending up falling into the supplementary role of 'CSS Wizard' everywhere I've worked.</p>
                        <p>I've been creating responsive websites for years, and while it's certainly gotten a lot easier over time, I still know how to do it all from scratch and understand why it all works the way it does.</p>
                        <p>I'm also a big fan of modern Javascript and Typescript frameworks. Whether it's React, Angular or Vue, they've all revolutionized the approach to building user interfaces, and I love how they allow you to break down complex UIs into smaller, reusable components.</p>
                    </span>
                </div>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white min-h-100vh">
                <div className="flex flex-col gap-4 mx-8 max-w-[80vw]">
                    <h1 className="text-4xl font-bold text-shadow-md text-shadow-gray-700">Server Side Development</h1>
                    <span className="flex flex-col gap-2 text-white">
                        <p>I've primarily worked with Umbraco for the past few years, which is a highly customizable .NET based CMS for which I've attained certification, but prior to that, I worked on many different projects using PHP, the most notable of which being early adoption of the e-commerce platform Magento 2. As part of that, I worked alongside Amazon's development team to work out several bugs in their checkout plugin.</p>
                        <p>As Umbraco is fully MVC based, I have a deep understanding of proper architecture and design patterns. I understand the importance of composition, how to properly leverage partials, components and controllers, and how to incorporate things like middleware to optimize performance.</p>
                    </span>
                </div>
            </div>
            </div>
    );
}

export default function Dashboard() {
    return (
        <ParallaxLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-300">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <ParallaxDashboard />
        </ParallaxLayout>
    );
}