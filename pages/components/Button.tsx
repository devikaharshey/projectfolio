"use client";

import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border-[3px] border-blue-800 bg-[linear-gradient(110deg,#000103,45%,#9333ea80,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-blue-500"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
