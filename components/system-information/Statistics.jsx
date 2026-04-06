const Row = ({ label, value }) => (
  <div className="flex items-center py-4 border-b border-gray-100 last:border-0">
    <span className="w-48 flex-shrink-0 text-sm font-semibold text-gray-800">{label}</span>
    <span className="text-sm text-gray-700">{value}</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-base font-bold text-gray-900 py-3 border-b border-gray-200">{children}</h3>
);

export default function Statistics() {
  return (
    <div className="bg-white px-6 py-4">
      <SectionTitle>Staff Statistics</SectionTitle>
      <Row label="Statistics Year" value="2021–2022" />
      <Row label="Full Time Total" value="6,269" />

      <div className="mt-4">
        <SectionTitle>Student Statistics</SectionTitle>
        <Row label="Statistics Year" value="2021–2022" />
        <Row label="Total Students" value="36,437" />
      </div>
    </div>
  );
}