const countries = [
    {
        name: "Belgium",
        content: (
            <>
                <p className="text-[16px] text-[#2c2c2c] leading-7 mb-2">
                    Belgium is treated as two entities:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li className="text-[16px] text-[#2c2c2c] leading-7">French-speaking Belgium</li>
                    <li className="text-[16px] text-[#2c2c2c] leading-7">Flemish-speaking Belgium</li>
                </ul>
            </>
        ),
    },
    {
        name: "Canada",
        content: (
            <p className="text-[16px] text-[#2c2c2c] leading-7">
                Provides a general overview of the education system and degrees, and a detailed breakdown of the
                10 provinces and 3 territories, each one having its own education system.
            </p>
        ),
    },
    {
        name: "United States of America",
        content: (
            <p className="text-[16px] text-[#2c2c2c] leading-7">
                The United States of America offers a general presentation of the educational system and credentials,
                and is then subdivided into a list of institutions in 50 states, plus Guam, the Virgin Islands and
                Puerto Rico. The section « Outside USA » lists HEIs located outside the United States, but which are
                accredited by a recognized accrediting body in the US.
            </p>
        ),
    },
    {
        name: "The Holy See",
        content: (
            <p className="text-[16px] text-[#2c2c2c] leading-7">
                The Holy See is registered in the WHED as it is a granted permanent observer state status in the
                United Nations.
            </p>
        ),
    },
];

export default function CountryCondition() {
    return (
        <section className="bg-white px-12 py-16 ">
            <div className="cs-container mx-auto">

                {/* Header */}
                <h2 className=" font-black uppercase text-[40px] text-[#0d3b5e] text-center leading-tight tracking-wide mb-8">
                    What is the condition for a country <br /> to be listed in the WHED?
                </h2>

                {/* Highlight Box */}
                <div className="border-l-4 border-[#1a6fa0] bg-[#eef4fb] px-5 py-4 rounded-md mb-6">
                    <p className="text-[18px] text-[#2c2c2c] leading-7">
                        Be a Member State or be an Associate Member listed by UNESCO
                    </p>
                </div>

                {/* Disclaimer */}
                <p className="text-[15px] text-[#555] leading-7 italic mb-8">
                    The designations employed for countries and territories are those in use in the United Nations
                    system and do not imply any expression of opinion with regard to their status or the delimitations
                    of their frontiers.
                </p>

                {/* Specificities */}
                <p className=" font-bold text-[18px] text-[#1a1a1a] mb-4">
                    Specificities of certain countries:
                </p>

                <div className="space-y-4">
                    {countries.map(({ name, content }) => (
                        <div key={name} className="border border-[#e0e0e0] rounded-md px-6 py-5 bg-[#F8F9FB]">
                            <h3 className=" font-bold text-[17px] text-[#1a1a1a] mb-2">{name}</h3>
                            {content}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}