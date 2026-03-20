import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

function ParallaxDashboard() {

    return (
        <div className="relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-500 to-blue-200">
                <div className="flex flex-col gap-4 mx-8">
                    <h1 className="text-4xl font-bold">Hello!</h1>
                    <span>Welcome to my own personal little learning experience. I've worked with .NET for a long long time now so I really wanted to get my feet wet figuring out what's new in the world of PHP. I know MVC inside out these days so applying that knowledge to Laravel is going smoothly, it's mostly a case of mapping what I know on to Laravel's structure. It's great to see there's a full fledged platform outside of the Microsoft ecosystem accomplishing similar feats though, and quite a relief that it's so easy to pick up!</span>
                    <span>It seemed like a fantastic idea to pick up a few things about Docker while I did all this as well which was absolutely worth the afternoon it took to get my head around it. No more messing with old fashioned LAMP or WAMP installs, lightning fast dev environment, and has more uses besides? Perfection. I've touched on it before for other work but I've never had an excuse to get very hands on with it outside of Azurite storage, it's definitely as great as it sounded though.</span>
                    <span>If you keep on scrolling down, you'll see a little bit of fancy parallax, otherwise feel free to take a look at the other pages where I'm going to be testing various components and configurations. Depending on when you pulled this there may be more content at a future date.</span>
                </div>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                <div className="flex flex-col gap-4 mx-8">
                    <h2 className="text-4xl font-bold">Parallax</h2>
                    <span>Speaking of parallax, did you know it's widely considered to be extremely inaccessible, as far as web standards are concerned? I've worked with the council before which in addition to being a rather unique work environment also had to abide by accessibility standards to the absolute best level they could, seeing as nearly their entire online presence is systems to interact with the general public. Visitors may be blind, completely new to using the internet, or even just particularly prone to motion sickness from effects like this, and throwing flashy stacked sections like the ones on this page at them that can't be tabbed through like a standard page is therefore a complete no-no.</span>
                    <span>You can of course implement toggles to turn all of this on and off, but even that isn't really the best idea. After all, if someone is blind how would they even know they need to look for one? They wouldn't know they're even looking at a page like this. Completely unfair expectation, I'm sure you'd agree. It's much better to simply build a nice, bright page operating under standard pageflow rules, that way everyone is happy.</span>
                    <span>Parallax is very pretty though. Those incredible CSS codepens with the fancy shifting layers of trees and shadows? Stunning.</span>
                </div>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
                <h2 className="text-4xl font-bold">The Third slide</h2>
                <span className="mt-2">Scroll Down</span>
            </div>
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                <h2 className="text-4xl font-bold">The Fourth slide</h2>
            </div>
            </div>
    );
}

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-300">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <ParallaxDashboard />
        </AuthenticatedLayout>
    );
}