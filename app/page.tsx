"use client";

import Projects from "@/components/sections/projects";
import Welcome from "@/components/sections/welcome";
import Cv from "@/components/ui/cv";
import { ProjectType } from "@/types/types";
import { useEffect, useState } from "react";
import { getMainProjects } from "@/lib/data";

export default function Home() {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    useEffect(() => {
        getMainProjects().then((data) => setProjects(data));
    }, []);

    return (
        <>
            <Cv/>
            <Welcome />
            <Projects projects={projects}/>
        </>
    )
}
