

function RadioGroup({ name, options, value, onChange }) {
    return (
        <div className="flex flex-wrap gap-5">
            {options.map((opt) => (
                <label
                    key={opt}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none"
                >
                    <input
                        type="radio"
                        name={name}
                        value={opt}
                        checked={value === opt}
                        onChange={() => onChange(opt)}
                        className="w-4 h-4 cursor-pointer"
                        style={{ accentColor: "var(--primary-color)" }}
                    />
                    {opt}
                </label>
            ))}
        </div>
    );
}


export default RadioGroup;