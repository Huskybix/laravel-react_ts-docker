export interface ProjectLink {
    label: string;
    href: string;
    external: boolean;
}

export interface ProjectSection {
    title: string;
    body: string[];
    links: ProjectLink[];
}

export interface Project {
    id: string;
    name: string;
    logo: string;
    logoClass: string;
    stack: string[];
    sections: ProjectSection[];
}