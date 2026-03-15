const data = [
  {
    section: "Centres",
    items: [
      { name: "Advanced Technologies of Life Sciences (CAT)", fields: "Biological and Life Sciences, Biomedicine, Health Sciences, Veterinary Science" },
      { name: "Alberta Global Forum", fields: "Communication Studies, Cultural Studies" },
      { name: "Bioengineering Research and Education (CBRE)", fields: "Bioengineering" },
      { name: "Environmental Engineering Research and Education (CEERE)", fields: "Energy Engineering, Environmental Engineering" },
      { name: "Gifted Education", fields: "Special Education" },
      { name: "Health and Policy Studies (CHAPS)", fields: "Public Health" },
      { name: "Information Security and Cryptography", fields: "Computer Science, Mathematics" },
      { name: "Innovation Studies (THECIS)", fields: "Innovation Studies" },
      { name: "Innovative Technology (Calgary – CCIT)", fields: "Technology and Innovation" },
      { name: "Institutional Research Information Services Solution (IRISS)", fields: "Information Sciences" },
      { name: "Mathematics in Life Sciences", fields: "Biological and Life Sciences, Ecology, Mathematics, Medicine" },
      { name: "Microsystems Engineering (CME)", fields: "Engineering" },
      { name: "Military and Strategic Studies (CMSS)", fields: "Military Science" },
      { name: "Pipeline Engineering (PEC)", fields: "Mechanical Engineering, Petroleum and Gas Engineering" },
      { name: "Public Interest Accounting (CPIA)", fields: "Accountancy" },
      { name: "Risk Studies", fields: "Management" },
      { name: "Social Work Research and Development", fields: "Social Work" },
      { name: "Study of Higher Education (Canadian)", fields: "Higher Education" },
      { name: "World Tourism Education and Research", fields: "Tourism" },
    ],
  },
  {
    section: "Faculties",
    items: [
      { name: "Arts", fields: "African Studies, Anthropology, Archaeology, Art Education, Canadian Studies, Communication Studies, Cultural Studies, Dance, Development Studies, Earth Sciences, East Asian Studies, Economics, English, French, Geography, German, Greek (Classical), Heritage Preservation, History, Indigenous Studies, International Relations and Diplomacy, International Studies, Italian, Latin, Latin American Studies, Law, Linguistics, Media Studies, Museum Studies, Music, Philosophy, Political Sciences, Psychology, Religious Studies, Slavic Languages, Sociology, Spanish, Technology, Theatre, Urban Studies, Women's Studies" },
      { name: "Faculty of Nursing – Doha, Qatar", fields: "Nursing" },
      { name: "Graduate Studies", fields: "Anthropology, Archaeology, Architecture, Arts and Humanities, Astronomy and Space Science, Biochemistry, Biological and Life Sciences, Biomedical Engineering, Business Administration, Cardiology, Chemical Engineering, Chemistry, Civil Engineering, Communication Studies, Computer Engineering, Computer Science, Continuing Education, Design, Earth Sciences, East Asian Studies, Economics, Education, Electrical Engineering, Energy Engineering, Engineering, English, Environmental Engineering, Fine Arts, French, Gastroenterology, Geography, German, Germanic Studies, Greek (Classical), History, Immunology, Italian, Latin, Law, Linguistics, Mathematics, Mechanical Engineering, Medicine, Microbiology, Military Science, Molecular Biology, Music, Natural Sciences, Neurosciences, Nursing, Petroleum and Gas Engineering, Philosophy, Physical Therapy, Physics, Political Sciences, Psycholinguistics, Psychology, Religious Studies, Respiratory Therapy, Slavic Languages, Social and Preventive Medicine, Social Work, Sociology, Spanish, Statistics, Surveying and Mapping, Theatre, Veterinary Science" },
      { name: "Kinesiology", fields: "Anatomy, Health Sciences, Physical Therapy, Physiology, Rehabilitation and Therapy, Sports" },
      { name: "Law", fields: "Law" },
      { name: "Nursing", fields: "Nursing" },
      { name: "Science", fields: "Astronomy and Space Science, Biological and Life Sciences, Chemistry, Computer Science, Earth Sciences, Environmental Studies, Mathematics, Nanotechnology, Natural Sciences, Physics, Statistics" },
      { name: "Social Work", fields: "Social Work" },
      { name: "Veterinary Medicine", fields: "Veterinary Science" },
    ],
  },
  {
    section: "Institutes",
    items: [
      { name: "Advanced Policy Research", fields: "Policy Research" },
      { name: "Biocomplexity and Informatics", fields: "Biology, Molecular Biology" },
      { name: "Biogeoscience", fields: "Biological and Life Sciences, Biology, Botany, Earth Sciences, Ecology, Environmental Engineering, Environmental Management, Environmental Studies, Geography, Neurosciences, Surveying and Mapping, Wildlife" },
      { name: "Bone and Joint Health (McCaig)", fields: "Medicine, Rheumatology" },
      { name: "Gender Research", fields: "Gender Studies" },
      { name: "Humanities (Calgary)", fields: "Arts and Humanities" },
      { name: "Professional Communication (IPC)", fields: "Communication Studies, Cultural Studies" },
      { name: "Quantum Information Science", fields: "Applied Mathematics, Computer Science, Physics" },
      { name: "Space Research", fields: "Astronomy and Space Science" },
      { name: "Sustainable Energy, Environment and Economy", fields: "Economics, Energy Engineering, Environmental Studies" },
      { name: "United States Policy Research", fields: "Economics, International Relations and Diplomacy, Political Sciences" },
    ],
  },
  {
    section: "Research Divisions",
    items: [
      { name: "Fine Arts (CRFA)", fields: "Fine Arts" },
      { name: "Informatics", fields: "Computer Science" },
      { name: "Language", fields: "Linguistics, Modern Languages" },
      { name: "Latin American (LARC)", fields: "Latin American Studies" },
    ],
  },
  {
    section: "Schools",
    items: [
      { name: "Architecture, Planning and Landscape", fields: "Architectural and Environmental Design, Architecture, Design, Environmental Studies, Landscape Architecture, Town Planning, Urban Studies" },
      { name: "Business (Haskayne)", fields: "Accountancy, Business Administration, Business and Commerce, Finance, Hotel and Restaurant, Human Resources, Information Sciences, International Business, Management, Marketing, Operations Research, Tourism" },
      { name: "Education (Werklund)", fields: "Education, Psychology, Teacher Training" },
      { name: "Engineering (Schulich)", fields: "Bioengineering, Biomedical Engineering, Chemical Engineering, Civil Engineering, Computer Engineering, Electrical Engineering, Engineering, Environmental Engineering, Mechanical Engineering, Petroleum and Gas Engineering, Software Engineering, Surveying and Mapping" },
      { name: "Medicine (Cumming)", fields: "Anatomy, Biochemistry, Cardiology, Cell Biology, Genetics, Health Sciences, Laboratory Techniques, Medicine, Microbiology, Molecular Biology, Neurosciences, Obstetrics and Gynaecology, Oncology, Paediatrics, Pathology, Pharmacology, Physiology, Psychiatry and Mental Health, Radiology, Rehabilitation and Therapy, Surgery, Veterinary Science" },
    ],
  },
];

const Row = ({ name, fields }) => (
  <div className="flex py-3 border-b border-gray-100 last:border-0">
    <span className="w-48 flex-shrink-0 text-sm font-semibold text-[#364153] pr-4 leading-snug">{name}</span>
    <span className="text-sm text-gray-700 leading-relaxed flex-1">{fields}</span>
  </div>
);

const Section = ({ section, items }) => (
  <div className="mb-2">
    <h3 className="text-sm font-bold text-gray-900 py-3 border-b border-gray-300">{section}</h3>
    <div>
      {items.map((item) => (
        <Row key={item.name} name={item.name} fields={item.fields} />
      ))}
    </div>
  </div>
);

export default function DivisionsComponent() {
  return (
    <div className="bg-white px-4 py-4">
      {data.map((d) => (
        <Section key={d.section} section={d.section} items={d.items} />
      ))}
    </div>
  );
}