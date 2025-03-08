"use client";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl mx-auto lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}
