import InstitutionList from "@/components/InstitutionList";

export default function Home() {

  const institutions = [
    {
      id: "IAU-021547",
      name: "University of Calgary",
      country: "Canada",
      region: "Alberta",
      image: "/calgary.jpg",
      logo: "/calgary-logo.png",
      member: true,
      website: "https://www.ucalgary.ca/",
    },
    {
      id: "IAU-021599",
      name: "Saint Mary's University",
      country: "Canada",
      region: "Nova Scotia",
      image: "/saintmary.jpg",
      logo: "/saintmary-logo.png",
      member: true,
      website: "https://www.smu.ca/",
    },
  ];

  return (
    <main className="cs-container mx-auto py-10 px-4">

      {/* Title */}
      <h1 className="lg:text-[52px] text-4xl font-bold text-[var(--secondary-color)] mb-6">
        Canada
      </h1>

      {/* Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <button className="bg-[var(--primary-color)] text-white px-6 py-3 lg:text-2xl text-lg rounded-lg font-semibold">
          Higher Education Institutions (HEIs)
        </button>

        <button className="bg-[#B3B3B3] text-white px-6 py-3 lg:text-2xl text-lg rounded-lg font-semibold">
          Education System & Credentials
        </button>
      </div>

      {/* Results */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Institutions Results
        </h2>

        <p className="text-gray-500 text-sm">
          148 Results Found For (Country = Canada)
        </p>
      </div>

      <InstitutionList institutions={institutions} />
    </main>
  );
}