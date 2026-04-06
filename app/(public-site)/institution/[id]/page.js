'use client';

import { useState } from "react";

const universityData = {
    id: "IAU-02547",
    name: "University of Calgary",
    country: "Canada",
    province: "Alberta",
    image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773308829/img_qjq9v3.png",
    logos: [
        { src: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/image_2_jjkklf.png", alt: "University of Calgary" },
        { src: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png", alt: "IAU Member" },
    ],
    sections: [
        {
            id: "general",
            label: "General Information",
            content: {
                type: "general",
                address: {
                    street: "2500 University Drive North West",
                    city: "Calgary",
                    province: "Alberta",
                    postCode: "T2N 1N4",
                    website: "https://www.ucalgary.ca",
                },
                otherSites: "Also Consortium for Research Elastic Wave Exploration Seismology",
                institutionDetails: {
                    funding: "Public",
                    history:
                        "Founded 1945 as University of Alberta at Calgary, and acquired present status and title 1966",
                    academicYear:
                        "September to June (September-December, January-April, May-June). Also Summer Session (July-August)",
                    admissionRequirements:
                        "Secondary school certificate or recognized foreign equivalent",
                    languages: "English",
                    studentBody: "co-ed",
                },
            },
        },
        {
            id: "officers",
            label: "Officers",
            content: { type: "placeholder", text: "Officers information will be displayed here." },
        },
        {
            id: "divisions",
            label: "Divisions",
            content: { type: "placeholder", text: "Divisions information will be displayed here." },
        },
        {
            id: "degrees",
            label: "Degrees",
            content: { type: "placeholder", text: "Degrees information will be displayed here." },
        },
        {
            id: "periodicals",
            label: "Academic Periodicals",
            content: { type: "placeholder", text: "Academic Periodicals information will be displayed here." },
        },
        {
            id: "staffNumbers",
            label: "Student & Staff Numbers",
            content: { type: "placeholder", text: "Student & Staff Numbers will be displayed here." },
        },
    ],
};

function ChevronIcon({ open }) {
    return (
        <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg className="w-3.5 h-3.5 inline mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function InfoRow({ label, value, isLink }) {
    return (
        <div className="grid grid-cols-5 py-2 border-b border-slate-100 last:border-0 gap-2">
            <span className="col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide leading-relaxed">
                {label}
            </span>
            <span className="col-span-3 text-sm text-slate-700 leading-relaxed">
                {isLink ? (
                    <a href={value} className="text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] underline underline-offset-2 break-all" target="_blank" rel="noreferrer">
                        {value}
                    </a>
                ) : (
                    value
                )}
            </span>
        </div>
    );
}

function GeneralContent({ content }) {
    const { address, otherSites, institutionDetails } = content;
    return (
        <div className="space-y-6 text-sm">
            {/* Address */}
            <div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-widest border-b-2 border-[var(--primary-color)] pb-1 inline-block">
                    Address
                </h4>
                <div className="mt-3">
                    <InfoRow label="Street" value={address.street} />
                    <InfoRow label="City" value={address.city} />
                    <InfoRow label="Province" value={address.province} />
                    <InfoRow label="Post Code" value={address.postCode} />
                    <InfoRow label="Website" value={address.website} isLink />
                </div>
            </div>

            {/* Other Sites */}
            <div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-widest border-b-2 border-[var(--primary-color)] pb-1 inline-block">
                    Other Sites
                </h4>
                <p className="mt-3 text-slate-600 text-sm">{otherSites}</p>
            </div>

            {/* Institution Details */}
            <div>
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-widest border-b-2 border-[var(--primary-color)] pb-1 inline-block">
                    Institution Details
                </h4>
                <div className="mt-3">
                    <InfoRow label="Institution Funding" value={institutionDetails.funding} />
                    <InfoRow label="History" value={institutionDetails.history} />
                    <InfoRow label="Academic Year" value={institutionDetails.academicYear} />
                    <InfoRow label="Admission Requirements" value={institutionDetails.admissionRequirements} />
                    <InfoRow label="Language(s)" value={institutionDetails.languages} />
                    <InfoRow label="Student Body" value={institutionDetails.studentBody} />
                </div>
            </div>
        </div>
    );
}

function AccordionSection({ section, isOpen, onToggle }) {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-colors duration-200 text-left"
            >
                <span className="font-semibold text-slate-700 text-sm tracking-wide">{section.label}</span>
                <ChevronIcon open={isOpen} />
            </button>
            {isOpen && (
                <div className="px-5 py-4 bg-white border-t border-slate-100">
                    {section.content.type === "general" ? (
                        <GeneralContent content={section.content} />
                    ) : (
                        <p className="text-sm text-slate-500 italic">{section.content.text}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default function UniversityProfile() {
    const [openSection, setOpenSection] = useState("general");
    const [activeNav, setActiveNav] = useState("general");

    const toggleSection = (id) => {
        setOpenSection((prev) => (prev === id ? null : id));
        setActiveNav(id);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">

            <div className="cs-container mx-auto py-8">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 border border-slate-200">
                    <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className=" h-52 md:h-auto flex-shrink-0 overflow-hidden">
                            <img
                                src={universityData.image}
                                alt={universityData.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src =
                                        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop";
                                }}
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 p-6 flex flex-col justify-center">

                            <span className="text-xs mb-2 font-mono tracking-widest bg-sky-400/10 text-bold text-gray-900 w-fit px-2 py-1 rounded-md mb-2">
                                IAU-021599
                            </span>

                            <h1 className="text-3xl font-black text-slate-900 leading-tight mb-2 tracking-tight">
                                {universityData.name}
                            </h1>
                            <p className="text-sm text-slate-500 mb-4">
                                <MapPinIcon />
                                {universityData.country} · {universityData.province}
                            </p>
                            {/* Logos */}
                            <div className="flex items-center gap-4 mt-2">
                                <div className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center h-12 w-32">
                                    <img
                                        src={universityData.logos[0].src}
                                        alt={universityData.logos[0].alt}
                                        className="max-w-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.parentNode.innerHTML =
                                                '<span class="text-xs font-bold text-[var(--primary-color)]">UCALGARY</span>';
                                        }}
                                    />
                                </div>
                                <div className="px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 flex items-center justify-center h-12 w-24">
                                    <img
                                        src={universityData.logos[1].src}
                                        alt={universityData.logos[1].alt}
                                        className="max-w-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.parentNode.innerHTML =
                                                '<span class="text-xs font-bold text-[var(--primary-color)]">UCALGARY</span>';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar Nav */}
                    <aside className="md:w-48 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
                                Contents
                            </p>
                            <nav className="space-y-1">
                                {universityData.sections.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => toggleSection(s.id)}
                                        className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all duration-150 font-medium ${activeNav === s.id
                                            ? "bg-[var(--primary-color)] text-white shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100"
                                            }`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Accordion Sections */}
                    <div className="flex-1 space-y-3">
                        {universityData.sections.map((section) => (
                            <AccordionSection
                                key={section.id}
                                section={section}
                                isOpen={openSection === section.id}
                                onToggle={() => toggleSection(section.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}