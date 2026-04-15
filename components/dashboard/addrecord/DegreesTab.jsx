"use client";

import { useState } from "react";
import Field from "./Field";
import useFocus from "./useFocus";


const inputBase =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";


function DegreesTab() {
    const [selectedDegree, setSelectedDegree] = useState("");
    const [degreeNote, setDegreeNote] = useState("");
    const [degrees, setDegrees] = useState([
        { id: 1, code: "6D", name: "Bachelor", fieldsOfStudy: ["Business Administration"], addingField: false, fieldInput: "" },
    ]);
    const focus = useFocus();

    const degreeOptions = [
        "Bachelor (6D)", "Master (7D)", "Doctor (8D)", "Associate (5D)",
        "Diploma (4D)", "Certificate (3D)", "Postdoctoral (9D)"
    ];

    const fieldOptions = [
        "Business Administration", "Computer Science", "Engineering", "Medicine",
        "Law", "Arts", "Education", "Economics", "Social Sciences", "Natural Sciences"
    ];

    const handleAdd = () => {
        if (!selectedDegree) return;
        const parts = selectedDegree.match(/(.+)\s\((.+)\)/);
        const name = parts ? parts[1] : selectedDegree;
        const code = parts ? parts[2] : "";
        setDegrees((prev) => [
            ...prev,
            { id: Date.now(), code, name, fieldsOfStudy: [], addingField: false, fieldInput: "" },
        ]);
        setSelectedDegree("");
    };

    const handleDelete = (id) =>
        setDegrees((prev) => prev.filter((d) => d.id !== id));

    const toggleAddField = (id) =>
        setDegrees((prev) =>
            prev.map((d) => d.id === id ? { ...d, addingField: !d.addingField, fieldInput: "" } : d)
        );

    const setFieldInput = (id, val) =>
        setDegrees((prev) =>
            prev.map((d) => d.id === id ? { ...d, fieldInput: val } : d)
        );

    const confirmAddField = (id) =>
        setDegrees((prev) =>
            prev.map((d) => {
                if (d.id !== id || !d.fieldInput) return d;
                return { ...d, fieldsOfStudy: [...d.fieldsOfStudy, d.fieldInput], addingField: false, fieldInput: "" };
            })
        );

    const removeField = (degId, fi) =>
        setDegrees((prev) =>
            prev.map((d) =>
                d.id === degId ? { ...d, fieldsOfStudy: d.fieldsOfStudy.filter((_, i) => i !== fi) } : d
            )
        );

    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-5">Add a Record</h2>

            {/* Degrees selector row */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] gap-2 sm:gap-4 items-center mb-6">
                <label className="text-sm text-gray-500">Degrees</label>
                <div className="relative">
                    <select
                        className={`${inputBase} appearance-none cursor-pointer`}
                        value={selectedDegree}
                        onChange={(e) => setSelectedDegree(e.target.value)}
                        {...focus}
                    >
                        <option value="">Select from the list</option>
                        {degreeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
                <button
                    onClick={handleAdd}
                    className="px-5 py-2 text-sm rounded-full font-medium cursor-pointer transition-opacity hover:opacity-90 border-2"
                    style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)", background: "transparent" }}
                >
                    Add
                </button>
            </div>

            {/* Degrees Table */}
            <div className="rounded-md overflow-hidden border border-gray-200 mb-6">
                <div className="grid grid-cols-2 text-sm font-medium text-white px-4 py-3" style={{ backgroundColor: "var(--primary-color)" }}>
                    <span>Degrees ({degrees.length})</span>
                    <span>Fields of study</span>
                </div>
                <div className="px-4 py-2.5 text-xs text-gray-500 bg-gray-50 border-b border-gray-100">
                    Important: each Degree must have at least one field of study (click on the plus button).
                </div>

                {degrees.map((deg, idx) => (
                    <div
                        key={deg.id}
                        className={"border-b border-gray-100 last:border-b-0 " + (idx % 2 === 0 ? "bg-white" : "bg-gray-50/40")}
                    >
                        <div className="grid grid-cols-2 px-4 py-3 text-sm">
                            {/* Left */}
                            <div className="flex items-start gap-2 pt-0.5">
                                <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mt-0.5" title="Edit">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                                <button onClick={() => handleDelete(deg.id)} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer mt-0.5" title="Delete">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                                        <path d="M10 11v6" /><path d="M14 11v6" />
                                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                                    </svg>
                                </button>
                                <span className="text-gray-700">
                                    <span className="font-medium">{deg.code}</span>{" : "}{deg.name}
                                </span>
                            </div>

                            {/* Right */}
                            <div className="flex flex-col gap-2">
                                {/* Existing fields */}
                                {deg.fieldsOfStudy.map((f, fi) => (
                                    <div key={fi} className="flex items-center gap-1.5">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2">
                                            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" />
                                        </svg>
                                        <span className="text-xs" style={{ color: "var(--primary-color)" }}>{f}</span>
                                        <button onClick={() => removeField(deg.id, fi)} className="text-gray-300 hover:text-red-400 transition-colors ml-1 cursor-pointer">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                                {/* Inline add field row */}
                                {deg.addingField && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="relative flex-1">
                                            <select
                                                className={`${inputBase} appearance-none cursor-pointer text-xs py-1.5`}
                                                value={deg.fieldInput}
                                                onChange={(e) => setFieldInput(deg.id, e.target.value)}
                                                {...focus}
                                            >
                                                <option value="">Select field</option>
                                                {fieldOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                                            </select>
                                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => confirmAddField(deg.id)}
                                            className="px-3 py-1.5 text-xs rounded-full font-medium cursor-pointer border-2 transition-opacity hover:opacity-90"
                                            style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                                        >
                                            Add
                                        </button>
                                        <button onClick={() => toggleAddField(deg.id)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                )}

                                {/* Plus button to toggle add */}
                                {!deg.addingField && (
                                    <button
                                        onClick={() => toggleAddField(deg.id)}
                                        className="flex items-center gap-1.5 text-xs cursor-pointer mt-0.5 w-fit transition-opacity hover:opacity-70"
                                        style={{ color: "var(--primary-color)" }}
                                    >
                                        <span className="flex items-center justify-center w-4 h-4 rounded-full border-2" style={{ borderColor: "var(--primary-color)" }}>
                                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                                                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </span>
                                        {deg.fieldsOfStudy.length === 0 && <span className="text-gray-400">No fields of study added yet</span>}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Degree Note */}
            <Field label="Degree Note">
                <input
                    className={inputBase}
                    value={degreeNote}
                    onChange={(e) => setDegreeNote(e.target.value)}
                    {...focus}
                />
            </Field>
        </div>
    );
}

export default DegreesTab;