"use client";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

// ── Demo Data ─────────────────────────────────────────────────────────────────
const ALL_INSTITUTIONS = [
    { id: 28543, country: "Antigua and Barbuda", institutionName: "College of Antigua", englishName: "College of Antigua", managedBy: "Position (autonomous)" },
    { id: 31021, country: "Antigua and Barbuda", institutionName: "University of the West Indies", englishName: "University of the West Indies", managedBy: "Position (autonomous)" },
    { id: 14872, country: "Aruba", institutionName: "Universidad di Aruba", englishName: "University of Aruba", managedBy: "Position (government)" },
    { id: 19304, country: "Peru", institutionName: "Pontificia Universidad Católica del Perú", englishName: "Pontifical Catholic University of Peru", managedBy: "Position (autonomous)" },
    { id: 20111, country: "Peru", institutionName: "Universidad Nacional Mayor de San Marcos", englishName: "National University of San Marcos", managedBy: "Position (government)" },
    { id: 22987, country: "Peru", institutionName: "Universidad de Lima", englishName: "University of Lima", managedBy: "Position (private)" },
    { id: 25643, country: "Peru", institutionName: "Universidad del Pacífico", englishName: "University of the Pacific", managedBy: "Position (private)" },
    { id: 27801, country: "Albania", institutionName: "Universiteti i Tiranës", englishName: "University of Tirana", managedBy: "Position (government)" },
    { id: 30155, country: "Albania", institutionName: "Universiteti Politeknik i Tiranës", englishName: "Polytechnic University of Tirana", managedBy: "Position (government)" },
    { id: 33402, country: "Algeria", institutionName: "Université d'Alger 1", englishName: "University of Algiers 1", managedBy: "Position (government)" },
];

const COUNTRIES = ["All Countries", ...Array.from(new Set(ALL_INSTITUTIONS.map((r) => r.country)))];
const USERS_OPTIONS = ["All Users", "User A", "User B", "User C"];
const PER_PAGE_OPTS = [10, 20, 50, 100];
const BULK_ACTIONS = ["For selected records", "For all records"];
const BULK_CHOICES = ["Your choice", "Export CSV", "Export PDF", "Delete"];

