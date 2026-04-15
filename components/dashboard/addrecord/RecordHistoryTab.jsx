"use client";


import { useState } from "react";
import useFocus from "./useFocus";



const inputBase =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";




const HISTORY_DATA = [
    { id: 1, datetime: "2026-03-01 14:23:15", editedBy: "Sarah Johnson", field: "Institution Name", oldValue: "MIT - Cambridge", newValue: "Massachusetts Institute of Technolo...", action: "Updated" },
    { id: 2, datetime: "2026-03-01 11:45:32", editedBy: "John Smith", field: "Contact Email", oldValue: "old@harvard.edu", newValue: "info@harvard.edu", action: "Updated" },
    { id: 3, datetime: "2026-02-28 16:12:08", editedBy: "Emily Davis", field: "Officer - President", oldValue: "Dr. Robert Brown", newValue: "Dr. Jane Wilson", action: "Updated" },
    { id: 4, datetime: "2026-02-28 09:34:21", editedBy: "Michael Lee", field: "Division - Faculty of Arts", oldValue: "-", newValue: "Added new division", action: "Created" },
    { id: 5, datetime: "2026-02-27 14:56:43", editedBy: "Anna Martinez", field: "Degree - BSc Computer Science", oldValue: "Duration: 3 years", newValue: "Duration: 4 years", action: "Updated" },
    { id: 6, datetime: "2026-02-27 10:22:17", editedBy: "Sarah Johnson", field: "Record Status", oldValue: "Pending", newValue: "Active", action: "Updated" },
    { id: 7, datetime: "2026-02-26 15:38:52", editedBy: "John Smith", field: "Website", oldValue: "http://university.ed", newValue: "https://www.university.edu", action: "Updated" },
    { id: 8, datetime: "2026-02-26 11:04:29", editedBy: "Emily Davis", field: "Address - Postal Code", oldValue: "12345", newValue: "02138", action: "Updated" },

];

const PAGE_SIZE = 8;

