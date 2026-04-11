import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <MainLayout
            header={
                <h1 className="text-xl font-semibold leading-tight">
                    Profile
                </h1>
            }
        >
            <Head title="Profile" />

            <div className="flex flex-col gap-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />

                    <hr className="border-gray-300" />

                    <UpdatePasswordForm className="max-w-xl" />

                    <hr className="border-gray-300" />
                    
                    <DeleteUserForm className="max-w-xl" />
            </div>
        </MainLayout>
    );
}
