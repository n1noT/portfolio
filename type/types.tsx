export interface PageProps {
    id: string;
}

export interface ProjectType {
    id: number;
    name: string;
    description: string | null;
    image: string | null;
    technologies: string[];
    isMain: boolean;
    github: string | null;
}