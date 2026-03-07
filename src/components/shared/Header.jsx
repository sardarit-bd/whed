import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { LuHandHeart } from "react-icons/lu";

export default function Header() {

    const navitems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="bg-[#fff] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-0 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-end">
                    <Image
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
                        alt="WHED Logo"
                        width={120}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-8 text-sm font-medium">
                        {navitems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.link}
                                    className="hover:text-[#1EC6E6] text-[#00355B] transition-colors duration-300"
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
                        className="flex items-center gap-2 px-4 py-2 bg-[#1EC6E6] text-[#00355B] font-semibold rounded-md hover:bg-[#17b2cc] transition"
                    >
                        <LuHandHeart className="text-lg" />
                        <span>Donate</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}