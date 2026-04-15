"use client";

import { useState } from "react";
import ContentSaveComponnent from "./ContentSaveComponnent";
import Field from "./Field";
import useFocus from "./useFocus";



const inputBase =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";




function StatisticsTab() {
    const [form, setForm] = useState({
        academicStaffYear: "",
        teachingMale: "", teachingFemale: "", teachingTotal: "",
        doctorateMale: "", doctorateFemale: "", doctorateTotal: "",
        studentsYear: "",
        studentsMale: "", studentsFemale: "", studentsTotal: "",
        intlMale: "", intlFemale: "", intlTotal: "",
        distanceLearning: "",
        studentDisabilities: "",
        mainPress: "",
        researchJournal: "",
    });

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const focus = useFocus();

    const years = Array.from({ length: 30 }, (_, i) => String(new Date().getFullYear() - i));

    const autoTotal = (male, female) => {
        const m = parseFloat(male) || 0;
        const f = parseFloat(female) || 0;
        return m + f > 0 ? String(m + f) : "";
    };

    const MFTRow = ({ label, mKey, fKey, tKey }) => (
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-4 items-center py-2">
            <label className="text-sm text-gray-500">{label}</label>
            <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-500 w-10">Male</span>
                <input
                    className={`${inputBase} w-24`}
                    type="number"
                    min="0"
                    value={form[mKey]}
                    onChange={(e) => {
                        set(mKey)(e);
                        setForm((f) => ({ ...f, [mKey]: e.target.value, [tKey]: autoTotal(e.target.value, f[fKey]) }));
                    }}
                    {...focus}
                />
                <span className="text-sm text-gray-500 w-12 text-center">Female</span>
                <input
                    className={`${inputBase} w-24`}
                    type="number"
                    min="0"
                    value={form[fKey]}
                    onChange={(e) => {
                        setForm((f) => ({ ...f, [fKey]: e.target.value, [tKey]: autoTotal(f[mKey], e.target.value) }));
                    }}
                    {...focus}
                />
                <span className="text-sm text-gray-500 w-8 text-center">Total</span>
                <input
                    className={`${inputBase} w-24 bg-gray-50`}
                    type="number"
                    value={form[tKey]}
                    readOnly
                    placeholder="0"
                />
            </div>
        </div>
    );

    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-5">Add a Record</h2>

            {/* Academic Staff Section */}
            <Field label="Academic Staff Statistics Year">
                <div className="relative">
                    <select className={`${inputBase} appearance-none cursor-pointer`} value={form.academicStaffYear} onChange={set("academicStaffYear")} {...focus}>
                        <option value="">YYYY</option>
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                </div>
            </Field>

            <MFTRow label="Teaching Staff" mKey="teachingMale" fKey="teachingFemale" tKey="teachingTotal" />
            <MFTRow label="Academic Staff with doctorate" mKey="doctorateMale" fKey="doctorateFemale" tKey="doctorateTotal" />

            <div className="h-px bg-gray-100 my-5" />

            {/* Students Section */}
            <Field label="Students Statistics Year">
                <div className="relative">
                    <select className={`${inputBase} appearance-none cursor-pointer`} value={form.studentsYear} onChange={set("studentsYear")} {...focus}>
                        <option value="">YYYY</option>
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                </div>
            </Field>

            <MFTRow label="Students" mKey="studentsMale" fKey="studentsFemale" tKey="studentsTotal" />
            <MFTRow label="International Students" mKey="intlMale" fKey="intlFemale" tKey="intlTotal" />

            <div className="h-px bg-gray-100 my-5" />

            {/* Other Fields */}
            <Field label="Distance / Online Learning">
                <input className={inputBase} value={form.distanceLearning} onChange={set("distanceLearning")} {...focus} />
            </Field>
            <Field label="Student with disabilities">
                <input className={inputBase} value={form.studentDisabilities} onChange={set("studentDisabilities")} {...focus} />
            </Field>
            <Field label="Main Press">
                <input className={inputBase} value={form.mainPress} onChange={set("mainPress")} {...focus} />
            </Field>

            {/* Research Journals row with Add button */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-4 items-center py-2">
                <label className="text-sm text-gray-500">Research journals</label>
                <div className="flex items-center gap-2">
                    <input className={`${inputBase} flex-1`} value={form.researchJournal} onChange={set("researchJournal")} {...focus} />
                    <button
                        className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer border-2 transition-opacity hover:opacity-90 shrink-0"
                        style={{ borderColor: "var(--primary-color)", color: "var(--primary-color)" }}
                    >
                        Add
                    </button>
                </div>
            </div>


            <ContentSaveComponnent />

        </div>
    );
}

export default StatisticsTab;