// floatingIcons.tsx
"use client";
import React from "react";

// Helper to get a random position within a quadrant
function getRandomPositionForQuadrant(quadrant: { topMin: number; topMax: number; leftMin: number; leftMax: number }) {
    const top = Math.floor(Math.random() * (quadrant.topMax - quadrant.topMin)) + quadrant.topMin;
    const left = Math.floor(Math.random() * (quadrant.leftMax - quadrant.leftMin)) + quadrant.leftMin;
    return { top, left };
}

const FloatingIcons = () => {
    const icons = [
        { name: "🏆 Next.js is my go-to framework.", src: "/nextjs.svg" },
        { name: "🌐 A TypeScript Warrior, me.", src: "/typescript.svg" },
        { name: "🤖 I do Machine Learning with Python!", src: "/python.svg" },
        { name: "📱 I build apps with Flutter!", src: "/flutter.svg" },
    ];

    const quadrants = [
        { topMin: 5, topMax: 30, leftMin: 5, leftMax: 30 },   // top-left
        { topMin: 5, topMax: 30, leftMin: 70, leftMax: 95 },  // top-right
        { topMin: 70, topMax: 95, leftMin: 5, leftMax: 30 },  // bottom-left
        { topMin: 70, topMax: 95, leftMin: 70, leftMax: 95 }, // bottom-right
    ];


    const [positions] = React.useState(() =>
        icons.map((_, idx) => getRandomPositionForQuadrant(quadrants[idx]))
    );

    const [toastMsg, setToastMsg] = React.useState<string | null>(null);
    const handleIconClick = (iconName: string) => {
        setToastMsg(iconName);
        setTimeout(() => setToastMsg(null), 2000);
    };

    return (
        <>
            {toastMsg && (
                <div className="toast fixed top-8 left-1/2 z-50 transform -translate-x-1/2 
                        bg-black bg-opacity-60 text-white px-4 py-2 rounded shadow-md 
                        transition-opacity duration-300">
                    {toastMsg}
                </div>
            )}
            {icons.map((icon, idx) => {
                const { top, left } = positions[idx];
                return (
                    <div
                        key={idx}
                        onClick={() => handleIconClick(icon.name)}
                        style={{ top: `${top}%`, left: `${left}%` }}
                        className="absolute w-12 h-12 cursor-pointer transition-transform 
                       duration-500 hover:scale-125 animate-fade-in"
                    >
                        <div className="w-full h-full animate-float">
                            <img src={icon.src} alt={icon.name} className="w-full h-full" />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default FloatingIcons;
