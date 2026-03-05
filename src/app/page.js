"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const WorldMap = dynamic(() => import("@/components/Worldmap"), { ssr: false });

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchWhedId, setSearchWhedId] = useState("");
  const [memberFilter, setMemberFilter] = useState("all");

  const handleCountryClick = (name, data) => {
    setSelectedCountry({ name, data });
    setSearchCountry(name);
  };

  return (
    <div className="min-h-screen bg-[#f4f8fb] font-sans">
      <div className="max-w-7xl mx-auto px-5 py-6">

        {/* 3-COLUMN GRID — items-stretch so all columns match height */}
        <div
          className="grid gap-5 mb-5 items-stretch"
          style={{ gridTemplateColumns: "175px 1fr 290px" }}
        >

          {/* ── LEFT: Logos ── */}
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center gap-4">
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772696794/iau_heajcc.png"
              alt="IAU Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-[10px] text-gray-400 text-center">In collaboration with</p>
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772696795/unesco_u3r2ly.png"
              alt="UNESCO Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* ── CENTER: Map ── */}
          <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
            <h1 className="text-center text-[#0097c4] text-[28px] font-extrabold tracking-wide mb-1">
              IAU WHED
            </h1>
            <p className="text-center text-gray-800 text-[15px] font-semibold mb-1">
              The world of higher education at your fingertips
            </p>
            <p className="text-center text-gray-500 text-xs leading-relaxed mb-4">
              The unique database providing{" "}
              <strong className="text-[#0097c4] italic">authoritative information</strong>{" "}
              on higher education systems,<br />credentials and institutions worldwide
            </p>

            <div className="relative mb-3">
              <select
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#00b4d8] appearance-none"
              >
                <option value="">Choose a country</option>
                <option>Canada</option>
                <option>United States</option>
                <option>Germany</option>
                <option>France</option>
                <option>India</option>
                <option>China</option>
                <option>Brazil</option>
                <option>Australia</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
            </div>

            {/* Map grows to fill remaining height */}
            <div className="rounded-lg overflow-hidden border border-gray-100 flex-1">
              <WorldMap onCountryClick={handleCountryClick} />
            </div>
          </div>

          {/* ── RIGHT: Search — full height, space-between to fill ── */}
          <div className="flex flex-col gap-4 h-full">

            {/* Quick Search */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#1a3a5c] text-white px-4 py-3 font-bold text-sm tracking-wide">
                HEI Quick search
              </div>
              <div className="p-4 flex flex-col gap-3">
                <p className="text-xs text-[#0097c4] font-medium">
                  Choose a country and/or enter a keyword
                </p>
                <div className="relative">
                  <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-[#00b4d8] appearance-none">
                    <option>All Countries</option>
                    <option>Canada</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>India</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter HEI or field of study keyword(s)"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00b4d8]"
                />
                <input
                  type="text"
                  placeholder="Enter IAU Global WHED ID"
                  value={searchWhedId}
                  onChange={(e) => setSearchWhedId(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00b4d8]"
                />
                <div className="flex gap-5 text-xs text-gray-600">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="mf" value="members" checked={memberFilter === "members"} onChange={() => setMemberFilter("members")} className="accent-[#0097c4]" />
                    Only IAU members
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="mf" value="all" checked={memberFilter === "all"} onChange={() => setMemberFilter("all")} className="accent-[#0097c4]" />
                    All institutions
                  </label>
                </div>
                <button className="w-full bg-[#00b4d8] hover:bg-[#0097c4] active:bg-[#007fa3] text-white font-bold py-2.5 rounded-lg text-sm transition-colors tracking-wide">
                  Search
                </button>
              </div>
            </div>

            {/* Advanced Search */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#1a3a5c] text-white px-4 py-3 font-bold text-sm tracking-wide">
                HEI Advanced search
              </div>
              <div className="p-4 text-xs text-gray-500 leading-relaxed">
                Please log in for advanced access, or contact IAU at{" "}
                <a href="mailto:centre@iau.global" className="text-[#0097c4] hover:underline">
                  centre@iau.global
                </a>{" "}
                to get access to MyWhed
              </div>
            </div>

            {/* Member links — flex-1 to fill remaining height */}
            <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2.5 flex-1 justify-center">
              <a href="#" className="text-[#0097c4] text-xs font-semibold hover:underline leading-snug">
                List of IAU Members Organizations
              </a>
              <a href="#" className="text-[#0097c4] text-xs font-semibold hover:underline leading-snug">
                Discover the special WHED features for IAU Members
              </a>
            </div>

          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { value: "190", label: "Countries Connected" },
            { value: "600+", label: "IAU Members" },
            { value: "21,500", label: "Total Institutions" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl py-8 px-5 shadow-sm text-center">
              <p className="text-5xl font-black text-[#1a3a5c] tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomePage;