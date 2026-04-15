function useFocus() {
    return {
        onFocus: (e) => {
            e.target.style.borderColor = "var(--primary-color)";
            e.target.style.boxShadow =
                "0 0 0 3px color-mix(in srgb, var(--primary-color) 15%, transparent)";
        },
        onBlur: (e) => {
            e.target.style.borderColor = "";
            e.target.style.boxShadow = "";
        },
    };
}

export default useFocus;