// ── Reusable Dropdown ─────────────────────────────────────────────────────────
function Dropdown({ value, options, onChange, className = "", variant = "default" }) {
    const [open, setOpen] = useState(false);

    const base =
        variant === "teal"
            ? "bg-white border border-white/40 text-gray-800 hover:border-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-[#1a7fa8]";

    return (
        <div className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className={`flex items-center justify-between gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors w-full ${base}`}
            >
                <span className="truncate">{value}</span>
                <ChevronDown size={13} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                    <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-md shadow-lg min-w-full max-h-52 overflow-y-auto">
                        {options.map((opt) => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => { onChange(opt); setOpen(false); }}
                                className={`block w-full text-left px-3 py-2 text-xs sm:text-sm transition-colors ${value === opt
                                    ? "bg-[#1a7fa8]/15 text-[#1a7fa8] font-semibold"
                                    : "text-gray-700 hover:bg-[#1a7fa8]/10"
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function WHEDInstitutions() {
    const [selectedCountry, setSelectedCountry] = useState("Antigua and Barbuda");
    const [searchInstitution, setSearchInstitution] = useState("");
    const [searchEnglish, setSearchEnglish] = useState("");
    const [filterUsers, setFilterUsers] = useState("All Users");
    const [bulkAction, setBulkAction] = useState("For selected records");
    const [bulkChoice, setBulkChoice] = useState("Your choice");
    const [perPage, setPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [activeSearch, setActiveSearch] = useState({ country: "Antigua and Barbuda", institution: "", english: "", users: "All Users" });

    // Apply search
    const handleSearch = () => {
        setActiveSearch({ country: selectedCountry, institution: searchInstitution, english: searchEnglish, users: filterUsers });
        setPage(1);
    };

    // Filter
    const filtered = useMemo(() => {
        return ALL_INSTITUTIONS.filter((row) => {
            if (activeSearch.country !== "All Countries" && row.country !== activeSearch.country) return false;
            if (activeSearch.institution && !row.institutionName.toLowerCase().includes(activeSearch.institution.toLowerCase())) return false;
            if (activeSearch.english && !row.englishName.toLowerCase().includes(activeSearch.english.toLowerCase())) return false;
            return true;
        });
    }, [activeSearch]);

    const totalResults = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / perPage));
    const paginated = filtered.slice((page - 1) * perPage, page * perPage);
    const from = totalResults === 0 ? 0 : (page - 1) * perPage + 1;
    const to = Math.min(page * perPage, totalResults);

    const countryLabel = activeSearch.country === "All Countries"
        ? "all countries"
        : `Institutions in ${activeSearch.country}`;

    return (
        <div className="min-h-screen ">
            <div className="w-full mx-auto space-y-4">

                {/* ── Country Selector ── */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-sm font-bold text-gray-800 shrink-0">Country</span>
                    <Dropdown
                        value={selectedCountry}
                        options={COUNTRIES}
                        onChange={(v) => { setSelectedCountry(v); }}
                        className="flex-1"
                    />
                </div>

                {/* ── Display by grouping + per page ── */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <button className="border-2 border-[#1a7fa8] text-[#1a7fa8] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#1a7fa8] hover:text-white transition-colors shrink-0">
                        Display by alphabetical grouping
                    </button>

                    <p className="text-sm text-gray-700 flex-1">
                        <span className="font-bold">{totalResults} result(s)</span>{" "}
                        for : <span className="font-medium">{countryLabel}</span>
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                        <span className="text-sm text-gray-600 whitespace-nowrap">Number of records per page</span>
                        <Dropdown
                            value={String(perPage)}
                            options={PER_PAGE_OPTS.map(String)}
                            onChange={(v) => { setPerPage(Number(v)); setPage(1); }}
                            className="w-20"
                        />
                    </div>
                </div>

                {/* ── Search Bar ── */}
                <div className="bg-[#1a7fa8] rounded-lg p-3 flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold text-sm shrink-0">Search</span>
                    <input
                        type="text"
                        placeholder="[Institutions]"
                        value={searchInstitution}
                        onChange={(e) => setSearchInstitution(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-1 min-w-[120px] rounded-md border border-white/40 bg-white px-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/60 transition-all"
                    />
                    <input
                        type="text"
                        placeholder="[English Name]"
                        value={searchEnglish}
                        onChange={(e) => setSearchEnglish(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-1 min-w-[120px] rounded-md border border-white/40 bg-white px-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/60 transition-all"
                    />
                    <Dropdown
                        value={filterUsers}
                        options={USERS_OPTIONS}
                        onChange={setFilterUsers}
                        className="flex-1 min-w-[110px]"
                        variant="teal"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-white text-[#1a7fa8] font-bold text-sm px-5 py-1.5 rounded-md hover:bg-[#e0f4fb] transition-colors shrink-0"
                    >
                        OK
                    </button>
                </div>

                {/* ── Bulk Action Bar ── */}
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex flex-wrap items-center gap-2 shadow-sm">
                    <SlidersHorizontal size={16} className="text-gray-500 shrink-0" />
                    <Dropdown
                        value={bulkAction}
                        options={BULK_ACTIONS}
                        onChange={setBulkAction}
                        className="flex-1 min-w-[160px]"
                    />
                    <Dropdown
                        value={bulkChoice}
                        options={BULK_CHOICES}
                        onChange={setBulkChoice}
                        className="flex-1 min-w-[140px]"
                    />
                    <button className="border border-[#1a7fa8] text-[#1a7fa8] font-bold text-sm px-4 py-1.5 rounded-md hover:bg-[#1a7fa8] hover:text-white transition-colors shrink-0">
                        OK
                    </button>
                </div>

                {/* ── Table ── */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] text-sm">
                            <thead>
                                <tr className="bg-[#1a7fa8] text-white text-left">
                                    <th className="px-4 py-3 font-semibold text-xs sm:text-sm w-20">ID</th>
                                    <th className="px-4 py-3 font-semibold text-xs sm:text-sm">Institution name</th>
                                    <th className="px-4 py-3 font-semibold text-xs sm:text-sm">English name</th>
                                    <th className="px-4 py-3 font-semibold text-xs sm:text-sm">Managed by</th>
                                    <th className="px-3 py-3 w-10 text-right">
                                        <button className="bg-white/20 hover:bg-white/30 rounded p-0.5 transition-colors">
                                            <Plus size={15} className="text-white" />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-12 text-gray-400 text-sm">
                                            No results found.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((row, idx) => (
                                        <tr
                                            key={row.id}
                                            className={`border-b border-gray-100 hover:bg-[#f0fafd] transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                                        >
                                            <td className="px-4 py-3 text-gray-700 font-medium">{row.id}</td>
                                            <td className="px-4 py-3 text-gray-700">{row.institutionName}</td>
                                            <td className="px-4 py-3 text-gray-700">{row.englishName}</td>
                                            <td className="px-4 py-3">
                                                <span className="text-[#c0392b] font-medium text-xs sm:text-sm">
                                                    {row.managedBy}
                                                </span>
                                            </td>
                                            <td className="px-3 py-3" />
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── Results Footer ── */}
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-sm">
                    <p className="text-sm text-gray-700">
                        Results{" "}
                        <span className="font-semibold">{from} to {to}</span>{" "}
                        out of <span className="font-bold text-gray-900">{totalResults}</span>
                    </p>

                    {totalPages > 1 && (
                        <div className="flex items-center gap-1 flex-wrap">
                            <button
                                onClick={() => setPage(1)}
                                disabled={page === 1}
                                className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors"
                            >«</button>
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors"
                            >‹</button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setPage(n)}
                                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold border transition-colors ${n === page
                                        ? "bg-[#1a7fa8] text-white border-[#1a7fa8]"
                                        : "border-gray-300 text-gray-600 hover:border-[#1a7fa8] hover:text-[#1a7fa8]"
                                        }`}
                                >{n}</button>
                            ))}
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors"
                            >›</button>
                            <button
                                onClick={() => setPage(totalPages)}
                                disabled={page === totalPages}
                                className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed text-xs transition-colors"
                            >»</button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}