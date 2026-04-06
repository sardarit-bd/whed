const degrees = [
  {
    title: "Baccalauréat/Bachelor's Degree",
    fields: [
      {
        label: "Fields of Study",
        value:
          "Accountancy, Actuarial Science, Anthropology, Archaeology, Architectural and Environmental Design, Architecture, Art History, Astrophysics, Biochemistry, Biological and Life Sciences, Biology, Biomedical Engineering, Biomedicine, Business and Commerce, Business Computing, Chemical Engineering, Chemistry, Civil Engineering, Communication Studies, Computer Science, Dance, Design, Development Studies, East Asian Studies, Ecology, Economics, Education, Electrical Engineering, Energy Engineering, English, Environmental Studies, Film, Finance, French, Gender Studies, Geography, Geology, Geophysics, Health Sciences, History, Indigenous Studies, Insurance, International Business, International Relations and Diplomacy, Landscape Architecture, Latin American Studies, Law, Linguistics, Management, Marketing, Mathematics, Mechanical Engineering, Medicine, Mediterranean Studies, Modern Languages, Music, Natural Sciences, Neurosciences, Nursing, Philosophy, Physics, Plant Pathology, Political Sciences, Psychology, Real Estate, Religious Studies, Small Business, Social Work, Sociology, Software Engineering, Spanish, Sports, Surveying and Mapping, Theatre, Town Planning, Transport Management, Urban Studies, Veterinary Science, Visual Arts, Zoology",
      },
    ],
  },
  {
    title: "Maîtrise/Master's Degree",
    fields: [
      {
        label: "Fields of Study",
        value:
          "Anthropology, Archaeology, Architectural and Environmental Design, Architecture, Astronomy and Space Science, Biochemistry, Biological and Life Sciences, Biomedical Engineering, Business Administration, Chemical Engineering, Chemistry, Civil Engineering, Clinical Psychology, Communication Studies, Community Health, Computer Engineering, Computer Science, Data Processing, Economics, Education, Educational Psychology, Electrical Engineering, English, Environmental Engineering, Fine Arts, Geography, History, Immunology, Information Management, Landscape Architecture, Law, Linguistics, Management, Mathematics, Mechanical Engineering, Microbiology, Military Science, Modern Languages, Music, Neurosciences, Nursing, Petroleum and Gas Engineering, Philosophy, Political Sciences, Psychology, Religious Studies, Social Work, Sociology, Software Engineering, Statistics, Surveying and Mapping, Theatre, Veterinary Science",
      },
    ],
  },
  {
    title: "Doctorat/Doctoral Degree",
    fields: [
      {
        label: "Fields of Study",
        value:
          "Astronomy and Space Science, Biochemistry, Biomedicine, Chemical Engineering, Civil Engineering, Communication Studies, Community Health, Computer Science, Economics, Education, Educational and Student Counselling, Educational Research, Engineering, English, Environmental Engineering, Film, Geography, Greek (Classical), History, Immunology, Latin, Linguistics, Management, Mathematics, Mechanical Engineering, Media Studies, Microbiology, Molecular Biology, Music, Neurosciences, Petroleum and Gas Engineering, Philosophy, Physical Therapy, Physics, Political Sciences, Production Engineering, Psychology, Religious Studies, Social Work, Sociology, Statistics, Veterinary Science",
      },
    ],
  },
  {
    title: "Additional Programs",
    fields: [
      {
        label: "Note",
        value:
          "Also Combined Degree Programmes (Bachelor/Master), 5 yrs; Postgraduate Medical Education; MBA",
      },
    ],
  },
];

const Row = ({ label, value }) => (
  <div className="flex gap-8 py-4 border-b border-gray-100 last:border-0">
    <span className="w-36 flex-shrink-0 text-sm text-gray-800">{label}</span>
    <span className="text-sm text-[#101828] leading-relaxed flex-1">{value}</span>
  </div>
);

const DegreeSection = ({ title, fields }) => (
  <div className="mb-2">
    <h3 className="text-sm font-bold text-gray-900 py-3 border-b border-gray-200">{title}</h3>
    <div>
      {fields.map((f) => (
        <Row key={f.label} label={f.label} value={f.value} />
      ))}
    </div>
  </div>
);

export default function DegreesComponent() {
  return (
    <div className="bg-white px-4 py-4">
      {degrees.map((deg) => (
        <DegreeSection key={deg.title} title={deg.title} fields={deg.fields} />
      ))}
    </div>
  );
}