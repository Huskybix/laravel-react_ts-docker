import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

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
            <div className="pb-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <h1>Reports</h1>
                        
                        <div>Content</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}