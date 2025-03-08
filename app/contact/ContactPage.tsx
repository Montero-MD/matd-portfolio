"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import SectionHeader from "../components/sectionheader";

/** Contact item data structure */
interface ContactItem {
    icon: ReactNode;
    href: string;
    label: string;
    handle: string;
}

const socials: ContactItem[] = [
    {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/montero-md/",
        label: "LinkedIn",
        handle: "Matthew David Montero",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/Montero-MD",
        label: "GitHub",
        handle: "Montero-MD",
    },
];

const email: ContactItem[] = [
    {
        icon: <Mail size={20} />,
        href: "mailto:montero.matthewdavid@gmail.com",
        label: "Email",
        handle: "montero.matthewdavid@gmail.com",
    },
];

interface ContactLinkCardProps {
    item: ContactItem;
    isFullWidth?: boolean;
}

/** Reusable card component for each contact item */
function ContactLinkCard({ item, isFullWidth = false }: ContactLinkCardProps) {
    // We'll store the toast info (title/subtitle) in state
    const [toastInfo, setToastInfo] = useState<{ title: string; subtitle: string } | null>(null);

    // For showing the small "Copy Email" tooltip on hover
    const [showTooltip, setShowTooltip] = useState(false);

    // Click handler specifically for the email item
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // prevent the default mailto behavior

        // Copy the email to clipboard
        navigator.clipboard.writeText(item.handle);

        // Show the toast
        setToastInfo({
            title: "✔ Email Copied",
            subtitle: "Looking forward to hearing from you soon!",
        });

        // Hide after 2 seconds
        setTimeout(() => setToastInfo(null), 5000);
    };

    // Decide whether this is the email card
    const isEmail = item.label.toLowerCase() === "email";

    return (
        <div className={isFullWidth ? "sm:col-span-2" : ""}>
            <Card>
                {/* If it's the email card, we attach a custom onClick */}
                <Link
                    href={item.href}
                    target="_blank"
                    onClick={isEmail ? handleEmailClick : undefined}
                    className="relative flex flex-col items-center gap-4 p-6 duration-700 group md:gap-8 md:py-12 md:px-16"
                    onMouseEnter={() => isEmail && setShowTooltip(true)}
                    onMouseLeave={() => isEmail && setShowTooltip(false)}
                >
                    {/* Vertical line in the middle */}
                    <span
                        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                        aria-hidden="true"
                    />
                    {/* Icon circle */}
                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                        {item.icon}
                    </span>

                    {/* The handle + label text */}
                    <div className="z-10 flex flex-col items-center">
                        {/* If it's email, wrap handle in a group so we can show a tooltip on hover */}
                        <span className="relative group">
                            <span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                {item.handle}
                            </span>
                            {/* Tooltip that says "Copy Email" */}
                            {isEmail && showTooltip && (
                                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
                                 bg-zinc-800 text-zinc-200 text-xs py-1 px-2 rounded 
                                 opacity-90 shadow-lg whitespace-nowrap">
                                    Copy Email
                                </span>
                            )}
                        </span>

                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                            {item.label}
                        </span>
                    </div>
                </Link>
            </Card>

            {/* Toast for "Email Copied!" */}
            {toastInfo && (
                <div
                    className="
                        toast fixed top-8 left-1/2 z-50 transform -translate-x-1/2 
                        bg-black bg-opacity-60 text-white px-4 py-2 rounded shadow-md 
                        transition-opacity duration-300
                    "
                >
                    {/* The child uses `animate-float` so the parent's centering isn't overridden */}
                    <p className="mt-1 text-sm font-semibold text-zinc-300">{toastInfo.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{toastInfo.subtitle}</p>
                </div>
            )}
        </div>
    );
}

export default function ContactPage() {
    return (
        <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />

            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <SectionHeader title="Let's Work Together" subtitle="Reach me here:" />

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:gap-16">
                    {email.map((item) => (
                        <ContactLinkCard key={item.href} item={item} isFullWidth />
                    ))}

                    {socials.map((item) => (
                        <ContactLinkCard key={item.href} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}