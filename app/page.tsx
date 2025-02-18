"use client";

import Projects from "@/components/sections/projects";
import Welcome from "@/components/sections/welcome";
import Cv from "@/components/ui/cv";
import { ProjectType } from "@/type/types";
import { useEffect, useState } from "react";
import { getMainProjects } from "@/lib/data";

export default function Home() {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const data = await getMainProjects()
                    setProjects(data);
                } catch (error) {
                    console.error(error);
                } finally {
                }
            };
            fetchProjects();
        }, []);

    return (
        <>
            <Cv/>
            <Welcome />
            <Projects projects={projects}/>
        </>
    )
}
