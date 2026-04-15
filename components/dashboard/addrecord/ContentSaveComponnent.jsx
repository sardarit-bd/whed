

const ContentSaveComponnent = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
            <p className="flex items-start gap-2 text-xs border border-gray-200 rounded-lg px-2 py-2" style={{ color: "#e24b4a" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                (*) Required fields – Please fill in all required fields before saving.
            </p>
            <div className="flex items-center gap-2 self-end sm:self-auto">
                <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors bg-white cursor-pointer">
                    Cancel
                </button>
                <button
                    className="px-4 py-2 text-sm rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--primary-color)" }}
                >
                    Save (Minor)
                </button>
                <button
                    className="px-4 py-2 text-sm rounded-lg text-white font-medium cursor-pointer transition-opacity hover:opacity-80"
                    style={{
                        backgroundColor: "var(--primary-color)",
                        filter: "brightness(0.88)",
                    }}
                >
                    Save (Major)
                </button>
            </div>
        </div>
    )
}

export default ContentSaveComponnent;