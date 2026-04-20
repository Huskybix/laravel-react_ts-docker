import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import selfie from '@/Assets/Images/me.jpg';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Users', href: '/users' },
  { title: 'Edit', href: '/users/1/edit' },
];

export default function About() 
{
    return (
        <MainLayout
            header={
                <h1>
                    About Me
                </h1>
            }
        >
            <Head title="About Me" />
            <div className="flex flex-col gap-8 items-center bg-navBackground rounded-xl p-4 md:p-8 shadow w-full">
                <div className="flex flex-col gap-6">
                    <p>
                        Hey there! Thanks for stopping by. 
                    </p>
                    <p>
                        I'm a web developer who began their career working with the box model back in the heady days of Dreamweaver, floating divs here there and everywhere to create websites and online stores for the likes of Garrandale, Plasplugs and Groundwork Greater Nottingham.
                    </p>
                    <p>
                        That was, of course, many many years ago. We're well past all that now in our era of asynchronous JS, flexboxes, grids, containers and cloud hosts. And I've been there for the whole journey as this landscape has evolved, working with CakePHP back when MVC took center stage, Node as Javascript took over the world, and so many versions of Visual Studio it's often hard to imagine I once worked entirely in Notepad2!
                    </p>
                    <p>
                        It feels like there's always some new technology to learn, some new library showing up. As both a career and a hobby it's a neverending road of growth which always has something new and interesting around every single corner, and I love it. I can't wait to see where it takes me next.
                    </p>
                </div>


                <img src={selfie} alt="Selfie" className="max-w-[30rem] w-full rounded-lg shadow-lg border-primaryOrange border-3" />
            </div>
        </MainLayout>
    );
}
