import InstitutionClassicCard from "./InstitutionClassicCard";

export default function InstitutionClasicList({
  institutions,
}) {
  return (
    <div className="space-y-6 my-10">
      {institutions.map((inst) => (
        <InstitutionClassicCard key={inst.id} {...inst} />
      ))}
    </div>
  );
}