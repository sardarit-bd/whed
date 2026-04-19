"use client"

import { useState } from "react";
import SchoolSystemInfo from "./SchoolSystemInfo";

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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit corporis vel, ipsa magni laudantium facere velit ipsam fugit dolorem sequi nemo porro excepturi doloremque molestias nisi a esse. Quis laudantium commodi necessitatibus quo, ducimus fugit assumenda atque dicta nemo amet expedita dolorum perspiciatis nulla, dolorem quas maiores exercitationem, iure voluptatum ex consequuntur adipisci reprehenderit temporibus placeat explicabo. Quidem iste ut blanditiis nobis quisquam, expedita dolor natus, magni corrupti neque facere voluptatem commodi dolorum ad.
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

const AccordionItem = ({ title, open, onToggle, children }) => {
  return (
    <div
      id={title}
      className={`border rounded-lg mb-3 overflow-hidden transition-all duration-200 ${open ? "border rounded-xl border-gray-200" : "border border-l-4 border-[var(--primary-color)]"}`}
    >
      <button
        onClick={onToggle}
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
  const [openSection, setOpenSection] = useState("Types of HEI");

  // const handleNavClick = (item) => {
  //   setActiveNav(item);
  //   setOpenSection(item);
  //   setTimeout(() => {
  //     const el = document.getElementById(item);
  //     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }, 50); // small delay lets the accordion open before scrolling
  // };



  const handleNavClick = (item) => {
    setActiveNav(item);

    // First scroll to the element (while it may still be closed)
    const el = document.getElementById(item);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Open the section slightly after so the scroll destination is stable
    setTimeout(() => {
      setOpenSection(item);
    }, 100);
  };


  const handleToggle = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
    setActiveNav(title);
  };

  return (
    <div className="my-10">
      <div className="mx-auto flex gap-6">

        {/* Sidebar — sticky */}
        <aside className="w-64 hidden md:block flex-shrink-0 border rounded-xl border-gray-200 p-4 sticky top-6 self-start">
          <p className="text-xs font-bold text-[var(--primary-text)] uppercase tracking-widest mb-3 px-2">Contents</p>
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-left text-sm px-3 py-2 rounded-md transition-colors duration-150 cursor-pointer ${activeNav === item
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
          <AccordionItem title="Types of HEI" open={openSection === "Types of HEI"} onToggle={() => handleToggle("Types of HEI")}>
            <InstitutionTypesList />
          </AccordionItem>
          <AccordionItem title="Pre-Higher Education System" open={openSection === "Pre-Higher Education System"} onToggle={() => handleToggle("Pre-Higher Education System")}>
            <SchoolSystemInfo />
          </AccordionItem>
          <AccordionItem title="Higher Education System" open={openSection === "Higher Education System"} onToggle={() => handleToggle("Higher Education System")}>
            <Section title="Divisions" />
          </AccordionItem>
          <AccordionItem title="Bodies" open={openSection === "Bodies"} onToggle={() => handleToggle("Bodies")}>
            <Section title="Degrees" />
          </AccordionItem>
          <AccordionItem title="Recognition of Studies" open={openSection === "Recognition of Studies"} onToggle={() => handleToggle("Recognition of Studies")}>
            <Section title="Academic Periodicals" />
          </AccordionItem>
          <AccordionItem title="Credentials" open={openSection === "Credentials"} onToggle={() => handleToggle("Credentials")}>
            <Section title="Student & Staff Numbers" />
          </AccordionItem>
          <AccordionItem title="Data Provided" open={openSection === "Data Provided"} onToggle={() => handleToggle("Data Provided")}>
            <Section title="Data Provided" />
          </AccordionItem>
        </main>

      </div>
    </div>
  );
}