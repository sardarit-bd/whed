const CheckCircleIcon = () => (
    <svg
        className="w-4 h-4 shrink-0 mt-0.5"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="11" stroke="#1a6fa0" strokeWidth="1.8" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#1a6fa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const educationItems = [
    "The different types of higher education institutions available in the country;",
    "The overall structure of the pre-higher and higher education system (including the different stages of study);",
    "The national bodies responsible for higher education (including associations and organisations located within the country);",
    "Admission requirements (including for foreign students);",
    "The quality assurance and recognition systems;",
    "Student life information;",
    "The main credentials.",
];

const generalInfoItems = [
    "Global WHED ID: a unique identifier for each higher education institution registered in the WHED;",
    "Institution name in English, followed by the name in native language, where appropriate;",
    "Contact details: address, website;",
    "Institution funding: public, private, private for-profit;",
    "Year of creation;",
    "Information on academic year, admission requirements;",
    "Language of instruction;",
    "Name of the national competent accrediting body.",
];

const heiSubSections = [
    {
        title: "General Information",
        content: (
            <>
                <p className="text-[18px] text-[#2c2c2c] leading-7 mb-2">
                    The WHED provides the following information:
                </p>
                <ul className="space-y-1 mb-2">
                    {generalInfoItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[18px] text-[#2c2c2c] leading-7">
                            <span className="mt-3 w-1 h-1 rounded-full bg-[#2c2c2c] shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-[18px] text-[#2c2c2c] leading-7">
                    Campuses and branches when they appear in the WHED are linked to the main institution.
                </p>
            </>
        ),
    },
    {
        title: "Officers",
        content: (
            <p className="text-[18px] text-[#2c2c2c] leading-7">
                For principal officers (head, senior administrative officer and international relations officer) name and position.
            </p>
        ),
    },
    {
        title: "Divisions",
        content: (
            <p className="text-[18px] text-[#2c2c2c] leading-7">
                Academic divisions (faculties, colleges, departments, schools, institutes etc.) and fields of study are indicated when available.
            </p>
        ),
    },
    {
        title: "Degrees",
        content: (
            <p className="text-[18px] text-[#2c2c2c] leading-7">
                Degrees and diplomas offered at each level of study, along with fields of study when available.
            </p>
        ),
    },
];

export default function WhatKindOfInformation() {
    return (
        <section className="bg-white py-12 px-6 font-serif">
            <div className="cs-container mx-auto">

                {/* Page Header */}
                <h2 className="font-sans font-black uppercase text-[40px] text-[#0d3b5e] text-center leading-tight tracking-wide mb-4">
                    What kind of information is in the WHED?
                </h2>
                <p className="text-[18px] text-[#2c2c2c] leading-7 text-center max-w-2xl mx-auto mb-10">
                    The WHED database provides comprehensive information organized at the country level and the
                    institutional level. Each country profile is divided into two main sections:
                </p>

                <hr className="border-[#e0e0e0] mb-8" />

                {/* Section 1: Education Systems */}
                <div className="mb-8">
                    <h3 className="font-sans font-bold text-[24px] text-[#1a6fa0] mb-3">
                        Education Systems &amp; Credentials
                    </h3>
                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-4">
                        The WHED provides information on the structure of each country's higher education system
                        and credentials. It is comprised of information on:
                    </p>
                    <ul className="space-y-2">
                        {educationItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-[18px] text-[#2c2c2c] leading-7">
                                <CheckCircleIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="border-[#e0e0e0] mb-8" />

                {/* Section 2: HEIs */}
                <div>
                    <h3 className="font-sans font-bold text-[24px] text-[#1a6fa0] mb-3">
                        Higher education institutions (HEIs)
                    </h3>
                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-5">
                        This section is divided into 4 sections.
                    </p>

                    <div className="space-y-5">
                        {heiSubSections.map(({ title, content }) => (
                            <div key={title}>
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircleIcon />
                                    <span className="font-sans font-bold text-[18px] text-[#1a1a1a]">{title}</span>
                                </div>
                                <div className="pl-6">{content}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}