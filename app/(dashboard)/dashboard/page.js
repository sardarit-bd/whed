const CARDS = [
    {
        id: "systems",
        title: "Systems + Credentials",
        rows: [
            { label: "Data provider unknown", count: 2, bg: "bg-amber-50" },
            { label: "IAU completed", count: 0, bg: "bg-green-50" },
        ],
        footer: { label: "Total Countries", count: 2 },
    },
    {
        id: "institutions",
        title: "Institutions",
        rows: [
            { label: "Data provider unknown", count: 3, bg: "bg-amber-50" },
            { label: "IAU completed", count: 2, bg: "bg-green-50" },
        ],
        footer: { label: "Total Institutions", count: 5 },
    },
    {
        id: "subscribers",
        title: "Subscribers",
        rows: [
            { label: "Waiting for validation", count: 0, bg: "bg-white" },
            { label: "Waiting for payment", count: 0, bg: "bg-white" },
            { label: "Account expired", count: 16, bg: "bg-white" },
        ],
        footer: null,
    },
];




// ── DASHBOARD CARD ────────────────────────────────────────────────────────────
function DashboardCard({ card }) {
    return (
        <div className="border border-[#1a9fbe] rounded-md overflow-hidden">
            {/* Header */}
            <div className="bg-[#1a9fbe] px-3 py-2">
                <h3 className="text-sm font-semibold text-white tracking-wide">{card.title}</h3>
            </div>

            {/* Rows */}
            <div className="bg-white divide-y divide-gray-100">
                {card.rows.map((row, i) => (
                    <div key={i} className={`flex items-center justify-between px-3 py-2.5 ${row.bg}`}>
                        <div className="flex items-center gap-2 min-w-0">
                            {/* Radio circle */}
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            </div>
                            <span className="text-sm text-gray-700 truncate">{row.label}</span>
                        </div>
                        <span className="ml-2 shrink-0 min-w-[26px] h-6 px-1.5 rounded bg-[#1a9fbe] text-white text-xs font-bold flex items-center justify-center">
                            {row.count}
                        </span>
                    </div>
                ))}

                {/* Footer */}
                {card.footer && (
                    <div className="flex items-center justify-between px-3 py-2 bg-white">
                        <span className="text-xs text-gray-500 italic">{card.footer.label}</span>
                        <span className="shrink-0 min-w-[26px] h-6 px-1.5 rounded bg-[#1a9fbe] text-white text-xs font-bold flex items-center justify-center">
                            {card.footer.count}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}



const DashboardPage = () => {
    return (
        <main className="flex-1 overflow-y-auto p-0 sm:p-5 lg:p-0">

            {/* Top row: 2 cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4" style={{ maxWidth: "100%" }}>
                <DashboardCard card={CARDS[0]} />
                <DashboardCard card={CARDS[1]} />
                <DashboardCard card={CARDS[2]} />
            </div>

            {/* Subscribers — left-aligned, half width on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4" style={{ maxWidth: "100%" }}>
                <DashboardCard card={CARDS[0]} />
                <DashboardCard card={CARDS[1]} />
                <DashboardCard card={CARDS[2]} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4" style={{ maxWidth: "100%" }}>
                <DashboardCard card={CARDS[0]} />
                <DashboardCard card={CARDS[1]} />
                <DashboardCard card={CARDS[2]} />
            </div>
        </main>
    )
}

export default DashboardPage;