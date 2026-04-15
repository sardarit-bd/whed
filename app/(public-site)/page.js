"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CountrySelectionModal from "../../components/CountryDelectionModal";
// import { detailsMap, universitiesData } from "../../components/Worldmap";
import WorldMembersMap from "@/components/WorldMembersMap";
import Loading from "../../components/shared/Loading";
import detailsMap from "../../data/MapData/detailsMap";
import universitiesData from "../../data/MapData/universitiesData";
import useCountryStore from "../../store/useCountryStore";
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { ComposableMap, Marker, ZoomableGroup } from "react-simple-maps";

// const WorldMap = dynamic(() => import("../../components/Worldmap"), { ssr: false });

const HomePage = () => {

  const router = useRouter();
  const { selectedCountry, setSelectedCountry } = useCountryStore();
  const [searchCountry, setSearchCountry] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWhedId, setSearchWhedId] = useState("");
  const [memberFilter, setMemberFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [value, setValue] = useState("education");

  const handleCountryClick = (name, data) => {


    setisLoading(true);
    // setSearchCountry(value);
    // const details = detailsMap[value];
    // setSelectedCountry(details);

    setTimeout(() => {
      setisLoading(false);
      router?.push(`/institution`);
    }, 1400);


  };

  const handleChangeValue = (value) => {

    setisLoading(true);
    setSearchCountry(value);
    const details = detailsMap[value];
    setSelectedCountry(details);

    setTimeout(() => {
      setisLoading(false);
      router?.push(`/institution`);
    }, 1400);

    // setOpen(details);
  }

  return (
    <div className="min-h-[80vh] h-fit pb-6">

      {
        isLoading && (
          <div className="fixed inset-0 w-screen h-screen bg-black/30 z-50 flex items-center justify-center">
            <div className="bg-[var(--primary-color)] w-fit px-5 py-2 rounded-lg text-white font-semibold text-sm">
              <Loading />
            </div>
          </div>
        )
      }

      <div className="cs-container mx-auto py-6">

        {/* 3-COLUMN GRID — items-stretch so all columns match height */}
        <div
          className="grid gap-5 mb-5 items-stretch lg:grid-cols-12 grid-cols-1"
        // style={{ gridTemplateColumns: "175px 1fr 290px" }}
        >

          {/* ── LEFT: Logos ── */}
          <div className="bg-white rounded-xl p-4 border border-[#00000026] flex lg:flex-col gap-4 order-3 lg:order-1 lg:col-span-2">
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772696794/iau_heajcc.png"
              alt="IAU Logo"
              width={200}
              height={100}
              className="object-contain lg:w-full"
            />
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772696795/unesco_u3r2ly.png"
              alt="UNESCO Logo"
              width={200}
              height={100}
              className="object-contain lg:w-full"
            />
          </div>

          {/* ── CENTER: Map ── */}
          <div className="bg-white rounded-xl p-5 border border-[#00000026] flex flex-col order-1 lg:order-2 lg:col-span-7">
            <h1 className="text-center text-[var(--primary-color)] lg:text-5xl text-2xl lg:leading-[50px] font-bold font-extrabold tracking-wide mb-1">
              The World Higher Education Database (WHED)
            </h1>

            <p className="text-center text-[#4A5565] text-xl leading-tight mb-4 my-5">
              The unique database providing <i className="text-[var(--primary-color)] font-semibold">authoritative information</i> on higher education systems, credentials, and institutions globally
            </p>
            <div className="relative my-5">

              <select
                value={searchCountry}
                onChange={(e) => handleChangeValue(e.target.value)}
                className="
                  w-full 
                  h-[42px]
                  text-sm 
                  border border-gray-200 
                  rounded-md
                  px-3
                  focus:outline-none
                  focus:ring-1 
                  focus:ring-[var(--primary-color)]
                  text-[var(--text-primary)]
                  bg-white
                  cursor-pointer">
                <option value="" disabled>
                  Choose a country
                </option>

                {universitiesData?.map((country) => (
                  <option key={country.country} value={country.country}>
                    {country.name}
                  </option>
                ))}
              </select>

              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
            </div>

            {/* Map grows to fill remaining height */}
            <div className="rounded-lg overflow-hidden mt-2 border border-gray-100 flex-1">
              {/* <WorldMap onCountryClick={handleCountryClick} /> */}



              <WorldMembersMap handleCountryClick={handleCountryClick} />


              <div className="hidden text-center p-5 text-gray-400 flex flex-col items-center gap-3 justify-center h-full">
                <h2 className="text-2xl font-bold text-[var(--primary-color)]"> World Map Coming Soon!</h2>
                In the meantime, select a country from the dropdown above to explore its HEI data.
              </div>


            </div>
          </div>

          {/* ── RIGHT: Search — full height, space-between to fill ── */}
          <div className="flex flex-col rounded-xl p-5 bg-white gap-4 h-full border border-[#00000026] order-2 lg:order-3 lg:col-span-3">

            {/* Quick Search */}
            <div className="rounded-xl overflow-hidden">
              <div className="bg-[var(--secondary-color)] text-center text-white px-4 py-3 font-bold text-sm tracking-wide">
                HEI Quick search
              </div>
              <div className="py-4 flex flex-col gap-3">
                <p className="text-sm text-[var(--primary-color)] font-medium">
                  Choose a country and/or enter a keyword
                </p>
                <div className="relative">
                  <select
                    value={searchCountry}
                    onChange={(e) => handleChangeValue(e.target.value)}
                    className="
                    w-full 
                    h-[38px]
                    text-sm 
                    border border-gray-200 
                    rounded-md
                    px-3
                    focus:outline-none
                    text-[var(--text-primary)]
                    bg-white
                    cursor-pointer">
                    <option value="" disabled>
                      Choose a country
                    </option>

                    {universitiesData?.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.name}
                      </option>
                    ))}
                  </select>

                </div>
                <input
                  type="text"
                  placeholder="Enter Search Team"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <div className="flex gap-5 text-xs text-gray-600">
                  <span>You can search by WHED ID, Institution name, or field of study</span>
                </div>
                <button className="w-full bg-[var(--primary-color)] text-white font-normal py-2.5 rounded-lg text-sm mt-2 transition-colors tracking-wide">
                  Search
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200"></div>
            {/* Advanced Search */}
            <div className="border rounded-sm border-[var(--primary-color)] text-[var(--text-primary)] text-[var(--secondary-color)] px-4 py-2 font-semibold text-md text-center mt-3">
              HEI Advanced search
            </div>

            {/* Member links — flex-1 to fill remaining height */}
            {/* <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2.5 flex-1 justify-center">
              <a href="#" className="text-[var(--primary-color)] text-xs font-semibold hover:underline leading-snug">
                List of IAU Members Organizations
              </a>
              <a href="#" className="text-[var(--primary-color)] text-xs font-semibold hover:underline leading-snug">
                Discover the special WHED features for IAU Members
              </a>
            </div> */}

          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {[
            { value: "21,696", label: "Recognized Institutions" },
            { value: "193", label: "Countries" },
            { value: "000", label: "Number of degrees" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl py-8 px-5 shadow-sm text-center">
              <p className="text-5xl font-black text-[var(--secondary-color)] tracking-tight">{stat.value}</p>
              <p className="text-2xl font-semibold text-[var(--text-primary)] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      {open && (
        <CountrySelectionModal
          country={open?.name}
          value={value}
          onChange={setValue}
          onCancel={() => setOpen(null)}
          onConfirm={() => {
            console.log(value);
            setOpen(null);
          }}
        />
      )}
    </div>
  );
};

export default HomePage;