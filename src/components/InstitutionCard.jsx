import Image from "next/image";
export default function InstitutionCard({
    id,
    name,
    country,
    region,
    image,
    logo,
    member,
    website,
}) {
    return (
        <div className="flex gap-6 border rounded-xl p-5 bg-white shadow-sm items-center">

            {/* Image */}
            <div className="w-[260px] h-[150px] relative rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
                <span className="text-sm text-sky-600 font-medium">
                    # {id}
                </span>

                <h3 className="text-xl font-semibold text-gray-900">
                    {name}
                </h3>

                <p className="text-gray-500 text-sm">
                    📍 {country} • {region}
                </p>

                <div className="flex gap-3 pt-2">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        View Details
                    </button>

                    <a
                        href={website}
                        target="_blank"
                        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
                    >
                        Visit Website
                    </a>
                </div>
            </div>

            {/* Logo & Member */}
            <div className="flex flex-col items-end gap-3">
                <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={50}
                />

                {member && (
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                        🌍 IAU Member
                    </span>
                )}
            </div>
        </div>
    );
}