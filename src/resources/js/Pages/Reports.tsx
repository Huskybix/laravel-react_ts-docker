// resources/js/Pages/Reports.tsx

import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

type Status = 'Active' | 'Review' | 'Paused';

interface Report {
    id: number;
    name: string;
    category: string;
    revenue: number;
    trend_bars: number[];
    status: Status;
}

interface Props {
    reports: Report[];
}

const STATUS_STYLES: Record<Status, { wrapper: string; dot: string }> = {
    Active: { wrapper: 'bg-green-50 text-green-700', dot: 'bg-green-500' },
    Review: { wrapper: 'bg-amber-50 text-amber-700', dot: 'bg-amber-400' },
    Paused: { wrapper: 'bg-red-50 text-red-600',     dot: 'bg-red-400'   },
};

const BAR_HEIGHTS: Record<number, string> = {
    1: 'h-1', 2: 'h-2', 3: 'h-3', 4: 'h-4', 5: 'h-5',
};

/* 
    TODO: Fix styling, rework items to differentiate them from shop reports
*/

export default function Reports({ reports }: Props) {
    return (
        <MainLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-black">
                    Reports
                </h1>
            }
        >
            <Head title="Reports" />

            <div className="pb-12">
                <div className="flex flex-col gap-8 mx-auto">

                    <div className="grid [grid-template-columns:2fr_1.2fr_1fr_1fr_1fr] w-full overflow-hidden text-sm">

                        {/* Header */}
                        <div className="[display:contents]">
                            {['Report', 'Category', 'Revenue', 'Trend', 'Status'].map((col) => (
                                <div key={col} className="px-4 py-2.5 bg-gray-50 border-b border-gray-200 text-sm font-medium tracking-widest uppercase text-gray-400">
                                    {col}
                                </div>
                            ))}
                        </div>

                        {/* Rows */}
                        {reports.map((report, i) => {
                            const isLast = i === reports.length - 1;
                            const border = isLast ? '' : 'border-b border-gray-100';
                            const cell = `px-4 py-3 flex items-center ${border} group-hover:bg-gray-50 transition-colors`;
                            const status = STATUS_STYLES[report.status];

                            return (
                                <div key={report.id} className="[display:contents] group">

                                    <div className={`${cell} font-medium text-gray-800`}>
                                        {report.name}
                                    </div>

                                    <div className={`${cell} text-gray-400`}>
                                        {report.category}
                                    </div>

                                    <div className={`${cell} justify-end text-gray-700`}>
                                        ${report.revenue.toLocaleString()}
                                    </div>

                                    <div className={`${cell} justify-center`}>
                                        <div className="flex items-end gap-0.5 h-5">
                                            {report.trend_bars.map((val, j) => (
                                                <span
                                                    key={j}
                                                    className={`w-1 rounded-sm ${BAR_HEIGHTS[val]} ${
                                                        val >= 4 ? 'bg-blue-500'
                                                        : val >= 2 ? 'bg-blue-400'
                                                        : 'bg-gray-200'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`${cell} justify-center`}>
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium ${status.wrapper}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                            {report.status}
                                        </span>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}