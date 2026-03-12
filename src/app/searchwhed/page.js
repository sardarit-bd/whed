export default function HowToSearchPage() {
    const NumberBadge = ({ n, color = "bg-[#0081A0]" }) => (
        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[11px] font-bold ${color} flex-shrink-0`}>
            {n}
        </span>
    );

    return (
        <main className="min-h-screen bg-white text-gray-700 text-sm font-sans">
            <div className="cs-container mx-auto px-6 py-10">

                {/* Page Title */}
                <h1 className="text-[40px] font-extrabold text-[#1a4f7a] uppercase tracking-wide mb-3">
                    How to Search on the WHED Portal?
                </h1>
                <p className="text-[18px] text-gray-600 leading-relaxed mb-10">
                    World Higher Education Database (WHED) portal provides clear instructions on how users can search for information about higher education
                    systems and institutions worldwide. It explains the process of performing a basic search (by country, institution name, field of study, or WHED ID) as
                    well as advanced search options available through MyWHED login for IAU members.
                </p>

                {/* Basic Search */}
                <h2 className="text-[40px] font-bold text-gray-800 mb-5">Basic Search</h2>

                {/* Map Search */}
                <div className="border border-gray-200 rounded-lg p-5 mb-5 pl-7">
                    <h3 className="font-bold text-gray-800 mb-3 text-[24px]">Map Search</h3>
                    <div className="space-y-2">
                        {[
                            "Choose a country on the interactive map",
                            'Select either "Education systems and credentials" or "HEIs" (Higher Education Institutions)',
                            'Click "Go" to View results',
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                                <NumberBadge n={i + 1} />
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* HEI Quick Search */}
                <div className="border border-gray-200 rounded-lg p-5 mb-5">
                    <h3 className="font-bold text-gray-800 mb-4 text-[24px]">HEI Quick Search</h3>

                    {/* Option 1 */}
                    <div className="border-l-3 pl-2 text-[16px]">
                        <p className="font-semibold text-gray-700 mb-2">Option 1: Search by Institution Name</p>
                        <div className="space-y-2 mb-4">
                            {[
                                "Choose a country from the dropdown list",
                                'Enter HEI keyword(s) in Latin script (e.g., "Harvard", "Oxford")',
                                'Click "Go" to search',
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                                    <NumberBadge n={i + 1} />
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Option 2 */}
                    <div className="border-l-3 pl-2">
                        <p className="font-semibold text-gray-700 mb-2 text-[16px]">Option 2: Search by Field of Study</p>
                        <div className="space-y-2 mb-3">
                            {[
                                "Choose a country from the dropdown list",
                                'Enter field of study keyword(s) in English (e.g., "Engineering", "Medicine", "Business")',
                                'Click "Go" to search',
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                                    <NumberBadge n={i + 1} />
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-[14px] text-gray-500 mb-4 bg-[#F3F9FA] p-2 rounded-md">
                            <span className="font-semibold">Note:</span> Interactive list of 28 disciplines is available with MyWHED access
                        </p>
                    </div>

                    {/* Option 3 */}
                    <div className="border-l-3 border-red-500 pl-2 text-[16px]">
                        <p className="font-semibold text-gray-700 mb-2">Option 3: Search by Global WHED ID</p>
                        <p className="text-[16px] text-gray-600 mb-2">Enter a Global WHED ID to directly access an institution's profile</p>
                        <p className="text-[16px] text-gray-600 bg-[#FFF7ED] p-2 rounded-md">
                            <span className="font-semibold text-[#1a4f7a]">Where to find it:</span>{" "}
                            <span className="text-[#3d9adf] text-[14px]">The identifier is available at the top of each HEI entry and on each data sheet</span>
                        </p>
                    </div>
                </div>

                {/* Search All IAU Members */}
                <div className="border border-gray-200 bg-gradient-to-r from-[#EFF6FF] to-[#EEF2FF] rounded-lg p-5 mb-10 pl-7">
                    <h3 className="font-bold text-gray-800 mb-3 text-[16px]">Search All IAU Members</h3>
                    <div className="space-y-2 mb-3">
                        {[
                            'Select "All countries" from the country dropdown',
                            'Check the "Only AU members" option',
                            'Click "Go" to view all IAU member institutions worldwide',
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-2 text-[16px] text-gray-600">
                                <NumberBadge n={i + 1} color="bg-[#0081A0]" />
                                <span>{step}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 bg-white p-2 rounded-md">
                        <span className="font-bold text-[14px]">Note:</span> Results are displayed in alphabetical order by default, but can be sorted by institution name or country
                    </p>
                </div>

                {/* Advanced Search */}
                <h2 className="text-[40px] font-bold text-gray-800 mb-5">
                    Advanced Search – Available Through MyWhed Only
                </h2>

                <div className="border border-[#3d9adf] rounded-lg p-5 mb-5">
                    <h3 className="font-bold text-gray-800 mb-2 text-[24px]">How To Search?</h3>
                    <p className="text-[16px] text-gray-600 mb-5">
                        Advanced search is available exclusively through <span className="font-semibold text-[#3d9adf]">MyWHED</span> and provides additional search criteria for more refined results.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold text-gray-700 mb-2 text-[18px]">Systems & Credentials Search</p>
                            <ul className="space-y-1 border-t-2 border-gray-200 pt-2">
                                {["Region", "Country", "Governing body name", "Officer name", "Name of credential", "Level of credential", "IAU Member status"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[16px] text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700 mb-2 text-[18px]">Institutions Search</p>
                            <ul className="space-y-1 border-t-2 border-gray-200 pt-2">
                                {["Region", "Field of study (28 disciplines)", "Level of credential", "Officer name", "Funding type"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[16px] text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Log In / Log Out */}
                <div className="border border-gray-200 rounded-lg p-5 mb-5">
                    <h3 className="font-bold text-gray-800 mb-3 text-[24px]">How to Log In/Log Out</h3>
                    <p className="font-semibold text-gray-700 mb-1 text-[18px]">To Log In:</p>
                    <ul className="text-[14px] text-gray-600 space-y-1 mb-3 list-disc list-inside">
                        <li>Enter your Username and Password in the login area (located in the top right corner)</li>
                        <li>Your credentials will be sent to you by the IAU/WHED Information Centre</li>
                        <li>If you forget your password, click "forgotten password?" to receive a reset email</li>
                    </ul>
                    <p className="font-semibold text-gray-700 mb-1 text-[18px]">To Log Out:</p>
                    <p className="text-[14px] text-gray-600">Click on "logout" in the login area (top right corner)</p>
                </div>

                {/* Who Has Access */}
                <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-800 mb-2 text-[24px]">Who Has Access to MyWHED?</h3>
                    <p className="text-[16px] text-gray-600 mb-3">
                        All <span className="font-semibold">IAU Members</span> benefit from a complimentary subscription to MyWHED.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-md px-4 py-3 text-[14px] text-gray-700 border-l-4 border-blue-800">
                        <p className="font-semibold mb-1">Need more information about IAU membership?</p>
                        <p>
                            Please contact Ms. Jessica Liang at{" "}
                            <a href="mailto:membership@iau-gb.org" className="text-blue-600 underline">membership@iau-gb.org</a>
                            {" "}or visit{" "}
                            <a href="http://www.iau.glob" className="text-blue-600 underline">www.iau.glob</a>
                        </p>
                    </div>
                </div>

            </div>
        </main >
    );
}