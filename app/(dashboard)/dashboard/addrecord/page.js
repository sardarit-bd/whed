"use client";

import { useState } from "react";

const TABS = [
    { id: "general", label: "General Information" },
    { id: "officers", label: "Officers" },
    { id: "divisions", label: "Divisions" },
    { id: "degrees", label: "Degrees" },
    { id: "stats", label: "Statistics and Publications" },
    { id: "history", label: "Record History" },
];


import DegreesTab from "../../../../components/dashboard/addrecord/DegreesTab";
import DivisionTab from "../../../../components/dashboard/addrecord/DivisionTab";
import GeneralTab from "../../../../components/dashboard/addrecord/GeneralTab";
import OfficersTab from "../../../../components/dashboard/addrecord/OfficersTab";
import RecordHistoryTab from "../../../../components/dashboard/addrecord/RecordHistoryTab";
import StaticesTab from "../../../../components/dashboard/addrecord/StaticesTab";

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
            case "officers": return <OfficersTab />;
            case "divisions": return <DivisionTab />;
            case "degrees": return <DegreesTab />;
            case "stats": return <StaticesTab />;
            case "history": return <RecordHistoryTab />;
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