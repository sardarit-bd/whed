"use client";

import { useState } from "react";
import ContentSaveComponnent from "./ContentSaveComponnent";
import Field from "./Field";
import useFocus from "./useFocus";


const inputBase =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";



function DivisionsTab() {
    const [form, setForm] = useState({ divisionName: "", type: "Faculty", moreDetails: "" });
    const [divisions, setDivisions] = useState([
        { id: 1, name: "Science and Technology", type: "Faculty", fieldsOfStudy: ["Science and Technology"] },
    ]);
    const focus = useFocus();
    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSave = () => {
        if (!form.divisionName.trim()) return;
        setDivisions((prev) => [
            ...prev,
            { id: Date.now(), name: form.divisionName, type: form.type, fieldsOfStudy: [] },
        ]);
        setForm({ divisionName: "", type: "Faculty", moreDetails: "" });
    };

    const handleDelete = (id) => setDivisions((prev) => prev.filter((d) => d.id !== id));

    const handleAddField = (id) => {
        const field = window.prompt("Enter field of study:");
        if (!field) return;
        setDivisions((prev) =>
            prev.map((d) =>
                d.id === id ? { ...d, fieldsOfStudy: [...d.fieldsOfStudy, field] } : d
            )
        );
    };

    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-5">Add a Record</h2>

            <Field label="Division Name" required>
                <input className={inputBase} value={form.divisionName} onChange={set("divisionName")} {...focus} />
            </Field>
            <Field label="Type" required>
                <div className="relative">
                    <select
                        className={`${inputBase} appearance-none cursor-pointer`}
                        value={form.type}
                        onChange={set("type")}
                        {...focus}
                    >
                        {["Faculty", "School", "Department", "Institute", "Centre", "College"].map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </Field>
            <Field label="More Details">
                <input className={inputBase} value={form.moreDetails} onChange={set("moreDetails")} {...focus} />
            </Field>



            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-5 mb-8 p-3 rounded-xl border border-gray-100 bg-gray-50/60">
                <p className="flex items-center gap-2 text-xs" style={{ color: "#e24b4a" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    (*) Required fields - Please fill in all required fields before saving.
                </p>
                <div className="flex gap-2 self-end sm:self-auto">
                    <button
                        onClick={() => setForm({ divisionName: "", type: "Faculty", moreDetails: "" })}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors bg-white cursor-pointer"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "var(--primary-color)" }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                        Save &amp; Publish
                    </button>
                </div>
            </div> */}

            <div className="rounded-md overflow-hidden border border-gray-200">
                <div className="grid grid-cols-2 text-sm font-medium text-white px-4 py-3" style={{ backgroundColor: "var(--primary-color)" }}>
                    <span>Divisions ({divisions.length})</span>
                    <span>Fields of study</span>
                </div>
                <div className="px-4 py-2.5 text-xs text-gray-500 bg-gray-50 border-b border-gray-100">
                    Important: each Division must have at least one field of study (click on the plus button).
                </div>
                {divisions.map((div, idx) => (
                    <div
                        key={div.id}
                        className={"grid grid-cols-2 px-4 py-3 text-sm border-b border-gray-100 last:border-b-0 " + (idx % 2 === 0 ? "bg-white" : "bg-gray-50/40")}
                    >
                        <div className="flex items-center gap-2">
                            <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" title="Edit">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>
                            <button onClick={() => handleDelete(div.id)} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                                </svg>
                            </button>
                            <span className="text-gray-700">
                                <span className="font-medium">{div.type}</span>{" : "}{div.name}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <button
                                onClick={() => handleAddField(div.id)}
                                className="flex items-center justify-center w-5 h-5 rounded-full border-2 transition-colors cursor-pointer shrink-0"
                                style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                                title="Add field of study"
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            {div.fieldsOfStudy.length === 0 ? (
                                <span className="text-gray-400 text-xs">No fields of study added yet</span>
                            ) : (
                                div.fieldsOfStudy.map((f, i) => (
                                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{f}</span>
                                ))
                            )}
                        </div>
                    </div>
                ))}
                <div className="px-4 py-3 bg-white">
                    <button className="flex items-center gap-1.5 text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Add
                    </button>
                </div>
            </div>



            <ContentSaveComponnent />

        </div>
    );
}

export default DivisionsTab;