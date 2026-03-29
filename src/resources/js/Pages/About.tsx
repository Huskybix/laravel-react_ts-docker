import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function About() 
{
    return (
        <MainLayout
            header={
                <h1 className="text-xl font-semibold leading-tight">
                    About Me
                </h1>
            }
        >
            <Head title="About Me" />
            
            <div className="flex flex-col gap-8">
                <p>
                    I'm a web developer who began their career working with the box model back in the heady days of Dreamweaver, floating divs here there and everywhere to create websites and online stores for the likes of Garrandale, Plasplugs and Groundwork Greater Nottingham.
                </p>
                <p>
                    That was, of course, many many years ago. We're well past all that now in our era of asynchronous JS, flexboxes and grids, containers and cloud hosts. And I've been there for the whole journey as this landscape has evolved, working with CakePHP back when MVC took center stage, Node as Javascript took over the world, and so many versions of Visual Studio it's often hard to imagine I once worked entirely in Notepad2!
                </p>
                <p>
                    It feels like there's always some new technology to learn, some new library showing up. As both a career and a hobby it's a neverending road of growth which always has something new and interesting around every single corner.
                </p>
                
            </div>
        </MainLayout>
    );
}
