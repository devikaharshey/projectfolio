"use client";
import { Spotlight } from "@/pages/components/Spotlight";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/pages/components/BentoGrid";
import {
    IconChefHat,
    IconClipboard,
    IconLayout2Filled,
    IconBugFilled,
    IconSparkles,
    IconSoup,
    IconBowlSpoon,
    IconSalad
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/pages/components/TextGenerate";
import Image from "next/image";

const ProjectRecipe = () => {
    return (
        <div className="pb-20 pt-36 relative">
            <TextGenerateEffect
                words="The Project Recipe"
                className="flex items-center justify-center relative z-0 px-4 md:px-0 pb-10 md:pb-20"
            />
            <p className="text-lg md:text-xl text-center relative z-0 px-4 md:px-0 pb-10 md:pb-20">
                Here&apos;s what it takes to create websites that stand out and are visually appealing✨
            </p>
            <Spotlight
                className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
                fill="purple"
            />
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
            <Spotlight className="absolute h-[60vh] w-[60vw] bottom-0 right-0 left-full" fill="purple" />
        </div>
    );
};

const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border-2 border-neutral-100 dark:border-purple/[0.3] p-2  items-center space-x-2 bg-white dark:bg-black-100"
            >
                <div className="h-6 w-6 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                        src="/data/ingredient1.jpg"
                        alt="ingredient1"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-black-100 flex items-center justify-center">
                    <p className="text-sm text-center text-gray-400">Web Development Skills</p>
                </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border-2 border-neutral-100 dark:border-pink-600/[0.3] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black-100"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-black-100 flex items-center justify-center">
                    <p className="text-sm text-center text-gray-400">Design Knowledge</p>
                </div>
                <div className="h-6 w-6 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                        src="/data/ingredient2.jpg"
                        alt="ingredient2"
                        width={100}
                        height={100}
                    />
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border-2 border-neutral-100 dark:border-blue-600/[0.3] p-2 items-center space-x-2 bg-white dark:bg-black-100"
            >
                <div className="h-6 w-6 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                        src="/data/ingredient3.jpg"
                        alt="ingredient3"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-black-100 flex items-center justify-center">
                    <p className="text-sm text-center text-gray-400">User Experience Focus</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border-2 border-neutral-100 dark:border-black-100 p-2  items-center space-x-2 bg-black-100 dark:bg-gradient-to-r from-blue-600/[0.3] via-purple/[0.3] to-pink-600/[0.3] w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};

const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #db277750, #7c3aed50, #2563eb50)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg flex items-center justify-center">
                <div className="h-25 w-40 rounded-lg relative overflow-hidden">
                    <Image
                        src="/data/development-image.webp"
                        alt="development"
                        width={150}
                        height={150}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black-100 dark:border-pink-600 border border-neutral-200 flex flex-col items-center justify-center"
            >
                <IconLayout2Filled className="rounded-full h-10 w-10 text-pink-600" />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Ensure a smooth user experience
                </p>
                <p className="border border-pink-500 bg-pink-100 dark:bg-pink-900/20 text-pink-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Balance Flavors
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black-100 dark:border-violet-600 border border-neutral-200 flex flex-col items-center justify-center">
                <IconBugFilled className="rounded-full h-10 w-10 text-violet-600" />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Debug and resolve issues
                </p>
                <p className="border border-violet-500 bg-violet-100 dark:bg-violet-900/20 text-violet-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Fix Spills
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black-100 dark:border-blue-600 border border-neutral-200 flex flex-col items-center justify-center"
            >
                <IconSparkles className="rounded-full h-10 w-10 text-blue-600" />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Add final design touches
                </p>
                <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Refine
                </p>
            </motion.div>
        </motion.div>
    );
};

const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 w-fit items-start space-x-2 bg-white dark:bg-blue-950/[0.6]"
            >
                <p className="text-xs text-white-200">
                    Wow! This is a really cool project. Looking forward to work with you soon :)
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-fit ml-auto bg-white dark:bg-blue-900/[0.6]"
            >
                <p className="text-xs text-white-200">Sure. Thank you so much!</p>
            </motion.div>
        </motion.div>
    );
};

const items = [
    {
        title: "Ingredients",
        description: (
            <span className="text-sm">
                Every great dish starts with the right ingredients. Here are some must-haves
                before you can start cooking your web dev project.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconSalad className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Prep the Kitchen",
        description: (
            <span className="text-sm">
                Plan your project like prepping ingredients—wireframing, setting up tools,
                and organizing tasks are key steps.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconClipboard className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Cook It Up!",
        description: (
            <span className="text-sm">
                Develop your project like cooking a dish—write code, design components, and combine
                elements to create something delicious.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconChefHat className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Taste & Adjust",
        description: (
            <span className="text-sm">
                Test your project just like tasting food while cooking—debug issues, fix bugs, and refine the user experience.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconBowlSpoon className="h-5 w-5 text-neutral-500" />,
    },

    {
        title: "Serve It Hot!",
        description: (
            <span className="text-sm">
                Deploy your project like plating a finished dish—present it beautifully and share it with the world.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconSoup className="h-5 w-5 text-neutral-500" />,
    },
];

export default ProjectRecipe;
