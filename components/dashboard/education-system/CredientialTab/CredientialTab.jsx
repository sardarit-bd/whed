import {
    Database,
    Download,
    Edit,
    Eye,
    PlusCircle,
    Printer,
    Search,
    SlidersHorizontal,
    Trash2
} from "lucide-react";
import { useState } from "react";


const initialData = [
    {
        id: 1701,
        credential: "Advanced High School (VWO) Certificate",
        acronym: "",
        levelCode: "3A",
        cat1: "Certificate",
        cat2: "",
        major: "2021-10-05 13:16:20",
        minor: "2021-10-05 13:18:20"
    },

    {
        id: 1703,
        credential: "HAVO Diploma",
        acronym: "",
        levelCode: "3A",
        cat1: "Diploma",
        cat2: "",
        major: "2021-10-05 13:16:49",
        minor: "2021-10-05 13:16:49"
    },

    {
        id: 1699,
        credential: "Bachelor",
        acronym: "",
        levelCode: "6B",
        cat1: "Degree",
        cat2: "",
        major: "2021-10-05 13:16:43",
        minor: "2021-10-05 13:16:43"
    },



    {
        id: 1700,
        credential: "Master",
        acronym: "",
        levelCode: "7C",
        cat1: "Degree",
        cat2: "",
        major: "2021-10-05 13:16:56",
        minor: "2021-10-05 13:16:56"
    },

];

const catColor = (cat) => {
    if (cat === "Certificate") return "text-gray-600"; //text-orange-500
    if (cat === "Degree") return "text-gray-600"; //text-teal-600
    if (cat === "Diploma") return "text-gray-600"; //text-orange-400
    return "text-gray-600";
};

