"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navitems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Global WHED ID", link: "/" },
        { name: "How to Use", link: "/" },
        { name: "Contact", link: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[#FAFAFA] text-white shadow-md py-5 relative">
            <div className="cs-container mx-auto px-4 lg:px-0 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-end">
                    <Image
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
                        alt="WHED Logo"
                        width={180}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </Link>

                <div className="flex gap-8 items-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-8 text-sm font-normal">
                            {navitems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.link}
                                        className="hover:text-[var(--primary-color)] hover:border-b border-[var(--text-primary)] text-xl text-[var(--text-primary)] transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/donate"
                            className="hidden md:flex  font-[var(--font-inter)] items-center gap-2 px-8 py-5 text-xl font-medium bg-[var(--primary-color)] rounded-lg transition"
                        >
                            <Image src='/images/love-react.png' width={24} height={24} alt="love-react" />
                            <span>Donate</span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--text-primary)] focus:outline-none"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#FAFAFA] shadow-lg z-50">
                    <nav className="cs-container mx-auto px-4 py-6">
                        <ul className="flex flex-col gap-4">
                            {navitems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.link}
                                        onClick={toggleMenu}
                                        className="block py-3 text-xl text-[var(--text-primary)] hover:text-[var(--primary-color)] hover:border-l-4 border-[var(--primary-color)] pl-4 transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/donate"
                            className="lg:hidden text-center my-5 flex  font-[var(--font-inter)] items-center gap-2 px-8 py-5 text-xl font-medium bg-[var(--primary-color)] rounded-lg transition"
                        >
                            <Image src='/images/love-react.png' width={24} height={24} alt="love-react" />
                            <span>Donate</span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}