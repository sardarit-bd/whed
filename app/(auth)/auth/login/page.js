"use client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WHEDLogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleValidate = (e) => {
        e.preventDefault();
        // Add your auth logic here
        console.log("Validate:", { login, password });
    };

    const handleReset = () => {
        setLogin("");
        setPassword("");
    };

    const handleCancel = () => {
        setLogin("");
        setPassword("");
    };

    return (
        <div className="min-h-screen bg-[#dff0f4] flex items-center justify-center px-4 py-10">
            {/* Card */}
            <div className="w-full max-w-5xl bg-white rounded-md shadow-md overflow-hidden">

                {/* Card Header */}
                <div className="bg-[#1a7fa8] px-6 py-3.5">
                    <h2 className="text-center text-white text-base font-semibold tracking-wide">
                        Log in
                    </h2>
                </div>

                {/* Card Body */}
                <div className="flex flex-col sm:flex-row">

                    {/* ── Left: Logo Panel ── */}
                    <div className="flex items-center justify-center bg-white border-b sm:border-b-0 sm:border-r border-gray-100 px-8 py-8 sm:w-56 md:w-72 shrink-0">
                        <div className="flex flex-col items-center justify-center gap-3 select-none">
                            <Image
                                src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
                                alt="WHED Logo"
                                width={1000}
                                height={1000}
                                priority
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* ── Right: Form Panel ── */}
                    <div className="flex-1 px-6 sm:px-8 md:px-10 py-8">
                        <form onSubmit={handleValidate} className="space-y-5">

                            {/* Login field */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <label className="text-sm font-semibold text-gray-700 sm:w-24 shrink-0">
                                    Login
                                </label>
                                <input
                                    type="text"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    placeholder="Enter your login"
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#1a7fa8]/40 focus:border-[#1a7fa8] transition-all"
                                />
                            </div>

                            {/* Password field */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <label className="text-sm font-semibold text-gray-700 sm:w-24 shrink-0">
                                    Password
                                </label>
                                <div className="flex-1 relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#1a7fa8]/40 focus:border-[#1a7fa8] transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((p) => !p)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgotten password + action buttons */}
                            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                                {/* Forgotten password */}
                                <Link
                                    href="/auth/forgot-password"
                                    className="text-xs text-[#1a7fa8] hover:underline text-center sm:text-left"
                                >
                                    Forgotten password?
                                </Link>

                                {/* Buttons */}
                                <div className="flex items-center justify-center md:justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="px-5 py-1.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="px-5 py-1.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-1.5 text-sm font-semibold text-white bg-[#1a7fa8] rounded-sm hover:bg-[#155f80] transition-colors shadow-sm cursor-pointer"
                                    >
                                        Validate
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}