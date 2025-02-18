import { ProjectType } from "@/type/types";

export async function getAllProjects() {
    return fetch("/data/projects.json")
        .then((response) => response.json())
        .then((data) => data);
}

export async function getMainProjects() {
    let data = await fetch(`/data/projects.json`);
    let projects = await data.json();
    let mainProjects = projects.filter((project: ProjectType) => project.isMain);

    return mainProjects;
}

export async function getProjectById(id: number) {
    let data = await fetch(`/data/projects.json`);
    let projects = await data.json();
    let project = projects.find((project: ProjectType) => project.id === id); 

    return project
}
