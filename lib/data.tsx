import { ProjectType } from "@/type/types";

export async function getAllProjects() {
    return fetch("/data/projects.json")
        .then((response) => response.json())
        .then((data) => data);
}

export async function getMainProjects() {
    const data = await fetch(`/data/projects.json`);
    const projects = await data.json();
    const mainProjects = projects.filter((project: ProjectType) => project.isMain);

    return mainProjects;
}

export async function getProjectById(id: number) {
    const data = await fetch(`/data/projects.json`);
    const projects = await data.json();
    const project = projects.find((project: ProjectType) => project.id === id); 

    return project
}
