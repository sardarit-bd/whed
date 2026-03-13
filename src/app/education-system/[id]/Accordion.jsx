"use client"

import { useState } from "react";
import SchoolSystemInfo from "./Schoolsysteminfo";

const navItems = [
  "Types of HEI",
  "Pre-Higher Education System",
  "Higher Education System",
  "Bodies",
  "Recognition of Studies",
  "Credentials",
  "Data Provided"
];

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);



const Section = ({ title }) => (
  <div className="px-6 py-4 text-sm text-gray-400 italic">
    No data available for {title}.
  </div>
);

const items = [
  "University",
  "Polytechnical Institution",
  "Independent Academic Institution",
  "Private Vocational Trainer",
  "College",
  "Specialized Arts and Culture Institution",
];

export function InstitutionTypesList() {
  return (
    <div className="border-t border-gray-200 px-4 py-5 mt-5">
      <h2 className="text-base font-bold text-gray-900 pb-4 border-b border-gray-200">
        Types of Higher Education Institutions in Canada – Alberta
      </h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-6 py-4 border-b border-gray-200 last:border-0"
          >
            <span className="text-sm text-gray-500 w-4 flex-shrink-0">{index + 1}</span>
            <span className="text-sm font-bold text-gray-900">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AccordionItem = ({ title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-lg mb-3 overflow-hidden transition-all duration-200 ${open ? "border rounded-xl border-gray-200" : "border border-l-4 border-[var(--primary-color)]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${open ? "bg-gray-50" : "bg-white hover:bg-gray-50"}`}
      >
        <span className={`text-base font-semibold ${open ? "text-cyan-700" : "text-gray-800"}`}>
          {title}
        </span>
        <ChevronIcon open={open} />
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
        {children}
      </div>
    </div>
  );
};

export default function Accordion() {
  const [activeNav, setActiveNav] = useState("Types of HEI");

  return (
    <div className="my-10">
      <div className="mx-auto flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block flex-shrink-0 border rounded-xl border-gray-200 p-4">
          <p className="text-xs font-bold text-[var(--primary-text)] uppercase tracking-widest mb-3 px-2">Contents</p>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`text-left text-sm px-3 py-2 rounded-md transition-colors duration-150 cursor-pointer ${
                  activeNav === item
                    ? "text-[var(--primary-color)] font-semibold"
                    : "text-[var(--primary-text)] hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <AccordionItem title="Types of HEI" defaultOpen={true}>
            <InstitutionTypesList />
          </AccordionItem>

          <AccordionItem title="Pre-Higher Education System">
            <SchoolSystemInfo />
          </AccordionItem>

          <AccordionItem title="Higher Education System">
            <Section title="Divisions" />
          </AccordionItem>

          <AccordionItem title="Bodies">
            <Section title="Degrees" />
          </AccordionItem>

          <AccordionItem title="Recognition of Studies">
            <Section title="Academic Periodicals" />
          </AccordionItem>

          <AccordionItem title="Credentials">
            <Section title="Student & Staff Numbers" />
          </AccordionItem>
          <AccordionItem title="Data Provided">
            <Section title="Data Provided" />
          </AccordionItem>
        </main>
      </div>
    </div>
  );
}