"use client";

import { ProjectType } from "@/type/types";
import Card from "@/components/ui/card";

export default function Projects({ projects }: Readonly<{ projects: ProjectType[] }>) {

    const cursorX = (e: MouseEvent) => {
        const projects = document.querySelectorAll("#project");
        const boxWidth = document.querySelector("#projects-list")?.clientWidth ?? window.innerWidth;
        const closestCursorIndex = Math.round(e.clientX * (projects.length - 1) / boxWidth);
        const positionX = e.clientX;

        projects.forEach((project, index) => {
            let rotationY = 0;
    
            if (positionX > 0) {
                rotationY = -25;
            }
    
            if (index === closestCursorIndex) {
                rotationY = 0;
            } else if (index > closestCursorIndex) {
                rotationY = -rotationY;
            }
    
            const projectElement = project as HTMLElement;
            projectElement.style.transform = `perspective(500px) rotateY(${rotationY}deg) ${index === closestCursorIndex ? "translateY(-20%)" : ""}`;
    
            if (index === closestCursorIndex) {
                projectElement.style.zIndex = "10";
                projectElement.style.scale = "100%";
                projectElement.style.boxShadow = "-80px 0 70px -100px var(--danger), 80px 0 70px -100px var(--accent)";
            } else {
                projectElement.style.zIndex = "0";
                projectElement.style.scale = "70%";
                projectElement.style.boxShadow = "0 16px 32px rgba(0, 0, 0, 0.15)";
            }
        });
    };
    
    window.addEventListener("mousemove", cursorX);

    return (
        <section className="flex flex-col items-center justify-center gap-8 my-8 w-full p-8">
            <ul className="flex gap-2 w-full mx-32" id="projects-list">
                {projects.map((project, index) => (
                    <li
                        id="project"
                        key={index}
                        className="transition-all duration-300 ease-in-out w-full shadow-xl"
                    >
                        <Card card={project} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
