import { useState } from "react";

const periodicals = [
  "Arctic",
  "Ariel",
  "Canadian Ethnic Studies",
  "Canadian Journal of Law and Society",
  "Canadian Journal of Philosophy",
  "Canadian Review of American Studies",
  "Classical Views/ Echos du Monde Classique",
  "Grove",
  "International Journal of Drama and Theatre",
  "Journal of Child and Youth Care",
  "Journal of Comparative Family Studies",
  "Journal of Educational Thought",
  "Journal of Military and Strategic Studies",
];

const ChevronUp = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDown = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SectionHeading = ({ children }) => (
  <div className="pt-5 pb-2 border-b border-gray-200">
    <span className="text-sm font-bold text-gray-900">{children}</span>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex py-3 border-b border-gray-100 last:border-0">
    <span className="w-44 flex-shrink-0 text-sm font-semibold text-gray-800 pr-4">{label}</span>
    <span className="text-sm text-gray-600">{value}</span>
  </div>
);

export default function AcademicPeriodicals() {

  return (
     <div
          className={`transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="px-6 pb-6">
            {/* Periodicals section */}
            <SectionHeading>Periodicals</SectionHeading>
            <div className="mt-1">
              {periodicals.map((name) => (
                <Row key={name} label={name} value="Academic Journal" />
              ))}
            </div>

            {/* Main Press section */}
            <SectionHeading>Main Press</SectionHeading>
            <div className="mt-1">
              <Row label="Publisher" value="The University of Calgary Press" />
            </div>
          </div>
        </div>
  );
}