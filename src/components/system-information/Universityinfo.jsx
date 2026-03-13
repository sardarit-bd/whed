"use client"

import { useState } from "react";

const data = {
  generalInfo: {
    address: {
      street: "2500 University Drive North West",
      city: "Calgary",
      province: "Alberta",
      postCode: "T2N 1N4",
    },
    contact: {
      website: "https://www.ucalgary.ca",
    },
    otherSites: {
      consortium: "Elastic Wave Exploration Seismology",
    },
    institutionDetails: {
      funding: "Public",
      history:
        "Founded 1960 as University of Alberta at Calgary, and acquired present status and title 19...",
      academicYear:
        "September to June (September-December; January-April; May-June). Also Summer Session (July-August)",
      admissionRequirements:
        "Secondary school certificate or recognized foreign equivalent",
      languages: "English",
      studentBody: "co-ed",
    },
  },
};

const navItems = [
  "General Information",
  "Officers",
  "Divisions",
  "Degrees",
  "Academic Periodicals",
  "Student & Staff Numbers",
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

const GlobeIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3 h-3 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const InfoRow = ({ label, value, isLink }) => (
  <div className="flex py-3 border-b border-gray-100 last:border-0">
    <span className="w-56 flex-shrink-0 text-sm font-semibold text-gray-700">{label}</span>
    <span className="text-sm text-gray-600 flex-1">
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer"
          className="text-cyan-600 hover:text-cyan-700 hover:underline">
          {value}
          <ExternalLinkIcon />
        </a>
      ) : value}
    </span>
  </div>
);

const Section = ({ title }) => (
  <div className="px-6 py-4 text-sm text-gray-400 italic">
    No data available for {title}.
  </div>
);

const GeneralInfoContent = () => {
  const { address, contact, otherSites, institutionDetails } = data.generalInfo;
  return (
    <div className="px-6 pb-6">
      {/* Address */}
      <div className="mb-5">
        <h3 className="text-sm font-bold text-gray-800 mb-2 pt-2">Address</h3>
        <div className="border border-gray-200 rounded-lg px-4 divide-y divide-gray-100">
          <InfoRow label="Street" value={address.street} />
          <InfoRow label="City" value={address.city} />
          <InfoRow label="Province" value={address.province} />
          <InfoRow label="Post Code" value={address.postCode} />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-5">
        <h3 className="text-sm font-bold text-gray-800 mb-2">Contact Information</h3>
        <div className="border border-gray-200 rounded-lg px-4">
          <div className="flex py-3 items-center">
            <div className="flex items-center w-56 flex-shrink-0 gap-1.5">
              <GlobeIcon />
              <span className="text-sm font-semibold text-gray-700">Website</span>
            </div>
            <a href={contact.website} target="_blank" rel="noopener noreferrer"
              className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline">
              {contact.website}
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Other Sites */}
      <div className="mb-5">
        <h3 className="text-sm font-bold text-gray-800 mb-2">Other Sites</h3>
        <div className="border border-gray-200 rounded-lg px-4 py-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Also Consortium for Research</span>{" "}
            {otherSites.consortium}
          </p>
        </div>
      </div>

      {/* Institution Details */}
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-2">Institution Details</h3>
        <div className="border border-gray-200 rounded-lg px-4 divide-y divide-gray-100">
          <InfoRow label="Institution Funding" value={institutionDetails.funding} />
          <InfoRow label="History" value={institutionDetails.history} />
          <InfoRow label="Academic Year" value={institutionDetails.academicYear} />
          <InfoRow label="Admission Requirements" value={institutionDetails.admissionRequirements} />
          <InfoRow label="Language(s)" value={institutionDetails.languages} />
          <InfoRow label="Student Body" value={institutionDetails.studentBody} />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-lg mb-3 overflow-hidden transition-all duration-200 ${open ? "border rounded-xl border-gray-200" : "border-gray-200"}`}>
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

export default function UniversityInfo() {
  const [activeNav, setActiveNav] = useState("General Information");

  return (
    <div className="min-h-screen my-10">
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
          <AccordionItem title="General Information" defaultOpen={true}>
            <GeneralInfoContent />
          </AccordionItem>

          <AccordionItem title="Officers">
            <Section title="Officers" />
          </AccordionItem>

          <AccordionItem title="Divisions">
            <Section title="Divisions" />
          </AccordionItem>

          <AccordionItem title="Degrees">
            <Section title="Degrees" />
          </AccordionItem>

          <AccordionItem title="Academic Periodicals">
            <Section title="Academic Periodicals" />
          </AccordionItem>

          <AccordionItem title="Student & Staff Numbers">
            <Section title="Student & Staff Numbers" />
          </AccordionItem>
        </main>
      </div>
    </div>
  );
}