"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
                                   text,
                                   revealText,
                                   children,
                                   className,
                               }: {
    text: string;
    revealText: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }

    function mouseEnterHandler() {
        setIsMouseOver(true);
    }

    function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
        event.preventDefault();
        const clientX = event.touches[0]!.clientX;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            onTouchStart={mouseEnterHandler}
            onTouchEnd={mouseLeaveHandler}
            onTouchMove={touchMoveHandler}
            ref={cardRef}
            className={cn(
                "bg-dot-transparent w-[90vw] md:w-[40rem] h-full max-w-full rounded-lg p-8 relative overflow-hidden",
                className
            )}
        >
            {children}

            <div className="h-full relative flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        width: "100%",
                    }}
                    animate={
                        isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                            : {
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                    }
                    transition={isMouseOver ? {duration: 0} : {duration: 0.4}}
                    className="absolute dark:bg-dot-white/[0.2] bg-black-100/[0.7] rounded-xl z-20 will-change-transform"
                >
                    <p
                        style={{
                            textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                        }}
                        className="text-[2rem] md:text-[2rem] lg:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-purple text-center"
                    >
                        {revealText}
                    </p>
                </motion.div>
                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={isMouseOver ? {duration: 0} : {duration: 0.4}}
                    className="h-40 w-[8px] bg-black-100 from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
                ></motion.div>

                <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
                    <p className="text-[2rem] md:text-[2rem] lg:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238] text-center">
                        {text}
                    </p>
                    <MemoizedStars />
                </div>
            </div>
        </div>
    );
};

const Stars = () => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block"
                ></motion.span>
            ))}
        </div>
    );
};

export const MemoizedStars = memo(Stars);
export default TextRevealCard;
