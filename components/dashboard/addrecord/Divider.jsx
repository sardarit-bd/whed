function Divider({ title }) {
    return (
        <div className="mt-6 mb-4">
            {title && (
                <h3 className="text-sm font-semibold text-gray-700 mb-3">{title}</h3>
            )}
            <div className="h-px bg-gray-100" />
        </div>
    );
}


export default Divider;