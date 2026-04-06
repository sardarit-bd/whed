const CheckCircleIcon = ({ color = "#1a6fa0" }) => (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="1.8" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ExemptionIcon = () => (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" stroke="#e05252" strokeWidth="1.8" />
        <path d="M12 7v5M12 16v.5" stroke="#e05252" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const conditions = [
    {
        title: "Official Recognition",
        desc: "Be recognized and referenced by the national competent body",
        variant: "blue",
    },
    {
        title: "Degree-Conferring Institution",
        desc: "Be a degree-conferring institution offering at least a four-year degree or a four-year professional diploma",
        variant: "blue",
    },
    {
        title: "Graduation History",
        desc: "Have had at least three cohorts at undergraduate level or its equivalent at a postgraduate institution",
        variant: "blue",
    },
    {
        title: "Exemptions",
        desc: "The WHED does not include institutions offering exclusively military or religious training.",
        variant: "red",
    },
];

const furtherItems = [
    {
        color: "#1a6fa0",
        text: "An institution offering only a three-year university-level degree, which becomes a Member of IAU will be listed in the WHED; likewise, an institution which has not had three cohorts, but which successfully applies for IAU Observer Member status will also be listed in the WHED.",
    },
    {
        color: "#e08c1a",
        text: "Where there is insufficient information on an institution (no website, no contact details, no official information on its diplomas / degrees) then we are unable to create an entry in the WHED.",
    },
    {
        color: "#e08c1a",
        text: "Institutions that may have been recognized by their national competent body in the past, but are no longer recognized, are not listed in the WHED.",
    },
];

export default function HEIConditions() {
    return (
        <section className="bg-white px-12 py-16 ">
            <div className="cs-container mx-auto">

                {/* Header */}
                <h2 className=" font-black uppercase text-[40px] text-[#0d3b5e] text-center leading-tight tracking-wide mb-10">
                    What are the conditions for an HEI to <br /> be listed in the WHED?
                </h2>

                {/* Condition Cards */}
                <div className="space-y-3 mb-6">
                    {conditions.map(({ title, desc, variant }) => (
                        <div
                            key={title}
                            className={`border rounded-md px-5 py-4 flex items-start gap-3 ${variant === "red"
                                ? "border-[#e05252] bg-[#fff5f5] border-l-4"
                                : "border-[#e0e0e0] bg-white border-l-4 border-l-[#1a6fa0]"
                                }`}
                        >
                            {variant === "red" ? <ExemptionIcon /> : <CheckCircleIcon />}
                            <div>
                                <p className=" font-bold text-[16px] text-[#1a1a1a] mb-1">{title}</p>
                                <p className="text-[15px] text-[#2c2c2c] leading-6">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Further Information Box */}
                <div className="border border-[#e0e0e0] rounded-md px-6 py-5 bg-white mb-6">
                    <p className=" font-bold text-[17px] text-[#1a1a1a] mb-4">Further Information:</p>
                    <ul className="space-y-3">
                        {furtherItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-[15px] text-[#2c2c2c] leading-6">
                                <CheckCircleIcon color={item.color} />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer Note */}
                <div className="border border-[#e0e0e0] rounded-md px-6 py-4 bg-[#fafafa]">
                    <p className="text-[15px] text-[#555] leading-6 italic">
                        The IAU/UNESCO Information Centre thanks all bodies, the ENIC-NARIC Network, and higher
                        education institutions, that have provided material.
                    </p>
                </div>

            </div>
        </section>
    );
}