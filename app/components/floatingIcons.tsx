// floatingIcons.tsx
"use client";
import React from "react";


const FloatingIcons = () => {
    const icons = [
        { name: "🏆 Next.js is my go-to framework for web-apps.", src: "/nextjs.svg" },
        { name: "🌐 A TypeScript Warrior, me.", src: "/typescript.svg" },
        { name: "🤖 I do Machine Learning with Python!", src: "/python.svg" },
        { name: "📱 I build apps with Flutter!", src: "/flutter.svg" },
    ];
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
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-32 animate-fade-in">

                {icons.map((icon, idx) => (
                    <div
                        key={idx}

                        onClick={() => handleIconClick(icon.name)}
                        className="w-12 h-12 cursor-pointer transition-transform 
                       duration-500 hover:scale-125 animate-fade-in"
                    >
                        <div className="w-full h-full animate-float">
                            <img src={icon.src} alt={icon.name} className="w-full h-full" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FloatingIcons;
