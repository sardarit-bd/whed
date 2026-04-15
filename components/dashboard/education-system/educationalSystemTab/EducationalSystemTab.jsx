import {
    Download,
    Eye,
    Plus,
    Printer,
    RefreshCw
} from "lucide-react";

const sectionHeader = (title) => (
    <tr>
        <td
            colSpan={2}
            className="bg-[var(--primary-color)] text-white font-semibold text-sm px-4 py-2"
        >
            {title}
        </td>
    </tr>
);

const dataRow = (label, value, extra) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="text-[var(--primary-color)] text-sm px-4 py-3 w-64 align-top font-medium">
            {label}
        </td>
        <td className="text-gray-700 text-sm px-4 py-3">
            {value || extra || ""}
        </td>
    </tr>
);

const ageRow = () => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="text-[var(--primary-color)] text-sm px-4 py-3 w-64 align-top font-medium">
            Age of
        </td>
        <td className="text-gray-700 text-sm px-4 py-3">
            <div className="flex items-center gap-3 mb-1">
                <span className="w-10">entry</span>
                <input
                    type="text"
                    defaultValue="5"
                    className="border border-gray-300 rounded px-2 py-0.5 w-16 text-sm"
                />
            </div>
            <div className="flex items-center gap-3">
                <span className="w-10">exit</span>
                <input
                    type="text"
                    defaultValue="16"
                    className="border border-gray-300 rounded px-2 py-0.5 w-16 text-sm"
                />
            </div>
        </td>
    </tr>
);

const withPlusRow = (label, value) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="text-[var(--primary-color)] text-sm px-4 py-3 w-64 align-top font-medium">
            {label}
        </td>
        <td className="text-gray-700 text-sm px-4 py-3">
            <div className="flex items-center gap-2">
                <span>{value}</span>
                <button className="w-5 h-5 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center flex-shrink-0">
                    <Plus size={12} />
                </button>
            </div>
        </td>
    </tr>
);


const EducationalSystemTab = () => {
    return (
        <div className="w-full mx-auto px-4 py-6">
            {/* Action Icons */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-6 flex-wrap">
                    {[
                        { icon: Download, label: "Export" },
                        { icon: Printer, label: "Print" },
                        { icon: Eye, label: "See Snapshot" },
                        { icon: RefreshCw, label: "Select / Unselect for update" },
                    ].map(({ icon: Icon, label }) => (
                        <button
                            key={label}
                            className="flex flex-col items-center gap-1 group"
                        >
                            <div className="w-12 h-12 border-2 border-[var(--primary-color)] rounded-lg flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors">
                                <Icon size={20} />
                            </div>
                            <span className="text-xs text-gray-600 text-center">{label}</span>
                        </button>
                    ))}
                </div>
                <div className="text-sm text-gray-600">
                    Data Manager in charge ={" "}
                    <span className="font-semibold">Pettifor</span>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden">
                <table className="w-full border-collapse">
                    <tbody>
                        {sectionHeader("Types of HEIs")}
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="text-[var(--primary-color)] text-sm px-4 py-3 w-64 align-top font-medium">
                                Types of higher education institutions
                            </td>
                            <td className="text-gray-700 text-sm px-4 py-3">
                                <div>1 : College</div>
                                <div>3 : Institute</div>
                            </td>
                        </tr>

                        {sectionHeader("Pre-Higher Education System")}
                        {ageRow()}
                        {dataRow("Structure of school system", "")}
                        {dataRow(
                            "Description of School System",
                            "Primary and secondary education are delivered at both public and private schools. Primary education lasts for 7 years, and secondary for 5 years. Education is compulsory and free of charge in public institutions for children between the ages of 5 and 16."
                        )}

                        {sectionHeader("Higher Education System")}
                        {dataRow(
                            "Structure",
                            "Higher education is mainly offered at the Antigua State College, and the Open Campus of the University of the West Indies (UWI) and the Antigua Campus of the University of Southern Caribbean"
                        )}
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="text-[var(--primary-color)] text-sm px-4 py-3 w-64 align-top font-medium">
                                Laws/Decrees
                            </td>
                            <td className="text-gray-700 text-sm px-4 py-3">
                                <div>Accreditation (Amendment) Act (2011)</div>
                                <div>Education Act (2008)</div>
                                <div>Accreditation Act (2008)</div>
                                <div>Higher Education (Loans to Private Students) Act (1974)</div>
                            </td>
                        </tr>
                        {dataRow("Languages of instruction", "")}
                        {withPlusRow(
                            "Stages of higher education",
                            "University level first stage : Associate degree"
                        )}
                        {dataRow("Training of HE teachers", "")}
                        {dataRow("Distance Higher Education", "")}
                        {dataRow("Education exchange programs", "")}

                        {sectionHeader("Bodies")}
                        {withPlusRow(
                            "Governing bodies and other organizations / associations",
                            "Ministry of Education, Sports and Creative Industries"
                        )}
                        {withPlusRow(
                            "Bodies responsible for Recognition",
                            "Antigua and Barbuda National Accreditation Board"
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EducationalSystemTab;