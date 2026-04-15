'use client';


import { useState } from "react";
import ContentSaveComponnent from "./ContentSaveComponnent";
import Field from "./Field";
import SelectField from "./SelectField";
import useFocus from "./useFocus";
const inputBase = "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";

function OfficersTab() {
    const [form, setForm] = useState({
        fullName: "",
        jobTitle: "",
        jobFunction: "",
        yearsOfOffice: "",
        contactTel: "",
        contactEmail: "",
        gender: "",
    });

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const focus = useFocus();

    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-800 mb-5">Add Officer Record</h2>

            <Field label="Full Name" required>
                <input className={inputBase} value={form.fullName} onChange={set("fullName")} {...focus} />
            </Field>
            <Field label="Job Title">
                <input className={inputBase} value={form.jobTitle} onChange={set("jobTitle")} {...focus} />
            </Field>
            <Field label="Job Function" required>
                <SelectField placeholder="Select from the list" options={["Rector", "Vice-Rector", "Dean", "Director", "President", "Secretary General"]} />
            </Field>
            <Field label="Years of Office">
                <input className={inputBase} value={form.yearsOfOffice} onChange={set("yearsOfOffice")} {...focus} />
            </Field>
            <Field label="Contact Tel.">
                <input className={inputBase} value={form.contactTel} onChange={set("contactTel")} {...focus} />
            </Field>
            <Field label="Contact Email">
                <input className={inputBase} value={form.contactEmail} onChange={set("contactEmail")} type="email" {...focus} />
            </Field>
            <Field label="Gender">
                <SelectField placeholder="Select from the list" options={["Male", "Female", "Other", "Prefer not to say"]} />
            </Field>


            <ContentSaveComponnent />
        </div>
    );
}


export default OfficersTab;