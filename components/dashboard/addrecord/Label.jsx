function Label({ children, required }) {
    return (
        <label className="text-sm text-gray-500 leading-tight">
            {children}
            {required && (
                <span className="ml-0.5" style={{ color: "#e24b4a" }}>
                    *
                </span>
            )}
        </label>
    );
}

export default Label;