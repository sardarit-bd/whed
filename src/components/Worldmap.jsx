"use client";
import React, { memo, useState } from "react";
import { WorldMap } from "react-svg-worldmap";

const universitiesData = [
    { country: "CA", value: 148 },
    { country: "US", value: 250 },
    { country: "DE", value: 330 },
    { country: "FR", value: 240 },
    { country: "BR", value: 205 },
    { country: "IN", value: 1550 },
    { country: "CN", value: 1600 },
    { country: "AU", value: 50 },
    { country: "GB", value: 310 },
    { country: "JP", value: 780 },
    { country: "RU", value: 530 },
    { country: "ZA", value: 120 },
    { country: "MX", value: 190 },
    { country: "AR", value: 130 },
    { country: "KR", value: 420 },
    { country: "IT", value: 280 },
    { country: "ES", value: 260 },
    { country: "PL", value: 140 },
    { country: "NG", value: 90 },
    { country: "EG", value: 75 },
    { country: "TR", value: 210 },
    { country: "ID", value: 310 },
    { country: "PK", value: 180 },
    { country: "BD", value: 150 },
];

const detailsMap = {
    CA: { name: "Canada", public: 122, private: 26, total: 148 },
    US: { name: "United States", public: 200, private: 50, total: 250 },
    DE: { name: "Germany", public: 250, private: 80, total: 330 },
    FR: { name: "France", public: 180, private: 60, total: 240 },
    BR: { name: "Brazil", public: 110, private: 95, total: 205 },
    IN: { name: "India", public: 900, private: 650, total: 1550 },
    CN: { name: "China", public: 1200, private: 400, total: 1600 },
    AU: { name: "Australia", public: 40, private: 10, total: 50 },
    GB: { name: "United Kingdom", public: 130, private: 180, total: 310 },
    JP: { name: "Japan", public: 200, private: 580, total: 780 },
    RU: { name: "Russia", public: 430, private: 100, total: 530 },
    ZA: { name: "South Africa", public: 26, private: 94, total: 120 },
    MX: { name: "Mexico", public: 120, private: 70, total: 190 },
    AR: { name: "Argentina", public: 60, private: 70, total: 130 },
    KR: { name: "South Korea", public: 50, private: 370, total: 420 },
    IT: { name: "Italy", public: 100, private: 180, total: 280 },
    ES: { name: "Spain", public: 83, private: 177, total: 260 },
    PL: { name: "Poland", public: 70, private: 70, total: 140 },
    NG: { name: "Nigeria", public: 50, private: 40, total: 90 },
    EG: { name: "Egypt", public: 30, private: 45, total: 75 },
    TR: { name: "Turkey", public: 130, private: 80, total: 210 },
    ID: { name: "Indonesia", public: 100, private: 210, total: 310 },
    PK: { name: "Pakistan", public: 80, private: 100, total: 180 },
    BD: { name: "Bangladesh", public: 50, private: 100, total: 150 },
};

const stylingFunction = (context) => {
    const maxValue = 1600;
    const opacityLevel =
        0.35 + (0.65 * (context.countryValue - context.minValue)) / (maxValue - context.minValue);
    return {
        fill: "#00b4d8",
        fillOpacity: isNaN(opacityLevel) ? 0.15 : Math.min(opacityLevel, 1),
        stroke: "#ffffff",
        strokeWidth: 0.6,
        strokeOpacity: 1,
        cursor: "pointer",
    };
};

const WorldMapComponent = ({ onCountryClick }) => {
    const [popup, setPopup] = useState(null);

    const handleClick = (e, countryCode, countryName, countryValue) => {
        const details = detailsMap[countryCode];
        setPopup(details ? { ...details } : null);
        if (details) onCountryClick?.(countryName, details);
    };

    return (
        <div className="relative w-full">
            {/* Zoom buttons — decorative, matching screenshot */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-0.5">
                <button className="w-6 h-6 bg-white border border-gray-300 text-gray-600 text-sm font-bold flex items-center justify-center rounded-sm shadow hover:bg-gray-50">+</button>
                <button className="w-6 h-6 bg-white border border-gray-300 text-gray-600 text-sm font-bold flex items-center justify-center rounded-sm shadow hover:bg-gray-50">−</button>
            </div>

            {/* Map */}
            <div className="w-full">
                <WorldMap
                    richInteraction
                    backgroundColor="#ffffff"
                    borderColor="#ffffff"
                    color="#097f9c"
                    tooltipBgColor="#ffffff"
                    valueSuffix=" universities"
                    valuePrefix=""
                    size="responsive"
                    data={universitiesData}
                    styleFunction={stylingFunction}
                    onClickFunction={handleClick}
                />
            </div>

            {/* Popup card — positioned like in the screenshot (center-left on map) */}
            {popup && (
                <div
                    className="absolute z-20 bg-white border border-[#00b4d8] rounded shadow-lg text-center"
                    style={{ top: "30%", left: "22%", minWidth: 130 }}
                >
                    {/* Teal header */}
                    <div className="bg-[#00b4d8] text-white text-xs font-bold px-4 py-1.5 rounded-t">
                        {popup.name}
                    </div>
                    {/* Stats */}
                    <div className="px-4 py-2 text-xs text-gray-700 space-y-0.5">
                        <p>Public = <b>{popup.public}</b></p>
                        <p>Private = <b>{popup.private}</b></p>
                        <p>Total = <b>{popup.total}</b></p>
                    </div>
                    {/* Close */}
                    <button
                        onClick={() => setPopup(null)}
                        className="absolute top-0.5 right-1.5 text-white text-xs font-bold leading-none hover:opacity-70"
                    >×</button>
                </div>
            )}
        </div>
    );
};

export default memo(WorldMapComponent);