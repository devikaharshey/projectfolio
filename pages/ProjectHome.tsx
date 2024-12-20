"use client";
import React from "react";
import { ContainerScroll } from "@/pages/components/ContainerScroll";
import Image from "next/image";
import { TextGenerateEffect } from "@/pages/components/TextGenerate";

export function ProjectHome() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <p className="text-lg md:text-xl font-semibold text-black dark:text-white">
                            And last but not least..
                        </p>
                        <TextGenerateEffect
                            words="Github: The Project Home" // Ensure this is a valid string
                            className="flex items-center justify-center relative z-0 px-4 md:px-0 pb-5 md:pb-0"
                        />
                    </>
                }
            >
                <a href="https://github.com/devikaharshey" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={`/data/projecthome.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </a>
            </ContainerScroll>
        </div>
    );
}

export default ProjectHome;