function RecordHistoryTab() {
    const [dateRange, setDateRange] = useState("");
    const [editedBy, setEditedBy] = useState("All Users");
    const [fieldChanged, setField] = useState("All Fields");
    const [actionType, setAction] = useState("All Actions");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [filtered, setFiltered] = useState(HISTORY_DATA);
    const focus = useFocus();

    const applyFilters = () => {
        let data = [...HISTORY_DATA];
        if (editedBy !== "All Users") data = data.filter(r => r.editedBy === editedBy);
        if (fieldChanged !== "All Fields") data = data.filter(r => r.field.includes(fieldChanged));
        if (actionType !== "All Actions") data = data.filter(r => r.action === actionType);
        if (search.trim()) {
            const q = search.toLowerCase();
            data = data.filter(r =>
                r.field.toLowerCase().includes(q) ||
                r.editedBy.toLowerCase().includes(q) ||
                r.oldValue.toLowerCase().includes(q) ||
                r.newValue.toLowerCase().includes(q)
            );
        }
        setFiltered(data);
        setPage(1);
    };

    const resetFilters = () => {
        setDateRange(""); setEditedBy("All Users");
        setField("All Fields"); setAction("All Actions");
        setSearch(""); setFiltered(HISTORY_DATA); setPage(1);
    };

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const actionBadge = (action) => {
        const map = {
            Updated: { bg: "#e6f1fb", color: "#185fa5" },
            Created: { bg: "#eaf3de", color: "#3b6d11" },
            Deleted: { bg: "#fcebeb", color: "#a32d2d" },
        };
        const s = map[action] || map.Updated;
        return (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: s.bg, color: s.color }}>
                {action}
            </span>
        );
    };

    const paginationPages = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1, 2, 3, "...", totalPages);
        }
        return pages;
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-start justify-between mb-5 gap-4">
                <div>
                    <h2 className="text-base font-semibold text-gray-800">Record History</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Track all changes and modifications to institutional data</p>
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-90 shrink-0"
                    style={{ backgroundColor: "var(--primary-color)" }}
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Export History
                </button>
            </div>

            {/* Filter Panel */}
            <div className="border border-gray-100 rounded-sm p-4 mb-5 bg-gray-50/40">
                <p className="text-sm font-medium text-gray-700 mb-3">Filter Records</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                    {/* Date Range */}
                    <div>
                        <label className="text-xs text-gray-400 mb-1 block">Date Range</label>
                        <input
                            type="date"
                            className={`${inputBase} text-xs`}
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            {...focus}
                        />
                    </div>
                    {/* Edited By */}
                    <div>
                        <label className="text-xs text-gray-400 mb-1 block">Edited By</label>
                        <div className="relative">
                            <select className={`${inputBase} appearance-none cursor-pointer text-xs`} value={editedBy} onChange={(e) => setEditedBy(e.target.value)} {...focus}>
                                {["All Users", "Sarah Johnson", "John Smith", "Emily Davis", "Michael Lee", "Anna Martinez"].map(o => <option key={o}>{o}</option>)}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>
                    {/* Field Changed */}
                    <div>
                        <label className="text-xs text-gray-400 mb-1 block">Field Changed</label>
                        <div className="relative">
                            <select className={`${inputBase} appearance-none cursor-pointer text-xs`} value={fieldChanged} onChange={(e) => setField(e.target.value)} {...focus}>
                                {["All Fields", "Institution Name", "Contact Email", "Officer", "Division", "Degree", "Record Status", "Website", "Address"].map(o => <option key={o}>{o}</option>)}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>
                    {/* Action Type */}
                    <div>
                        <label className="text-xs text-gray-400 mb-1 block">Action Type</label>
                        <div className="relative">
                            <select className={`${inputBase} appearance-none cursor-pointer text-xs`} value={actionType} onChange={(e) => setAction(e.target.value)} {...focus}>
                                {["All Actions", "Updated", "Created", "Deleted"].map(o => <option key={o}>{o}</option>)}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action buttons + search */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <button
                        onClick={applyFilters}
                        className="px-4 py-2 text-sm rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "var(--primary-color)" }}
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={resetFilters}
                        className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors bg-white cursor-pointer"
                    >
                        Reset Filters
                    </button>
                    <input
                        className={`${inputBase} flex-1 text-sm`}
                        placeholder="Search records..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && applyFilters()}
                        {...focus}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="rounded-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm" style={{ minWidth: 700 }}>
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                {["Date & Time", "Edited By", "Field Changed", "Old Value", "New Value", "Action", "Restore"].map(h => (
                                    <th key={h} className="text-left text-xs font-medium text-gray-500 px-3 py-3 whitespace-nowrap">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {pageData.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center text-gray-400 text-sm py-10">No records found</td>
                                </tr>
                            ) : pageData.map((row, i) => (
                                <tr key={row.id} className={"border-b border-gray-50 last:border-b-0 " + (i % 2 === 0 ? "bg-white" : "bg-gray-50/30")}>
                                    <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">{row.datetime}</td>
                                    <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">{row.editedBy}</td>
                                    <td className="px-3 py-2.5 text-xs font-medium text-gray-800 whitespace-nowrap">{row.field}</td>
                                    <td className="px-3 py-2.5 text-xs text-gray-500 max-w-[120px] truncate">{row.oldValue}</td>
                                    <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[160px] truncate">{row.newValue}</td>
                                    <td className="px-3 py-2.5">{actionBadge(row.action)}</td>
                                    <td className="px-3 py-2.5">
                                        <button
                                            className="flex items-center gap-1 text-xs font-medium cursor-pointer transition-opacity hover:opacity-70"
                                            style={{ color: "var(--primary-color)" }}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="1 4 1 10 7 10" />
                                                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                                            </svg>
                                            Restore
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
                <p className="text-xs text-gray-400">
                    Showing {filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length.toLocaleString()} records
                </p>
                <div className="flex items-center gap-1">
                    {paginationPages().map((p, i) =>
                        p === "..." ? (
                            <span key={i} className="px-2 text-gray-400 text-sm">...</span>
                        ) : (
                            <button
                                key={i}
                                onClick={() => setPage(p)}
                                className="w-8 h-8 text-xs rounded-lg font-medium transition-all cursor-pointer"
                                style={
                                    page === p
                                        ? { backgroundColor: "var(--primary-color)", color: "#fff" }
                                        : { backgroundColor: "transparent", color: "#6b7280", border: "0.5px solid #e5e7eb" }
                                }
                            >
                                {p}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}


export default RecordHistoryTab;