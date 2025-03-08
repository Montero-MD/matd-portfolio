"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import FloatingIcons from "./components/floatingIcons"; // Import the extracted component
import { Metadata } from "next";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center 
                    w-screen h-screen overflow-hidden bg-gradient-to-tl 
                    from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block 
                      animate-fade-left bg-gradient-to-r from-zinc-300/0 
                      via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Render the separated FloatingIcons component */}
      <FloatingIcons />

      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 
                     bg-white cursor-default text-edge-outline animate-title 
                     font-display sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap 
                     bg-clip-text hover-3d">
        {"Matthew Montero".split("").map((char, index) => (
          <span key={index} className="letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block 
                      animate-fade-right bg-gradient-to-r from-zinc-300/0 
                      via-zinc-300/50 to-zinc-300/0" />

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          A{" "}
          <Link
            target="_blank"
            href="https://github.com/Montero-MD"
            className="underline duration-500 hover:text-zinc-300"
          >
            Software Engineer
          </Link>{" "}
          fueled by curiosity, driven by innovation
        </h2>
      </div>
    </div>
  );
}