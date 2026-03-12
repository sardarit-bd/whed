"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CountrySelectionModal from "@/components/CountrySelectionModal";
import { detailsMap, universitiesData } from "@/components/Worldmap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { ComposableMap, Marker, ZoomableGroup } from "react-simple-maps";

const WorldMap = dynamic(() => import("@/components/Worldmap"), { ssr: false });

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWhedId, setSearchWhedId] = useState("");
  const [memberFilter, setMemberFilter] = useState("all");
  const [open, setOpen] = useState(null)
  const [value, setValue] = useState("education");

  const handleCountryClick = (name, data) => {
    setSelectedCountry({ name, data });
    // setSearchCountry(name);
    setOpen(data)
  };

  const handleChangeValue = (value) => {
    setSearchCountry(value)
    const details = detailsMap[value];
    setOpen(details)
  }

  return (
    <div className="min-h-screen">
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
              <Select value={searchCountry} onValueChange={handleChangeValue}>
                <SelectTrigger
                  className="
        w-full 
        h-[42px]
        text-sm 
        border-gray-200 
        focus:ring-1 
        focus:ring-[var(--primary-color)]
        text-[var(--text-primary)]
      "
                >
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>

                <SelectContent>
                  {universitiesData?.map((country) => (
                    <SelectItem key={country.country} value={country.country}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
            </div>

            {/* Map grows to fill remaining height */}
            <div className="rounded-lg overflow-hidden mt-2 border border-gray-100 flex-1">
              <WorldMap onCountryClick={handleCountryClick} />
            </div>
          </div>

          {/* ── RIGHT: Search — full height, space-between to fill ── */}
          <div className="flex flex-col rounded-xl p-5 bg-white gap-4 h-full border border-[#00000026] order-2 lg:order-3 lg:col-span-3">

            {/* Quick Search */}
            <div className="rounded-xl overflow-hidden">
              <div className="bg-[var(--secondary-color)] text-white px-4 py-3 font-bold text-sm tracking-wide">
                HEI Quick search
              </div>
              <div className="py-4 flex flex-col gap-3">
                <p className="text-sm text-[var(--primary-color)] font-medium">
                  Choose a country and/or enter a keyword
                </p>
                <div className="relative">
                  <select className="w-full px-3 py-2 rounded-sm border border-gray-200 text-sm text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] appearance-none">
                    <option>All Countries</option>
                    <option>Canada</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>India</option>
                  </select>
                  {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span> */}
                </div>
                <input
                  type="text"
                  placeholder="Enter HEI or field of study keyword(s)"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[]"
                />
                <input
                  type="text"
                  placeholder="Enter IAU Global WHED ID"
                  value={searchWhedId}
                  onChange={(e) => setSearchWhedId(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:[var(--primary-color)]"
                />
                <div className="flex gap-5 text-xs text-gray-600">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="mf" value="members" checked={memberFilter === "members"} onChange={() => setMemberFilter("members")} className="accent-[var(--primary-color)]" />
                    Only IAU members
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="mf" value="all" checked={memberFilter === "all"} onChange={() => setMemberFilter("all")} className="accent-[var(--primary-color)]" />
                    All institutions
                  </label>
                </div>
                <button className="w-full bg-[var(--primary-color)] text-white font-normal py-2.5 rounded-lg text-sm mt-2 transition-colors tracking-wide">
                  Search
                </button>
              </div>
            </div>

            <div className="border-t border-[#B3B3B3]"></div>
            {/* Advanced Search */}
            <div className="border rounded-sm border-[var(--primary-color)] text-[var(--text-primary)] text-[var(--secondary-color)] px-4 py-3 font-semibold text-lg text-center">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pb-">
          {[
            { value: "190", label: "Countries Connected" },
            { value: "600+", label: "IAU Members" },
            { value: "21,500", label: "Total Institutions" },
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