export default function CredientialTab({ activeTab = "credentials", onTabChange }) {

    const [data] = useState(initialData);
    const [perPage, setPerPage] = useState(20);
    const [search, setSearch] = useState({ id: "", credential: "", acronym: "", levelCode: "", cat1: "", cat2: "", major: "", minor: "" });
    const [filtered, setFiltered] = useState(initialData);
    const [bulkAction, setBulkAction] = useState("");

    const handleSearch = () => {
        setFiltered(
            data.filter((row) => {
                return (
                    (!search.id || String(row.id).includes(search.id)) &&
                    (!search.credential || row.credential.toLowerCase().includes(search.credential.toLowerCase())) &&
                    (!search.levelCode || row.levelCode.toLowerCase().includes(search.levelCode.toLowerCase())) &&
                    (!search.cat1 || row.cat1.toLowerCase().includes(search.cat1.toLowerCase()))
                );
            })
        );
    };

    const handleTab = (key) => {
        setTab(key);
        if (onTabChange) onTabChange(key);
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">

            <div className="w-full px-4 py-6">
                {/* Action Icons */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <div className="flex items-center gap-6 flex-wrap">
                        {[
                            { icon: Database, label: "Data Provider" },
                            { icon: PlusCircle, label: "Add a Credential" },
                            { icon: Download, label: "Export All" },
                            { icon: Printer, label: "Print All" },
                            { icon: Eye, label: "See Snapshot" },
                        ].map(({ icon: Icon, label }) => (
                            <button key={label} className="flex flex-col items-center gap-1 group">
                                <div className="w-12 h-12 border-2 border-[var(--primary-color)] rounded-lg flex items-center justify-center text-[var(--primary-color)] group-hover:bg-teal-50 transition-colors">
                                    <Icon size={20} />
                                </div>
                                <span className="text-xs text-gray-600 text-center">{label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="text-sm text-gray-600">
                        Data Manager in charge = <span className="font-semibold">Pettifor</span>
                    </div>
                </div>

                {/* Results Count + Per Page */}
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-sm text-gray-700">
                        <span className="font-semibold">{filtered.length} result(s)</span> for : All
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        Number of records per page
                        <select
                            value={perPage}
                            onChange={(e) => setPerPage(Number(e.target.value))}
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                            {[10, 20, 50, 100].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-[var(--primary-color)] p-2 rounded-t flex items-center gap-2 flex-wrap">
                    <input
                        placeholder="[id]"
                        value={search.id}
                        onChange={(e) => setSearch({ ...search, id: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-16 bg-white"
                    />
                    <input
                        placeholder="[Credential]"
                        value={search.credential}
                        onChange={(e) => setSearch({ ...search, credential: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 min-w-28 bg-white"
                    />
                    <input
                        placeholder="[Acronym]"
                        value={search.acronym}
                        onChange={(e) => setSearch({ ...search, acronym: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-24 bg-white"
                    />
                    <input
                        placeholder="[Level Code]"
                        value={search.levelCode}
                        onChange={(e) => setSearch({ ...search, levelCode: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-24 bg-white"
                    />
                    <input
                        placeholder="[Category n°1]"
                        value={search.cat1}
                        onChange={(e) => setSearch({ ...search, cat1: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-28 bg-white"
                    />
                    <input
                        placeholder="[Category n°2]"
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-28 bg-white"
                    />
                    <input
                        placeholder="[Major update date]"
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-36 bg-white"
                    />
                    <input
                        placeholder="[Minor update date]"
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-36 bg-white"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-white text-teal-700 font-semibold px-5 py-1.5 rounded text-sm hover:bg-teal-50 bg-white"
                    >
                        OK
                    </button>
                </div>

                {/* Bulk Action Bar */}
                <div className="bg-gray-50 border border-gray-200 border-t-0 p-2 flex items-center gap-2 flex-wrap mb-0">
                    <SlidersHorizontal size={16} className="text-gray-500" />
                    <select
                        value={bulkAction}
                        onChange={(e) => setBulkAction(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 min-w-40"
                    >
                        <option>For selected records</option>
                        <option>Delete selected</option>
                        <option>Export selected</option>
                    </select>
                    <select className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 min-w-32">
                        <option>Your choice</option>
                        <option>Action 1</option>
                        <option>Action 2</option>
                    </select>
                    <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-5 py-1.5 rounded text-sm hover:bg-gray-100">
                        OK
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white border border-gray-200 border-t-0 rounded-b">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-[var(--primary-color)] text-white text-left">
                                <th className="px-3 py-2 font-medium">Id</th>
                                <th className="px-3 py-2 font-medium">Credential</th>
                                <th className="px-3 py-2 font-medium">Acronym</th>
                                <th className="px-3 py-2 font-medium">Level Code</th>
                                <th className="px-3 py-2 font-medium">Category n°1</th>
                                <th className="px-3 py-2 font-medium">Category n°2</th>
                                <th className="px-3 py-2 font-medium">Major update date</th>
                                <th className="px-3 py-2 font-medium">Minor update date</th>
                                <th className="px-3 py-2 font-medium">Action</th>
                                <th className="px-3 py-2">
                                    <button className="w-5 h-5 bg-white text-gray-900 rounded flex items-center justify-center">
                                        <span className="text-xs font-bold">+</span>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.slice(0, perPage).map((row, i) => (
                                <tr key={row.id} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-teal-50`}>
                                    <td className="px-3 py-2 text-teal-600 font-medium cursor-pointer hover:underline">{row.id}</td>
                                    <td className="px-3 py-2 text-gray-700">{row.credential}</td>
                                    <td className="px-3 py-2 text-gray-700">{row.acronym}</td>
                                    <td className="px-3 py-2 text-gray-700">{row.levelCode}</td>
                                    <td className={`px-3 py-2 font-medium ${catColor(row.cat1)}`}>{row.cat1}</td>
                                    <td className={`px-3 py-2 font-medium ${catColor(row.cat2)}`}>{row.cat2}</td>
                                    <td className="px-3 py-2 text-gray-600 text-xs">{row.major}</td>
                                    <td className="px-3 py-2 text-gray-600 text-xs">{row.minor}</td>
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-1">
                                            <button className="text-gray-500 cursor-pointer hover:text-teal-600"><Search size={14} /></button>
                                            <button className="text-blue-500 cursor-pointer hover:text-blue-600"><Edit size={14} /></button>
                                            <button className="text-green-500 cursor-pointer hover:text-green-600"><Printer size={14} /></button>
                                            <button className="text-red-500 cursor-pointer hover:text-red-600"><Trash2 size={14} /></button>
                                        </div>
                                    </td>
                                    <td className="px-3 py-2"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}