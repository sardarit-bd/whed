import Label from "./Label";

function Field({ label, required, children }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-4 items-start sm:items-center py-2">
            <Label required={required}>{label}</Label>
            <div>{children}</div>
        </div>
    );
}

export default Field;