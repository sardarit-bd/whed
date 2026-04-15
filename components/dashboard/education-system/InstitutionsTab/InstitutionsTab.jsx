import {
    ChevronLeft,
    ChevronRight,
    Database,
    Download,
    Edit,
    Eye,
    PlusCircle,
    Printer,
    SlidersHorizontal,
    Trash2
} from "lucide-react";
import { useState } from "react";


const allData = [
    { id: 1234, globalId: "IAU-0\n01234", status: "Data Provider unknown", name: "Harvard University", branch: "", nameEn: "Harvard University", branchEn: "" },
    { id: 1335, globalId: "IAU-0\n01235", status: "IAU Completed", name: "University of Oxford", branch: "", nameEn: "University of Oxford", branchEn: "" },
    { id: 1238, globalId: "IAU-0\n01236", status: "Data Provider unknown", name: "MIT", branch: "", nameEn: "MIT", branchEn: "" },
    { id: 1237, globalId: "IAU-0\n01237", status: "Data Provider unknown", name: "Stanford University", branch: "", nameEn: "University of Cambridge", branchEn: "" },
    { id: 1238, globalId: "IAU-0\n01238", status: "IAU Completed", name: "University of Cambridge", branch: "", nameEn: "University of Cambridge", branchEn: "" },
    { id: 1239, globalId: "IAU-0\n01239", status: "IAU Completed", name: "Swiss Federal Institute of Technology", branch: "", nameEn: "Swiss Federal Institute of Technology", branchEn: "" },
    { id: 1240, globalId: "IAU-0\n01240", status: "IAU Completed", name: "Paris-Saclay University", branch: "", nameEn: "Paris-Saclay University", branchEn: "" },
    { id: 1241, globalId: "IAU-0\n01241", status: "IAU Completed", name: "University of Tokyo", branch: "", nameEn: "University of Tokyo", branchEn: "" },
    { id: 1242, globalId: "IAU-0\n01242", status: "Data Provider unknown", name: "National University of Singapore", branch: "", nameEn: "National University of Singapore", branchEn: "" },
    { id: 1243, globalId: "IAU-0\n01243", status: "IAU Completed", name: "University of Toronto", branch: "", nameEn: "University of Toronto", branchEn: "" },
    { id: 1244, globalId: "IAU-0\n01244", status: "Data Provider unknown", name: "Seoul National University", branch: "", nameEn: "Seoul National University", branchEn: "" },
    { id: 1245, globalId: "IAU-0\n01245", status: "IAU Completed", name: "Peking University", branch: "", nameEn: "Peking University", branchEn: "" },
];

const TOTAL = 12458;
const PER_PAGE_OPTIONS = [10, 20, 50, 100];

const statusColor = (status) => {
    if (status === "IAU Completed") return "text-[var(--primary-color)] font-medium";
    return "text-gray-500";
};

