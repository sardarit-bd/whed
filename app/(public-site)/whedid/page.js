import Image from "next/image";
export default function Whedid() {
    const goals = [
        "Foster transparency of higher education on a global scale;",
        "Make available information on higher education systems and the list of nationally accredited higher education institutions to all;",
        "Help facilitate communication within the global higher education community;",
        "Address the needs of Higher Education stakeholders seeking to identify accredited HE institutions and gather information on them;",
        "Increase access, speed and the reliability of information;",
        "Provide better overall administrative certainty;",
        "Finally yet importantly, it aims at combating fraud in higher education.",
    ];

    const stakeholders = [
        { label: "Higher Education Experts", iconColor: "text-blue-500", bg: "bg-blue-50" },
        { label: "Researchers", iconColor: "text-green-500", bg: "bg-green-50" },
        { label: "Accreditation officers", iconColor: "text-purple-500", bg: "bg-purple-50" },
        { label: "International student officers", iconColor: "text-orange-400", bg: "bg-orange-50" },
        { label: "UN agencies", iconColor: "text-blue-500", bg: "bg-blue-50" },
        { label: "HR administrators", iconColor: "text-red-400", bg: "bg-red-50" },
    ];

    return (
        <main className="min-h-screen bg-white  text-gray-700">
            <div className="cs-container mx-auto px-6 md:px-0 py-12">

                {/* Section 1 */}
                <section className="mb-12">
                    <h1 className="text-[40px] font-extrabold text-[#1a4f7a] uppercase tracking-wide mb-4">
                        What is the Global WHED ID?
                    </h1>
                    <p className="text-[18px] leading-relaxed text-gray-600">
                        Each institution in the WHED has its own unique code, the Global WHED ID, which makes those institutions in the WHED easy to identify. These were created within the context of the Global Convention to aid transparency and access to accurate information on States Parties’ higher education systems and qualifications.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="mb-10">
                    <h2 className="text-[40px] font-extrabold text-[#1a4f7a] uppercase tracking-wide mb-4">
                        Why Was It Created?
                    </h2>
                    <p className="text-[18px] leading-relaxed text-gray-600 mb-6">
                        This project gained additional momentum in connection during the drafting process of the{" "}
                        <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                            UNESCO Global Convention on the recognition of higher education qualifications
                        </a>
                        , submitted for adoption at the UNESCO General Conference (IAU took part in the process).
                        This Convention adopted in November 2019 and dedicated to recognition of higher education
                        qualifications aims to increase the transparency of the global higher education landscape
                        at the global level, and to enhance orientation through the ever-expanding field of higher
                        education, by providing a standard for the listings of accredited higher education institutions.
                    </p>

                    {/* Image */}
                    <div className="w-full rounded-lg overflow-hidden mb-6 bg-gray-100 h-90 flex items-center justify-center">
                        <Image
                            height={1200}
                            width={1200}
                            src="https://res.cloudinary.com/dg83pvgls/image/upload/v1773295887/f088d50096306e243e630cbbb5338224ac440359_ufxq2d.jpg"
                            alt="Group of higher education stakeholders collaborating"
                            className="w-full h-[700px] object-fit"
                        />
                    </div>

                    {/* Goals */}
                    <p className="text-[18px] font-bold text-gray-800 mb-3">
                        The new development serves several major goals that are dear to the Association:
                    </p>
                    <ul className="space-y-2">
                        {goals.map((goal, i) => (
                            <li key={i} className="flex items-center gap-2 text-[18px] text-gray-600">
                                <span className="mt-1 w-2 h-2 rounded-full bg-[#1a4f7a] flex-shrink-0" />
                                {goal}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-[40px] font-extrabold text-[#1a4f7a] uppercase tracking-wide mb-6">
                        For Whom?
                    </h2>

                    <div className="border border-gray-200 rounded-lg p-6">
                        <p className="text-[18px] mb-6">
                            <span className="text-[#3d9adf] font-semibold">All stakeholders</span>
                            {", whether they be:"}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {stakeholders.map((s, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-2 text-[14px] text-gray-700 ${s.bg} px-4 py-3 rounded-xl`}
                                >
                                    <svg
                                        className={`w-4 h-4 flex-shrink-0 ${s.iconColor}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                                    </svg>
                                    {s.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}