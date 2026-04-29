const CheckCircleIcon = () => (
    <svg
        className="w-5 h-5 flex-shrink-0 mt-0.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="11" stroke="#1a6fa0" strokeWidth="1.8" />
        <path
            d="M7 12.5l3.5 3.5 6.5-7"
            stroke="#1a6fa0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function WhatIsWhed() {
    return (
        <section className="px-12 py-16 ">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-14 items-start">

                {/* Left: Text Content */}
                <div>
                    <h2 className="font-black text-[#0d3b5e] uppercase tracking-wide text-4xl mb-6 leading-tight ">
                        What is the WHED?
                    </h2>

                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-4">


                        The World Higher Education Database (WHED) is the International Association of Universities’ (IAU) online reference portal that provides comprehensive information on higher education systems, credentials and just under <b>22,000 institutions</b> in some <b>190 countries</b> and territories.
                    </p>

                    <p className="text-[18px] text-[#2c2c2c] leading-7 mb-4">
                        The WHED is a key resource for the implementation of the UNESCO Global Convention on the Recognition of Qualifications concerning Higher Education, as, in line with Article 8 of the Convention, it provides up-to-date, clear information on national higher education systems, credentials and accredited / recognized higher education institutions. It also provides a unique identifier for each institution listed, the Global WHED ID. The WHED thus functions as a trusted source for facilitating recognition, and for combatting - therefore supporting integrity in higher education, building trust across all higher education systems across the globe - a key objective of the Global Convention.
                    </p>

                    <ul className="list-none p-0 my-5 space-y-3 hidden">
                        <li className="flex items-start gap-2.5 text-[18px] text-[#2c2c2c] leading-relaxed">
                            <CheckCircleIcon />
                            <span>Higher education systems and credentials</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-[18px] text-[#2c2c2c] leading-relaxed">
                            <CheckCircleIcon />
                            <span>
                                All accredited or recognized higher education institutions (HEIs) that meet WHED
                                criteria (currently ca. 21,000 HEIs)
                            </span>
                        </li>
                    </ul>

                    <p className="text-[18px] text-[#2c2c2c] leading-7 hidden">
                        Each HEI listed in the WHED is identified with a unique identifier: the{" "}
                        <a
                            href="#"
                            className="text-[#1a6fa0] font-bold no-underline hover:underline"
                        >
                            Global WHED ID
                        </a>
                        .
                    </p>
                </div>

                {/* Right: Image */}
                <div className="rounded overflow-hidden shadow-lg md:order-none -order-1 w-full">
                    <img
                        src="https://res.cloudinary.com/dg83pvgls/image/upload/v1773130863/a92e91d8029c3dd8ae0883c3cb79433f4e9aeeb8_adx7fw.jpg"
                        alt="University library with students studying"
                        className="w-full h-full object-cover block"
                    />
                </div>

            </div>
        </section>
    );
}