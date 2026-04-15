"use client";
import { ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

// ── Raw Data ──────────────────────────────────────────────────────────────────
const ALL_COUNTRIES = [
    { id: 1, country: "Afghanistan", regions: ["Asia", "Developing Countries", "Islamic Countries", "Land-locked Countries", "Middle East"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 2, country: "Albania", regions: ["Europe", "Developing Countries", "South Eastern Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 3, country: "Algeria", regions: ["Africa", "Arab States", "Islamic Countries", "Maghreb", "Middle East"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 4, country: "Andorra", regions: ["Europe", "Western Europe"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 5, country: "Angola", regions: ["Africa", "Developing Countries", "Sub-Saharan Africa"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 6, country: "Argentina", regions: ["Americas", "Developing Countries", "Latin America"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 7, country: "Armenia", regions: ["Asia", "Eastern Europe", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 8, country: "Australia", regions: ["Asia Pacific", "Oceania"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 9, country: "Austria", regions: ["Europe", "Western Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 10, country: "Azerbaijan", regions: ["Asia", "Eastern Europe", "Islamic Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 11, country: "Bahrain", regions: ["Arab States", "Middle East", "Islamic Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 12, country: "Bangladesh", regions: ["Asia", "Developing Countries", "Islamic Countries"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 13, country: "Belarus", regions: ["Europe", "Eastern Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 14, country: "Belgium", regions: ["Europe", "Western Europe"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 15, country: "Bolivia", regions: ["Americas", "Latin America", "Developing Countries", "Land-locked Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 16, country: "Bosnia", regions: ["Europe", "South Eastern Europe", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 17, country: "Brazil", regions: ["Americas", "Latin America", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 18, country: "Bulgaria", regions: ["Europe", "Eastern Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 19, country: "Cambodia", regions: ["Asia", "South-East Asia", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 20, country: "Cameroon", regions: ["Africa", "Sub-Saharan Africa", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 21, country: "Canada", regions: ["Americas", "North America"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 22, country: "Chile", regions: ["Americas", "Latin America"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 23, country: "China", regions: ["Asia", "East Asia"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 24, country: "Colombia", regions: ["Americas", "Latin America", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 25, country: "Croatia", regions: ["Europe", "South Eastern Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 26, country: "Cuba", regions: ["Americas", "Caribbean", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 27, country: "Cyprus", regions: ["Europe", "Middle East"], state: "", systems: "Position", institutions: "Position", management: "shared" },
    { id: 28, country: "Czech Republic", regions: ["Europe", "Eastern Europe"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 29, country: "Denmark", regions: ["Europe", "Western Europe", "Nordic Countries"], state: "", systems: "Position", institutions: "Position", management: "exclusive" },
    { id: 30, country: "Ecuador", regions: ["Americas", "Latin America", "Developing Countries"], state: "", systems: "Position", institutions: "Position", management: "shared" },
];

const REGIONS = ["All Regions", "Africa", "Americas", "Asia", "Asia Pacific", "Arab States", "Caribbean", "Developing Countries", "East Asia", "Eastern Europe", "Europe", "Islamic Countries", "Latin America", "Middle East", "Nordic Countries", "North America", "Oceania", "South-East Asia", "South Eastern Europe", "Sub-Saharan Africa", "Western Europe"];
const STATES = ["All States", "Active", "Inactive", "Pending"];
const USERS = ["All Users", "User A", "User B", "User C"];
const MGMT = ["All Management", "exclusive", "shared"];
const PER_PAGE = 10;

// ── Dropdown Component ────────────────────────────────────────────────────────
function Dropdown({ value, options, onChange, className = "" }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className="flex items-center justify-between gap-1.5 bg-white border border-gray-300 rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:border-[#1a7fa8] transition-colors min-w-0 w-full"
            >
                <span className="truncate">{value}</span>
                <ChevronDown size={13} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-md shadow-lg min-w-full max-h-52 overflow-y-auto">
                    {options.map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => { onChange(opt); setOpen(false); }}
                            className={`block w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-[#1a7fa8]/10 transition-colors ${value === opt ? "bg-[#1a7fa8]/15 text-[#1a7fa8] font-semibold" : "text-gray-700"}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function WHEDSelectInstitutions() {
    const [filterCountry, setFilterCountry] = useState("All Countries");
    const [filterRegion, setFilterRegion] = useState("All Regions");
    const [filterState, setFilterState] = useState("All States");
    const [filterUsers1, setFilterUsers1] = useState("All Users");
    const [filterUsers2, setFilterUsers2] = useState("All Users");
    const [filterMgmt, setFilterMgmt] = useState("All Management");
    const [bulkAction, setBulkAction] = useState("For selected records");
    const [bulkChoice, setBulkChoice] = useState("Your choice");
    const [page, setPage] = useState(1);
    const [applied, setApplied] = useState(false);

    // Country list for first dropdown
    const countryOptions = ["All Countries", ...ALL_COUNTRIES.map((c) => c.country)];

    // Filter logic
    const filtered = useMemo(() => {
        return ALL_COUNTRIES.filter((row) => {
            if (filterCountry !== "All Countries" && row.country !== filterCountry) return false;
            if (filterRegion !== "All Regions" && !row.regions.includes(filterRegion)) return false;
            if (filterMgmt !== "All Management" && row.management !== filterMgmt) return false;
            return true;
        });
    }, [filterCountry, filterRegion, filterMgmt, applied]);

    const totalResults = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / PER_PAGE));
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const handleSearch = () => { setPage(1); setApplied((p) => !p); };

    // Pagination window
    const pageNumbers = () => {
        const delta = 2;
        const range = [];
        for (let i = Math.max(1, page - delta); i <= Math.min(totalPages, page + delta); i++) range.push(i);
        return range;
    };

    return (
        <div className="min-h-screen">
            <div className="w-full mx-auto space-y-3">

                {/* ── Search Bar ── */}
                <div className="bg-[#1a7fa8] rounded-lg p-3 flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold text-sm shrink-0 mr-1">Search</span>
                    <Dropdown value={filterCountry} options={countryOptions} onChange={setFilterCountry} className="flex-1 min-w-[120px]" />
                    <Dropdown value={filterRegion} options={REGIONS} onChange={setFilterRegion} className="flex-1 min-w-[110px]" />
                    <Dropdown value={filterState} options={STATES} onChange={setFilterState} className="flex-1 min-w-[100px]" />
                    <Dropdown value={filterUsers1} options={USERS} onChange={setFilterUsers1} className="flex-1 min-w-[100px]" />
                    <Dropdown value={filterUsers2} options={USERS} onChange={setFilterUsers2} className="flex-1 min-w-[100px]" />
                    <Dropdown value={filterMgmt} options={MGMT} onChange={setFilterMgmt} className="flex-1 min-w-[130px]" />
                    <button
                        onClick={handleSearch}
                        className="bg-white text-[#1a7fa8] font-bold text-sm px-4 py-1.5 rounded-md hover:bg-[#e0f4fb] transition-colors shrink-0"
                    >
                        OK
                    </button>
                </div>

                {/* ── Bulk Action Bar ── */}
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex flex-wrap items-center gap-2 shadow-sm">
                    <SlidersHorizontal size={16} className="text-gray-500 shrink-0" />
                    <Dropdown
                        value={bulkAction}
                        options={["For selected records", "For all records"]}
                        onChange={setBulkAction}
                        className="flex-1 min-w-[160px]"
                    />
                    <Dropdown
                        value={bulkChoice}
                        options={["Your choice", "Export CSV", "Export PDF", "Delete"]}
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
                        <table className="w-full min-w-[640px] text-sm">
                            {/* Head */}
                            <thead>
                                <tr className="bg-[#1a7fa8] text-white text-left">
                                    {["ID", "Country", "Regions", "State", "Responsible Systems +\nCredentials", "Responsible\nInstitutions", "Institution management"].map((h, i) => (
                                        <th
                                            key={i}
                                            className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-pre-line leading-tight"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="text-center py-12 text-gray-400 text-sm">
                                            No results found.
                                        </td>
                                    </tr>
                                ) : (
                                    paginated.map((row, idx) => (
                                        <tr
                                            key={row.id}
                                            className={`border-b border-gray-100 hover:bg-[#f0fafd] transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                                        >
                                            {/* ID */}
                                            <td className="px-4 py-3 text-[#1a7fa8] font-semibold text-center">
                                                <button className="hover:underline">{row.id}</button>
                                            </td>

                                            {/* Country */}
                                            <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">
                                                {row.country}
                                            </td>

                                            {/* Regions */}
                                            <td className="px-4 py-3 text-gray-600">
                                                <div className="space-y-0.5">
                                                    {row.regions.map((r) => (
                                                        <div key={r} className="text-xs leading-snug">{r}</div>
                                                    ))}
                                                </div>
                                            </td>

                                            {/* State */}
                                            <td className="px-4 py-3 text-gray-600 text-xs">{row.state}</td>

                                            {/* Systems */}
                                            <td className="px-4 py-3 text-gray-600 text-xs">{row.systems}</td>

                                            {/* Institutions */}
                                            <td className="px-4 py-3 text-gray-600 text-xs">{row.institutions}</td>

                                            {/* Management */}
                                            <td className="px-4 py-3 text-gray-600 text-xs">{row.management}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── Pagination ── */}
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm">
                    {/* Results info */}
                    <p className="text-sm text-gray-600">
                        Results:{" "}
                        <span className="font-semibold">
                            {Math.min((page - 1) * PER_PAGE + 1, totalResults)} to{" "}
                            {Math.min(page * PER_PAGE, totalResults)}
                        </span>{" "}
                        out of <span className="font-bold text-gray-800">{totalResults}</span>
                    </p>

                    {/* Page controls */}
                    <div className="flex items-center gap-1 flex-wrap">
                        {/* First */}
                        <button
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs"
                        >
                            «
                        </button>
                        {/* Prev */}
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={13} />
                        </button>

                        {/* Page numbers */}
                        {pageNumbers().map((n) => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-semibold border transition-colors ${n === page
                                    ? "bg-[#1a7fa8] text-white border-[#1a7fa8]"
                                    : "border-gray-300 text-gray-600 hover:border-[#1a7fa8] hover:text-[#1a7fa8]"
                                    }`}
                            >
                                {n}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={13} />
                        </button>
                        {/* Last */}
                        <button
                            onClick={() => setPage(totalPages)}
                            disabled={page === totalPages}
                            className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#1a7fa8] hover:text-[#1a7fa8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs"
                        >
                            »
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}