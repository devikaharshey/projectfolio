"use client";
import React from "react";
import { FloatingDock } from "@/pages/components/FloatingDock";
import { TextGenerateEffect } from "@/pages/components/TextGenerate";
import {Spotlight} from "@/pages/components/Spotlight";
import Image from "next/image";

export function TechStack() {
    const links = [
        { title: "HTML", icon: <Image src="/data/html.png" alt="html" width={24} height={24} className="rounded-full"/> },
        { title: "CSS", icon: <Image src="/data/css.webp" alt="CSS" width={24} height={24} className="rounded-full" /> },
        { title: "Tailwind CSS", icon: <Image src="/data/tailwind.jpg" alt="Tailwind" width={24} height={24} className="rounded-full" /> },
        { title: "JavaScript", icon: <Image src="/data/javascript.png" alt="JavaScript" width={24} height={24} className="rounded-full" /> },
        { title: "TypeScript", icon: <Image src="/data/typescript.png" alt="TypeScript" width={24} height={24} className="rounded-full" /> },
        { title: "React", icon: <Image src="/data/react.png" alt="React" width={24} height={24} className="rounded-full" /> },
        { title: "Next.js", icon: <Image src="/data/nextjs.png" alt="Next.js" width={24} height={24} className="rounded-full" /> },
        { title: "Vite", icon: <Image src="/data/vite.png" alt="Vite" width={24} height={24} className="rounded-full" /> },
        { title: "Three.js", icon: <Image src="/data/threejs.png" alt="Three.js" width={24} height={24} className="rounded-full" /> },
        { title: "Framer Motion", icon: <Image src="/data/framermotion.jpg" alt="Framer Motion" width={24} height={24} className="rounded-full" /> },
        { title: "Node.js", icon: <Image src="/data/nodejs.png" alt="Node.js" width={24} height={24} className="rounded-full" /> },
        { title: "Python", icon: <Image src="/data/python.png" alt="Python" width={24} height={24} className="rounded-full" /> },
        { title: "C Language", icon: <Image src="/data/c.png" alt="C" width={24} height={24} className="rounded-full" /> },
        { title: "C++", icon: <Image src="/data/cpp.png" alt="C++" width={24} height={24} className="rounded-full" /> },
        { title: "Postman API", icon: <Image src="/data/postman.png" alt="Postman" width={24} height={24} className="rounded-full" /> },
        { title: "Git", icon: <Image src="/data/git.png" alt="Git" width={24} height={24} className="rounded-full" /> },
    ];

    return (
        <div className="flex items-center justify-center h-auto w-full py-10">
            <div className="flex flex-col items-center">
                <Spotlight className="absolute h-[80vh] w-[50vw]" fill="skyblue" />
                <TextGenerateEffect
                    words="Behind the Code Curtain"
                    className="text-4xl font-bold text-center pb-6"
                />
                <p className="text-lg md:text-xl text-center pb-8">
                    The tech stack that brings my projects to life!
                </p>
                <Spotlight className="absolute h-[60vh] w-[60vw] bottom-0 right-0 left-full" fill="skyblue" />
                <FloatingDock items={links} />
            </div>
        </div>
    );
}

export default TechStack;
