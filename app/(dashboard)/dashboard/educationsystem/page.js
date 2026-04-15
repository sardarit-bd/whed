'use client';

import {
    Award,
    BarChart2,
    Building2,
    GraduationCap
} from "lucide-react";
import { useState } from "react";
import CredientialTab from "../../../../components/dashboard/education-system/CredientialTab/CredientialTab";
import EducationalSystemTab from "../../../../components/dashboard/education-system/educationalSystemTab/EducationalSystemTab";
import InstitutionsTab from "../../../../components/dashboard/education-system/InstitutionsTab/InstitutionsTab";

const tabs = [
    { label: "Education Systems", icon: GraduationCap, key: "education" },
    { label: "Credentials", icon: Award, key: "credentials" },
    { label: "Institutions", icon: Building2, key: "institutions" },
    { label: "Statistics", icon: BarChart2, key: "statistics" },
];



export default function WHEDEducationSystems({ activeTab = "education", onTabChange }) {
    const [tab, setTab] = useState(activeTab);

    const handleTab = (key) => {
        setTab(key);
        if (onTabChange) onTabChange(key);
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-200 flex flex-col md:flex-row items-center px-4 py-2 gap-4 flex-wrap">
                <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm">
                    <span className="text-lg">🇦🇬</span>
                    <span>Antigua and Barbuda :</span>
                </div>
                <div className="flex flex-1 flex-wrap">
                    {tabs.map((t) => {
                        const Icon = t.icon;
                        return (
                            <button
                                key={t.key}
                                onClick={() => handleTab(t.key)}
                                className={`flex items-center gap-2 px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${tab === t.key
                                    ? "bg-[var(--secondary-color)] text-white"
                                    : "text-white bg-[var(--primary-color)]"
                                    }`}
                            >
                                <Icon size={15} />
                                {t.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {
                tab === "education" ? (
                    <EducationalSystemTab />
                ) : tab === "credentials" ? (
                    <CredientialTab />
                ) : tab === "institutions" ? (
                    <InstitutionsTab />
                ) : tab === "statistics" ? (
                    <EducationalSystemTab />
                ) : (
                    <EducationalSystemTab />
                )
            }

        </div>
    );
}