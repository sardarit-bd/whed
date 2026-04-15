"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-teal-500/10 flex flex-col items-center justify-center px-6 py-16 text-center">

            {/* 404 big number + icon */}
            <div className="relative inline-flex items-center justify-center mb-8">
                <span
                    className="text-[clamp(80px,16vw,140px)] font-medium leading-none select-none tracking-tight"
                    style={{ color: "var(--primary-color)", opacity: 0.08 }}
                >
                    404
                </span>
                <div className="absolute flex items-center justify-center w-[88px] h-[88px] rounded-full border border-gray-200 bg-white">
                    <div
                        className="flex items-center justify-center w-11 h-11 rounded-full"
                        style={{ backgroundColor: "color-mix(in srgb, var(--primary-color) 10%, transparent)" }}
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--primary-color)"
                            strokeWidth="1.8"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="11" />
                            <line x1="11" y1="14" x2="11.01" y2="14" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-[22px] font-medium text-gray-900 mb-2.5">
                Page not found
            </h1>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-8">
                The page you're looking for doesn't exist or has been moved.
                Double-check the URL or go back home.
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
                <button
                    onClick={() => router.push("/")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: "var(--primary-color)" }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Go to homepage
                </button>
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Go back
                </button>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-gray-100 my-8" />

            {/* Footer links */}
            <div className="flex items-center gap-6 flex-wrap justify-center">
                <a
                    href="/help"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Help center
                </a>
                <a
                    href="/contact"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    Contact support
                </a>
                <a
                    href="/report"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="1 4 1 10 7 10" />
                        <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                    </svg>
                    Report issue
                </a>
            </div>

        </div>
    );
}