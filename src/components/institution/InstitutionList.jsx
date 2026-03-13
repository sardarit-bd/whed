import InstitutionCard from "./InstitutionCard";


export default function InstitutionList({
  institutions,
}) {
  return (
    <div className="space-y-6">
      {institutions.map((inst) => (
        <InstitutionCard key={inst.id} {...inst} />
      ))}
    </div>
  );
}