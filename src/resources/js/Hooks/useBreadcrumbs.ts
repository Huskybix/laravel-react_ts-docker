import { usePage } from '@inertiajs/react';
import { BreadcrumbItem, PageProps } from '@/types';

type BreadcrumbProps = PageProps<{
    breadcrumbLabels?: Record<string, string>;
}>;

export function useBreadcrumbs(): BreadcrumbItem[] {
    const { url, props } = usePage<BreadcrumbProps>();
    const labels = props.breadcrumbLabels ?? {};

    const segments = url.split('?')[0]
        .split('/')
        .filter(Boolean);

    return [
        { title: 'Home', href: '/' },
        ...segments.map((segment, i) => ({
            title: labels[segment] ?? toTitle(segment),
            href: '/' + segments.slice(0, i + 1).join('/'),
        })),
    ];
}

function toTitle(segment: string): string {
    return segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}