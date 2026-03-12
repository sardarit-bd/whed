"use client";

import { X } from "lucide-react";

export default function CountrySelectionModal({
  country,
  value,
  onChange,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* Modal */}
      <div className="bg-white max-w-[700px] w-[90vw] rounded-md shadow-lg relative">

        {/* Close Button */}
        <button
          onClick={onCancel}
          className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full w-7 h-7 flex items-center justify-center"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="px-8 py-6 border-b text-center">
          <p className="text-lg">
            Selected country :{" "}
            <span className="font-semibold">{country}</span>, What do you want
            to display?
          </p>
        </div>

        {/* Body */}
        <div className="px-10 py-8 flex flex-col lg:flex-row gap-x-8 gap-y-4 justify-center">

          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="type"
              checked={value === "education"}
              onChange={() => onChange("education")}
              className="accent-[var(--primary-color)]"
            />
            Education system and credentials
          </label>

          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="type"
              checked={value === "hei"}
              onChange={() => onChange("hei")}
              className="accent-[var(--primary-color)]"
            />
            Higher education institutions (HEIs)
          </label>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-8 pb-6">

          <button
            onClick={onCancel}
            className="px-4 py-1.5 text-sm border rounded-full bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-1.5 text-sm border rounded-full bg-[var(--primary-color)] text-white"
          >
            OK
          </button>

        </div>

      </div>
    </div>
  );
}