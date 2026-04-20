import { Link } from '@inertiajs/react';
import { useBreadcrumbs } from '@/Hooks/useBreadcrumbs';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <nav className="flex text-sm text-gray-200" aria-label="Breadcrumb">
            {breadcrumbs.map((item, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                    <span key={i} className="flex items-center">
                        {i > 0 && <span className="mx-2">/</span>}
                        {!isLast && item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-gray-100 transition-colors underline hover:no-underline"
                            >
                                {item.title}
                            </Link>
                        ) : (
                            <span className="text-primaryOrange font-bold">
                                {item.title}
                            </span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}