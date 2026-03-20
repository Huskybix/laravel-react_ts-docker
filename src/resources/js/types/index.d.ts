export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface NavLink {
    name: string;
    route: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>,> = T & {
    auth: {
        user: User;
    };
    navigation: {
        links: NavLink[];
    };
};