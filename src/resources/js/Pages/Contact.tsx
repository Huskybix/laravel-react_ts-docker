import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type FormFields = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() 
{
    const { data, setData, post, processing, errors, reset, wasSuccessful } =
        useForm<FormFields>({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.send'), { onSuccess: () => reset() });
    };

    return (
        <MainLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-black">
                    Contact Me
                </h1>
            }
        >
            <Head title="Contact" />
            
            <div className="flex flex-col gap-8">
                <div className="">
                    This form is hooked up to Formspree, a third party email service. Therefore if you've booted up this container and were curious if this page would even work, it does! Messages sent through it will reach me at my personal email address, all without me having to store my contact details in a public Git repository. Talk about ideal.
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            autoComplete="name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Your email" />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            autoComplete="email"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="subject" value="Subject" />
                        <TextInput
                            id="subject"
                            className="mt-1 block w-full"
                            value={data.subject}
                            onChange={e => setData('subject', e.target.value)}
                        />
                        <InputError message={errors.subject} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="message" value="Message" />
                        <textarea
                            id="message"
                            rows={6}
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            className="mt-1 block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <InputError message={errors.message} className="mt-2" />
                    </div>

                    {wasSuccessful && (
                        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                            Message sent! I'll get back to you soon.
                        </p>
                    )}

                    <PrimaryButton disabled={processing}>
                        {processing ? 'Sending…' : 'Send message'}
                    </PrimaryButton>
                </form>
            </div>
        </MainLayout>
    );
}
