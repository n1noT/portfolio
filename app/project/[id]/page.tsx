"use client";

import { ProjectType } from "@/type/types";
import { getProjectById } from "@/lib/data";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Page() { 
    const { id } = useParams();
    const [project, setProject] = useState<ProjectType | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchProject = async () => {
            try {
                const projectId = parseInt(Array.isArray(id) ? id[0] : id);
                const data = await getProjectById(projectId);
                setProject(data);
            } catch (error) {
                console.error(error);
            } finally {
            }
        };
        fetchProject();
    }, [id]);

    return (
        <div className="bg-background text-foreground">
            <Link href="/">
                <button className="bg-accent text-foreground p-4 rounded-lg">Back</button>
            </Link>
            {project && (
                <div className="flex flex-col items-center justify-center gap-4 my-8 w-full p-8">
                    <h1 className="text-4xl font-bold">{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            )}
        </div>
    );
}