"use client";

import { useState } from "react";
import EntranceTab from "../../../../../components/dashboard/education-system/addcredientials/EntranceTab";
import GeneralTab from "../../../../../components/dashboard/education-system/addcredientials/GeneralTab";


const TABS = [
    { id: "general", label: "General Information" },
    { id: "entrance", label: "Entrance Requirements" },
];




function PlaceholderTab({ label }) {
    return (
        <div className="flex items-center justify-center h-48 text-sm text-gray-400">
            {label} content goes here
        </div>
    );
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function InstitutionForm() {
    const [activeTab, setActiveTab] = useState("general");

    const renderTab = () => {
        switch (activeTab) {
            case "general": return <GeneralTab />;
            case "entrance": return <EntranceTab />;
            default: return null;
        }
    };

    return (
        <div className="h-fit bg-gray-50">
            <div className=" bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">

                {/* ── Tab Bar ── */}
                <div className="overflow-x-auto border-b border-gray-100">
                    <nav className="flex min-w-max">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 outline-none cursor-pointer"
                                style={
                                    activeTab === tab.id
                                        ? {
                                            borderBottomColor: "var(--primary-color)",
                                            color: "var(--primary-color)",
                                            backgroundColor:
                                                "color-mix(in srgb, var(--primary-color) 6%, transparent)",
                                        }
                                        : {
                                            borderBottomColor: "transparent",
                                            color: "#6b7280",
                                        }
                                }
                                onMouseEnter={(e) => {
                                    if (activeTab !== tab.id) e.currentTarget.style.color = "#111827";
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.id) e.currentTarget.style.color = "#6b7280";
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ── Form Body ── */}
                <div className="p-4 sm:p-6 lg:p-8">{renderTab()}</div>


            </div>
        </div>
    );
}