import useFocus from "./useFocus";


const inputBase = "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-800 outline-none transition-all placeholder:text-gray-400";

function TextInput({ value, onChange, placeholder, type = "text" }) {
    const focus = useFocus();
    return (
        <input
            className={inputBase}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            {...focus}
        />
    );
}

export default TextInput;