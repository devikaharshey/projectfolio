"use client";

import React from "react";
import { Spotlight } from "@/pages/components/Spotlight";
import { TextRevealCard } from "@/pages/components/text-reveal-card";
import {ExpandableCard} from "@/pages/components/ExpandableCard";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative">
            {/* Spotlights */}
            <div>
                <Spotlight
                    className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
                    fill="purple"
                />
                <Spotlight
                    className="absolute h-[80vh] w-[50vw] top-10 left-full z-10"
                    fill="pink"
                />
                <Spotlight
                    className="absolute left-80 top-28 h-[80vh] w-[50vw] z-10"
                    fill="blue"
                />

                {/* TextRevealCard Section */}
                <div className="flex items-center justify-center relative z-0 px-4 md:px-0">
                    <TextRevealCard
                        text="Hey! What's this?"
                        revealText="Devika's Projectfolio!"
                    />
                </div>
                <p className="text-lg md:text-xl text-center relative z-0 px-4">
                    A portfolio dedicated to the <span className="text-purple">WEB DEV PROJECTS</span>
                </p>
            </div>

            {/* Expandable Card Section */}
            <div
                className="h-full w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center px-4 space-y-10">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="relative w-full max-w-screen-md">
                    <ExpandableCard/>
                </div>
            </div>
        </div>
    );
};

export default Hero;