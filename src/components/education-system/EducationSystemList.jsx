import { ArrowRight } from "lucide-react";
import { useState } from "react";

const allItems = [
  "Canada",
  "Canada - Alberta",
  "Canada - British Columbia / Colombie-Britannique",
  "Canada - Manitoba",
  "Canada - New Brunswick / Nouveau-Brunswick",
  "Canada - Newfoundland & Labrador / Terre-Neuve Et Labrador",
  "Canada - Northwest Territories / Territoires Du Nord-Ouest",
  "Canada - Nova Scotia / Nouvelle-Ecosse",
  "Canada - Nunavut",
  "Canada - Ontario",
  "Canada - Prince Edward Island / Île-du-Prince-Édouard",
  "Canada - Quebec / Québec",
  "Canada - Saskatchewan",
  "Canada - Yukon",
  "Canada - National Capital Region",
  "Canada - Atlantic Provinces",
  "Canada - Prairie Provinces",
  "Canada - Pacific Region",
  "Canada - Northern Canada",
  "Canada - Eastern Canada",
  "Canada - Western Canada",
  "Canada - Central Canada",
  "Canada - Southern Ontario",
  "Canada - Northern Ontario",
  "Canada - Greater Toronto Area",
  "Canada - Greater Vancouver",
  "Canada - Greater Montreal / Grand Montréal",
  "Canada - Greater Calgary",
  "Canada - Greater Edmonton",
  "Canada - Greater Ottawa",
  "Canada - Greater Winnipeg",
  "Canada - Greater Halifax",
  "Canada - Greater Victoria",
  "Canada - Greater Quebec City",
  "Canada - Greater Hamilton",
  "Canada - Greater Kitchener-Waterloo",
  "Canada - Greater London Ontario",
  "Canada - Greater Windsor",
  "Canada - Greater Saskatoon",
  "Canada - Greater Regina",
  "Canada - Greater St. John's",
  "Canada - Greater Moncton",
  "Canada - Greater Fredericton",
  "Canada - Greater Charlottetown",
  "Canada - Greater Whitehorse",
  "Canada - Greater Yellowknife",
  "Canada - Greater Iqaluit",
  "Canada - Greater Thunder Bay",
  "Canada - Greater Sudbury",
  "Canada - Greater Kingston",
  // More to reach 148
  ...Array.from({ length: 98 }, (_, i) => `Canada - Region ${i + 51}`),
];

const ITEMS_PER_PAGE = 10;
const TOTAL = allItems.length;


const ChevronLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function EducationSystemList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = Math.min(start + ITEMS_PER_PAGE, TOTAL);
  const currentItems = allItems.slice(start, end);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (currentPage > 4) pages.push("...");
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (currentPage < totalPages - 3) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const PageBtn = ({ page }) => {
    const isActive = page === currentPage;
    const isDots = page === "...";
    return (
      <button
        disabled={isDots}
        onClick={() => !isDots && setCurrentPage(page)}
        className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-150 border
          ${isDots ? "border-transparent text-gray-400 cursor-default" :
            isActive
              ? "bg-[var(--primary-color)] text-white shadow-sm"
              : "border-gray-200 text-gray-600 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 bg-white"
          }`}
      >
        {page}
      </button>
    );
  };

  return (
    <div className="">
      <div className="">
        {/* List */}
        <div className="flex flex-col gap-3 mb-8">
          {currentItems.map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center cursor-pointer justify-between px-5 py-4 bg-[#F3F9FA] border border-[#b8d6dd] rounded-lg text-left transition-colors duration-150 group"
            >
              <span className="text-[var(--primary-color)] font-medium text-sm underline underline-offset-2 decoration-[var(--primary-color)]">
                {item}
              </span>
              <ArrowRight className="text-[#99A1AF] w-5" />
            </button>
          ))}
        </div>

        {/* Footer: Results + Pagination */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-gray-500">
            Results {start + 1} to {end} of {TOTAL}
          </p>

          <div className="flex items-center gap-1.5">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 h-9 rounded-md border border-gray-200 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft />
              Previous
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {pageNumbers.map((page, i) => (
                <PageBtn key={i} page={page} />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 h-9 rounded-md border border-gray-200 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}