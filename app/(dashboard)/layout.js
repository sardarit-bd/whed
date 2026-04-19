"use client";
import { ChevronDown, ChevronRight, CirclePlus, FileText, Home, LogOut, Menu, SquareUserRound, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


// ── ALL DATA ──────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
    { id: "admin", label: "Administration", children: null },
    { id: "tempdb", label: "Temporary Database", children: null },
    {
        id: "selectupdates", label: "Select Updates", defaultOpen: false,
        children: [
            { label: "Define Responsibilities", link: "/dashboard/defineresponsibilisies" },
            { label: "Select Institutions", link: "/dashboard/selectinstitutions" },
        ],
    },
    {
        id: "myupdates", label: "My Updates", defaultOpen: true,
        children: [
            { label: "Corrections par listes", icon: "file", link: "/dashboard/educationsystem" },
            { label: "Antigua and Barbuda", flag: "🇦🇬", link: "/dashboard/educationsystem" },
            { label: "Aruba", flag: "🇦🇼", link: "/dashboard/educationsystem" },
            { label: "Peru", flag: "🇵🇪", link: "/dashboard/educationsystem" },
        ],
    },
    { id: "fulldb", label: "Full Database", children: null },
];


// ── NAV ITEM ──────────────────────────────────────────────────────────────────
function NavItem({ item }) {
    const [open, setOpen] = useState(item.defaultOpen ?? false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className="mb-2">
            <button
                onClick={() => hasChildren && setOpen((p) => !p)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md bg-[var(--primary-color)] hover:bg-[var(--primary-color)] active:bg-[var(--primary-color)] text-white text-sm font-semibold transition-colors duration-150 cursor-pointer"
            >
                <span className="text-left leading-tight">{item.label}</span>
                {hasChildren && (
                    <span className="ml-2 shrink-0 transition-transform duration-200">
                        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </span>
                )}
            </button>

            {hasChildren && open && (
                <div className="mt-0.5 ml-1 space-y-0">
                    {item.children.map((child) => (
                        <a
                            key={child.label}
                            href={child.link || "#"}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#0e7a9e] hover:text-[#0a5f7a] hover:underline transition-colors"
                        >
                            {child.flag && <span className="text-sm leading-none">{child.flag}</span>}
                            {child.icon === "file" && (
                                <FileText size={11} className="text-[#1a9fbe] shrink-0" />
                            )}
                            {!child.flag && !child.icon && (
                                <span className="w-1 h-1 rounded-full bg-[var(--primary-color)] shrink-0" />
                            )}
                            <span>{child.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── SIDEBAR CONTENT ───────────────────────────────────────────────────────────
function Sidebar({ onClose, pathName }) {

    const router = useRouter();

    return (
        <div className="flex flex-col h-full bg-white border-r border-gray-200">
            {/* Logo */}
            <div className="px-4 pt-5 pb-4 border-b border-gray-100 flex items-start gap-2 relative">
                <div>
                    <Image
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
                        alt="WHED Logo"
                        width={200}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 rounded transition-colors"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            {/* Quick links */}
            <div className="flex justify-around items-center py-3 border-b border-gray-100 px-2">
                {[
                    { Icon: Home, label: "Home", link: "/dashboard" },
                    { Icon: CirclePlus, label: "Add", link: "/dashboard/addrecord" },
                    { Icon: User, label: "My profile", link: "/dashboard/profile" },
                ].map(({ Icon, label, link }) => (
                    <Link
                        href={link}
                        key={label}
                        className={`flex flex-col items-center gap-0.5 text-gray-500 hover:text-[#1a9fbe] transition-colors cursor-pointer`}
                    >
                        <div className={`rounded-md px-2 py-2 ${pathName == link ? "bg-[var(--primary-color)] text-white" : "border border-gray-200"}`}>
                            <Icon size={17} strokeWidth={1.75} />
                        </div>
                        <span className="text-[9.5px] leading-tight">{label}</span>
                    </Link>
                ))}
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
                {NAV_ITEMS.map((item) => (
                    <NavItem key={item.id} item={item} />
                ))}
            </nav>



            <div className="w-full px-3 py-4">
                <button onClick={() => { router.push("/auth/login"); }} className="bg-[var(--primary-color)] text-white w-full py-2 rounded-md flex items-center justify-center gap-1.5 cursor-pointer">
                    <LogOut size={17} strokeWidth={1.75} className="rotate-180" />
                    <span>Exit</span>
                </button>
            </div>
        </div>
    );
}


// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function WHEDDashboard({ children }) {

    const pathName = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const fn = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener("resize", fn);
        return () => window.removeEventListener("resize", fn);
    }, []);

    return (
        <div className="flex h-screen bg-[#eaf5f8] overflow-hidden font-sans">

            {/* Mobile backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`fixed inset-y-0 left-0 z-40 w-52 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar onClose={() => setMobileOpen(false)} pathName={pathName} />
            </div>

            {/* Desktop sidebar */}
            <aside className="hidden md:flex flex-col w-64 shrink-0">
                <Sidebar pathName={pathName} />
            </aside>

            {/* Main area */}
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">

                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center gap-3 shrink-0 min-h-[70px]">
                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden p-1.5 rounded text-gray-500 hover:bg-gray-100 transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>


                    <div className="block flex-1 md:hidden">
                        <Image
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
                            alt="WHED Logo"
                            width={100}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </div>



                    {/* Title */}
                    <h1 className="hidden md:block flex-1 text-sm sm:text-base font-semibold text-gray-700 min-w-0 truncate">
                        Welcome{" "}
                        <span className="text-[#1a9fbe] font-bold">[Craig Pettifor]</span>
                        <span className="hidden sm:inline"> to your workspace</span>
                    </h1>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button className="hidden sm:block border border-gray-300 text-gray-700 text-xs sm:text-sm font-normal px-3 sm:px-4 py-1.5 rounded hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap">
                            Global Synthesis
                        </button>
                        <button className="border border-gray-300 text-gray-700 text-xs sm:text-sm font-normal px-3 sm:px-4 py-1.5 rounded hover:bg-gray-50 active:bg-gray-100 transition-colors whitespace-nowrap">
                            <span className="sm:hidden">Synthesis</span>
                            <span className="hidden sm:inline">Public website synthesis</span>
                        </button>
                    </div>
                    <div>
                        <div className="bg-[var(--primary-color)] w-[40px] h-[40px] rounded-md flex items-center justify-center text-white font-bold cursor-pointer">
                            <SquareUserRound />
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-4">
                    {
                        children
                    }
                </main>
            </div>
        </div>
    );
}