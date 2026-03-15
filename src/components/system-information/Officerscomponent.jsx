const officers = [
  {
    section: "Head",
    name: "Ed McCauley",
    jobTitle: "President",
  },
  {
    section: "Senior Administrative Officer",
    name: "James Allan",
    jobTitle: "Vice-President (Advancement)",
  },
  {
    section: "International Relations Officer",
    name: "Kate Hamilton",
    jobTitle: "Vice President, External Relations",
  },
];

const SectionTitle = ({ children }) => (
  <h3 className="text-sm font-bold text-gray-900 py-3 border-b border-gray-200">{children}</h3>
);

const Row = ({ label, value }) => (
  <div className="flex items-center py-3 border-b border-gray-100 last:border-0">
    <span className="w-48 flex-shrink-0 text-sm text-gray-700">{label}</span>
    <span className="text-sm text-gray-800">{value}</span>
  </div>
);

export default function OfficersComponent() {
  return (
    <div className=" bg-white px-4 py-4">
      {officers.map((officer) => (
        <div key={officer.section} className="mb-2">
          <SectionTitle>{officer.section}</SectionTitle>
          <Row label="Name" value={officer.name} />
          <Row label="Job Title" value={officer.jobTitle} />
        </div>
      ))}
    </div>
  );
}