export default function InstitutionsTab({ activeTab = "institutions", onTabChange }) {
    const [tab, setTab] = useState(activeTab);
    const [perPage, setPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({ id: "", globalId: "", all: "All", name: "", branchName: "", nameEn: "", branchNameEn: "" });
    const [filtered, setFiltered] = useState(allData);
    const [bulkAction, setBulkAction] = useState("");

    const totalPages = Math.ceil(TOTAL / perPage);
    const pageData = filtered.slice((page - 1) * perPage, page * perPage);

    const handleSearch = () => {
        setFiltered(
            allData.filter((row) =>
                (!search.id || String(row.id).includes(search.id)) &&
                (!search.name || row.name.toLowerCase().includes(search.name.toLowerCase())) &&
                (!search.nameEn || row.nameEn.toLowerCase().includes(search.nameEn.toLowerCase()))
            )
        );
        setPage(1);
    };

    const handleTab = (key) => {
        setTab(key);
        if (onTabChange) onTabChange(key);
    };

    const visiblePages = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1, 2, 3, "...", totalPages);
        }
        return pages;
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
                                <span className="text-xs text-[var(--primary-color)] text-center">{label}</span>
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
                            onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }}
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                            {PER_PAGE_OPTIONS.map((n) => (
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
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm w-14 bg-white"
                    />
                    <select
                        value={search.all}
                        onChange={(e) => setSearch({ ...search, all: e.target.value })}
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm w-20 bg-white"
                    >
                        <option>All</option>
                        <option>IAU Completed</option>
                        <option>Data Provider unknown</option>
                    </select>
                    <input
                        placeholder="[name]"
                        value={search.name}
                        onChange={(e) => setSearch({ ...search, name: e.target.value })}
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1 min-w-24 bg-white"
                    />
                    <input
                        placeholder="[branch name]"
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white"
                    />
                    <input
                        placeholder="[name in english]"
                        value={search.nameEn}
                        onChange={(e) => setSearch({ ...search, nameEn: e.target.value })}
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm w-32 bg-white"
                    />
                    <input
                        placeholder="[Branch name in english]"
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-white text-teal-700 font-semibold px-5 py-1.5 rounded text-sm hover:bg-teal-50"
                    >
                        OK
                    </button>
                </div>

                {/* Bulk Action Bar */}
                <div className="bg-gray-50 border border-gray-200 border-t-0 p-2 flex items-center gap-2 flex-wrap">
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
                    </select>
                    <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-5 py-1.5 rounded text-sm hover:bg-gray-100">
                        OK
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white border border-gray-200 border-t-0">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-[var(--primary-color)] text-white text-left">
                                <th className="px-3 py-2 font-medium">ID</th>
                                <th className="px-3 py-2 font-medium">Global ID</th>
                                <th className="px-3 py-2 font-medium">Status</th>
                                <th className="px-3 py-2 font-medium">Name</th>
                                <th className="px-3 py-2 font-medium">Branch Name</th>
                                <th className="px-3 py-2 font-medium">Name in English</th>
                                <th className="px-3 py-2 font-medium">Branch Name English</th>
                                <th className="px-3 py-2 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(pageData.length > 0 ? pageData : filtered.slice(0, perPage)).map((row, i) => (
                                <tr key={`${row.id}-${i}`} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-teal-50`}>
                                    <td className="px-3 py-2 text-[var(--primary-color)] font-medium cursor-pointer hover:underline">{row.id}</td>
                                    <td className="px-3 py-2 text-[var(--primary-color)] text-xs whitespace-pre-line">{row.globalId}</td>
                                    <td className={`px-3 py-2 text-xs ${statusColor(row.status)}`}>{row.status}</td>
                                    <td className="px-3 py-2 text-gray-700">{row.name}</td>
                                    <td className="px-3 py-2 text-gray-600">{row.branch}</td>
                                    <td className="px-3 py-2 text-gray-700">{row.nameEn}</td>
                                    <td className="px-3 py-2 text-gray-600">{row.branchEn}</td>
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-1">
                                            <button className="text-gray-400 hover:text-teal-600"><Eye size={14} /></button>
                                            <button className="text-green-400 hover:text-blue-600"><Edit size={14} /></button>
                                            <button className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                    <span className="text-sm text-gray-600">
                        Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, TOTAL)} of {TOTAL.toLocaleString()} institutions
                    </span>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage(Math.max(1, page - 1))}
                            disabled={page === 1}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        {visiblePages().map((p, i) =>
                            p === "..." ? (
                                <span key={`dots-${i}`} className="px-2 text-gray-500">...</span>
                            ) : (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-7 h-7 flex items-center justify-center border rounded text-sm ${page === p
                                        ? "bg-[var(--primary-color)] cursor-pointer text-white border-teal-600"
                                        : "border-gray-300 cursor-pointer text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    {p}
                                </button>
                            )
                        )}
                        <button
                            onClick={() => setPage(Math.min(totalPages, page + 1))}
                            disabled={page === totalPages}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}