'use client';


import { useState } from "react";

const formData = [
    {
        id: "login",
        label: "Login",
        type: "static",
        value: "Craig.Pettifor",
        note: "Cannot be changed",
        labelRed: true,
    },
    {
        id: "password",
        label: "Password",
        type: "password",
        value: "",
        hint: "Leave blank if you do not want to change password",
        labelRed: false,
    },
    {
        id: "firstName",
        label: "First Name",
        type: "text",
        value: "Craig",
        required: true,
        labelRed: true,
    },
    {
        id: "surname",
        label: "Surname",
        type: "text",
        value: "Pettifor",
        required: true,
        labelRed: true,
    },
    {
        id: "email",
        label: "Email",
        type: "email",
        value: "c.pettifor@iau.global",
        required: true,
        labelRed: true,
    },
    {
        id: "status",
        label: "Status",
        type: "static",
        value: "Active",
        note: "Cannot be changed",
        labelRed: false,
    },
    {
        id: "workingLanguage",
        label: "Working language",
        type: "radio",
        options: ["English", "French", "Spanish"],
        value: "English",
        required: true,
        labelRed: true,
    },
    {
        id: "role",
        label: "Role",
        type: "static",
        value: "Administrator",
        note: "Cannot be changed",
        labelRed: false,
    },
];

export default function UserProfileForm() {
    const [fields, setFields] = useState(
        formData.reduce((acc, f) => ({ ...acc, [f.id]: f.value }), {})
    );

    const handleChange = (id, value) => {
        setFields((prev) => ({ ...prev, [id]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert("Profile saved!");
    };

    const handleCancel = () => {
        setFields(formData.reduce((acc, f) => ({ ...acc, [f.id]: f.value }), {}));
    };

    return (
        <div className="h-fit bg-[#eaf5f8] flex items-center justify-center">
            <div className="bg-white rounded-md shadow-sm border border-slate-200 w-full  px-10 py-8">
                <form onSubmit={handleSave}>
                    <div className="space-y-5">
                        {formData.map((field) => (
                            <div key={field.id} className="flex items-start gap-4">
                                {/* Label */}
                                <div className="w-44 flex-shrink-0 pt-2">
                                    <label
                                        htmlFor={field.id}
                                        className={`text-sm font-semibold ${field.labelRed ? "text-red-600" : "text-slate-800"
                                            }`}
                                    >
                                        {field.label}
                                        {field.required && (
                                            <span className="text-red-600 ml-0.5">*</span>
                                        )}
                                    </label>
                                </div>

                                {/* Input */}
                                <div className="flex-1">
                                    {field.type === "static" && (
                                        <p className="text-sm text-slate-700 pt-2">
                                            {field.value}{" "}
                                            {field.note && (
                                                <span className="text-slate-400 italic text-xs">
                                                    ({field.note})
                                                </span>
                                            )}
                                        </p>
                                    )}

                                    {(field.type === "text" ||
                                        field.type === "email" ||
                                        field.type === "password") && (
                                            <div>
                                                <input
                                                    id={field.id}
                                                    type={field.type}
                                                    value={fields[field.id]}
                                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                                    className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                                                />
                                                {field.hint && (
                                                    <p className="text-xs text-slate-400 italic mt-1">
                                                        ({field.hint})
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                    {field.type === "radio" && (
                                        <div className="flex items-center gap-4 pt-2 flex-wrap">
                                            {field.options.map((opt) => (
                                                <label
                                                    key={opt}
                                                    className="flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={field.id}
                                                        value={opt}
                                                        checked={fields[field.id] === opt}
                                                        onChange={() => handleChange(field.id, opt)}
                                                        className="accent-teal-600 w-4 h-4"
                                                    />
                                                    <span className="text-sm text-slate-700">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 mt-8">
                        <button
                            type="submit"
                            className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold px-6 py-2 rounded-md transition-colors duration-150 cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}