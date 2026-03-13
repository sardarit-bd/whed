import React from 'react'

import { ExternalLink, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import UniversityInfo from '@/components/system-information/Universityinfo';
const institution = {
    id: "IAU-021547",
    name: "University of Calgary",
    country: "Canada",
    region: "Alberta",
    image: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773308829/img_qjq9v3.png",
    logo: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/image_2_jjkklf.png",
    logo2: "https://res.cloudinary.com/dg83pvgls/image/upload/v1773310592/IAU_Member_logo_1_s66ock.png",
    member: true,
    website: "https://www.ucalgary.ca/",
}

function InstitutionCard({
    id,
    name,
    country,
    region,
    image,
    logo,
    logo2
}) {
    return (
        <div className="flex justify-between min-h-[300px] md:items-center flex-col md:flex-row gap-x-20 gap-y-10 bg-white">

            {/* Image */}
            <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={700}
                    height={400}
                    className="w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3 w-full md:w-1/2">

                <span className="inline-block text-xs md:text-sm bg-[#EEF2FF] rounded-md text-[var(--primary-color)] px-3 py-1 font-medium">
                    #{id}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-[#101828]">
                    {name}
                </h3>

                <p className="text-sm text-gray-500 flex gap-2 items-center">
                    <MapPin className="text-[var(--primary-color)] w-4 h-4" />
                    {country} • {region}
                </p>

                {/* Logos */}
                <div className="flex items-center gap-3 pt-3 md:pt-0">

                    {logo && (
                        <Image
                            src={logo}
                            alt={name}
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    )}

                    {logo2 && (
                        <Image
                            src={logo2}
                            alt={name}
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    )}

                </div>
            </div>


        </div>
    );
}

export default function page() {
    return (
        <main className='cs-container mx-auto py-10 px-4'>
            <InstitutionCard {...institution} />
            <UniversityInfo />
        </main>
    )
}
