'use client';
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click"; // Ensure this hook exists
import { cards } from "@/public/data/cardData"; // Ensure cardData.ts exists
import Button from "../components/Button"; // Ensure Button component exists

export function ExpandableCard() {
    const [active, setActive] = useState<(typeof cards)[number] | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    // Escape key to close active card
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActive(null);
        };

        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [active]);

    // Close card when clicking outside
    useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

    return (
        <>
            {/* Background Overlay */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            {/* Expanded Card */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-black-100 sm:rounded-3xl overflow-hidden shadow-lg relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActive(null)}
                                className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full p-2 shadow-md"
                                aria-label="Close"
                            >
                                <CloseIcon />
                            </button>

                            {/* Image Section */}
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={500}
                                    height={300}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 object-cover object-top sm:rounded-t-3xl"
                                />
                            </motion.div>

                            {/* Content Section */}
                            <div className="p-4 flex flex-col gap-2">
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-bold text-lg text-neutral-700 dark:text-neutral-200"
                                >
                                    {active.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${active.description}-${id}`}
                                    className="text-sm text-neutral-600 dark:text-neutral-400"
                                >
                                    {active.description}
                                </motion.p>
                                <div>
                                    {typeof active.content === "function"
                                        ? active.content()
                                        : active.content}
                                </div>
                                <div className="mt-4">
                                    <Button>
                                        <a href={active.ctaLink || '#'} target="_blank">
                                            {active.ctaText}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Card List */}
            <ul className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        layoutId={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 cursor-pointer hover:bg-black-100 dark:hover:bg-blue-800/25 rounded-xl shadow-md flex flex-col items-center gap-2"
                    >
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <Image
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-32 w-32 rounded-xl object-cover border-2 border-purple"
                            />
                        </motion.div>
                        <motion.h3
                            layoutId={`title-${card.title}-${id}`}
                            className="text-center font-semibold text-neutral-800 dark:text-neutral-200"
                        >
                            {card.title}
                        </motion.h3>
                        <Button onClick={() => setActive(card)}>
                            <p className="text-sm">Overview</p>
                        </Button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

// Close Icon Component
export const CloseIcon = () => (
    <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-black dark:text-white"
    >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
    </motion.svg>
);

export default ExpandableCard;
