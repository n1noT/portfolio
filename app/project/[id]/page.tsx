"use client";

import { ProjectType } from "@/type/types";
import { getProjectById } from "@/lib/data";
import { use, useEffect, useState } from "react";
import Link from "next/link";


export default function Page({params}: Readonly<{ params: { id: string } }>) {
    const { id }: { id: string } = use(params);
    const [project, setProject] = useState<ProjectType | null>(null);

    useEffect(() => {
        const projectId = parseInt(id);
        getProjectById(projectId).then((data) => setProject(data));
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