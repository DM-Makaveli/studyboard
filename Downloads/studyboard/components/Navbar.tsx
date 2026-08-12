"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {href: "/", label: "Home"},
    {href: "/groups", label: "Groups"},
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-6 border-b px-8 py-5 mb-10 w-full">
            <span className="font-bold text-lg text-gray-600">Studyboard</span>
            <div className="flex gap-5">
                {
                    links.map((link) => {
                        const isActive = pathname === link.href ? "text-pink-500" : "text-gray-600";
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={
                                    isActive
                                    ? "text-gray-600"
                                    : "text-gray-600"
                                }
                            >
                                {link.label}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    );
}