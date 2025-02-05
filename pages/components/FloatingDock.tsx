"use client";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

export const FloatingDock = ({
                                 items = [], // Default to an empty array
                                 className,
                             }: {
    items?: { title: string; icon: React.ReactNode }[]; // Make `items` optional
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "grid gap-20 px-6 md:px-10 py-6 md:py-10",
                "grid-cols-4 sm:grid-cols-4 lg:grid-cols-8",
                className
            )}
        >
            {Array.isArray(items) && items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </div>
    );
};

function IconContainer({
                           mouseX,
                           title,
                           icon,
                       }: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-135, 0, 135], [35, 55, 35]); // larger icon size
    const heightTransform = useTransform(distance, [-135, 0, 135], [35, 55, 35]); // larger icon size

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 140, damping: 20 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 140, damping: 20 });

    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            style={{ width, height }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex items-center justify-center"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-8 text-xs bg-black-100 px-2 py-1 rounded-md shadow-md"
                    >
                        {title}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                className="flex items-center justify-center rounded-full shadow-lg border-2"
                style={{
                    border: "4px solid transparent",
                    borderRadius: "50%",
                    backgroundClip: "padding-box",
                    boxShadow: `0 0 10px 2px rgba(255, 105, 180, 0.6), 0 0 20px 4px rgba(138, 43, 226, 0.6), 0 0 30px 6px rgba(30, 144, 255, 0.6)`,
                }}
            >
                <div className="rounded-full flex items-center justify-center overflow-hidden">
                    {icon}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default FloatingDock;
