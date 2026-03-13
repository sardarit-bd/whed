const bulletItems = [
    "a questionnaire is sent to each institution, using the contacts in the WHED, and inviting them to check and update their institutional data;",
    "the date of the latest update is given at the bottom of each entry.",
];

export default function WhoProvides() {
    return (
        <section className="px-12 py-16 ">
            <div className="cs-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">

                {/* Left: Text Content */}
                <div className="flex flex-col">
                    <h2 className=" font-black uppercase text-[40px] text-[#0d3b5e] leading-tight tracking-wide mb-6">
                        Who provides the information?
                    </h2>

                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-5">
                        Information on education systems, credentials and institutions is based upon data
                        provided by national competent bodies, including the{" "}
                        <strong className="font-bold text-[#1a1a1a]">
                            ENIC NARIC (European Network of Information Centres – National Academic
                            Recognition Information Centres) Networks
                        </strong>
                        . Information is also sought on official websites of the various national competent bodies.
                    </p>

                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-6">
                        For each education system, the source of information is indicated at the end of the
                        information sheet, as well as the year the information was last updated.
                    </p>

                    {/* Callout Box */}
                    <div className="border-l-4 border-[#1a9a8a] bg-[#f8fbfb] rounded-md px-5 py-4">
                        <p className="text-[18px] text-[#2c2c2c] leading-7 mb-3">
                            For each higher education institution:
                        </p>
                        <ul className="space-y-2">
                            {bulletItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[18px] text-[#2c2c2c] leading-7">
                                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#2c2c2c] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: Image — stretches to match left column height */}
                <div className="rounded overflow-hidden shadow-lg md:order-none -order-1">
                    <img
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1773136256/abcd_1_rolukt.jpg"
                        alt="Modern institutional building with columns"
                        className="w-full h-full object-cover block"
                    />
                </div>

            </div>
        </section>
    );
}