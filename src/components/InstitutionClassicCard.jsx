import { ExternalLink, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function InstitutionClassicCard({
    id,
    name,
    country,
    region,
    image,
    logo,
    logo2,
    member,
    website,
}) {
    return (
        <div className="border rounded-xl p-4 md:p-5 bg-white shadow-sm">

            {/* Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-3">

                <span className="inline-block text-xs md:text-sm bg-[#EEF2FF] rounded-md text-[var(--primary-color)] px-3 py-1 font-medium">
                    #{id}
                </span>

                <div>
                    <h3 className="text-lg my-4 md:text-xl font-bold text-[#101828]">
                        {name}
                    </h3>

                    <p className="text-sm text-gray-500 flex gap-2 items-center">
                        <MapPin className="text-[var(--primary-color)] w-4 h-4" />
                        {country} • {region}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">

                    <button className="bg-[var(--primary-color)] flex gap-2 items-center cursor-pointer text-white px-4 md:px-6 py-2 text-sm rounded-sm font-medium">
                        <ExternalLink className="w-4" />
                        View Details
                    </button>

                    <a
                        href={website}
                        target="_blank"
                        className="bg-white flex gap-2 border items-center border-[var(--primary-color)] text-[var(--primary-color)] px-4 md:px-6 py-2 text-sm rounded-sm font-medium"
                    >
                        <Globe className="w-4" />
                        Visit Website
                    </a>

                </div>
            </div>
        </div>
    );
}