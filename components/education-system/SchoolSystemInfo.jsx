const InfoGrid = ({ rows }) => (
  <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
    {rows.map(([label, value]) => (
      <div key={label} className="flex py-1 text-sm">
        <span className="w-52 flex-shrink-0 text-gray-700 font-medium">{label}:</span>
        <span className="text-gray-800">{value}</span>
      </div>
    ))}
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-sm font-bold text-gray-900 mt-6 mb-3 pb-2 border-b border-gray-200">
    {children}
  </h3>
);

const SubSectionTitle = ({ children }) => (
  <h4 className="text-sm font-bold text-gray-900 mt-5 mb-2">{children}</h4>
);

export default function SchoolSystemInfo() {
  return (
    <div className=" bg-white border-t border-gray-200 px-4 py-5 mt-5">

      {/* Age of Entry and Exit */}
      <SectionTitle>Age of Entry and Exit</SectionTitle>
      <InfoGrid rows={[["Age of entry", "6"], ["Age of exit", "16"]]} />

      {/* Structure of School System */}
      <SectionTitle>Structure of School System</SectionTitle>

      <SubSectionTitle>
        Elementary (A) Elementary B) Division 1 (Years 1–3); Division 2 (Years 4–6)
      </SubSectionTitle>
      <InfoGrid rows={[
        ["Length of program", "6 years"],
        ["Age level from", "6"],
        ["Age level to", "12"],
      ]} />

      <SubSectionTitle>Junior Secondary (Junior High School)</SubSectionTitle>
      <InfoGrid rows={[
        ["Length of program", "3 years"],
        ["Age level from", "12"],
        ["Age level to", "15"],
      ]} />

      <SubSectionTitle>Senior Secondary (Senior High School)</SubSectionTitle>
      <InfoGrid rows={[
        ["Length of program", "3 years"],
        ["Age level from", "15"],
        ["Age level to", "18"],
        ["Certificate/Diploma awarded", "High School Diploma"],
      ]} />

      {/* Description */}
      <SectionTitle>Description of School System</SectionTitle>
      <p className="text-sm text-gray-700 leading-relaxed">
        When it comes to selecting a school, parents and students can choose from a wide range of options. They
        can select from public schools, Catholic schools, Francophone schools, private schools, and charter schools.
        They can also access a number of unique and innovative programmes including home education, online/virtual
        schools, outreach programmes and alternative programmes. Parents can also opt to home school their children.
        Choice is one of the important principles on which Alberta's education system is built.
      </p>
    </div>
  );
}