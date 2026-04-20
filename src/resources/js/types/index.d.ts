export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface NavLink {
    name: string;
    route: string;
    fragment?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>,> = T & {
    auth: {
        user: User;
    };
    navigation: {
        links: NavLink[];
    };
};

export interface BreadcrumbItem {
    title: string;
    href?: string;
}