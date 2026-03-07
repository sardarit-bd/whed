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
        0.35 +
        (0.65 * (context.countryValue - context.minValue)) /
        (maxValue - context.minValue);

    return {
        fill: "#00b4d8",
        fillOpacity: isNaN(opacityLevel) ? 0.15 : Math.min(opacityLevel, 1),
        stroke: "#ffffff",
        strokeWidth: 0.6,
        cursor: "pointer",
    };
};

const WorldMapComponent = ({ onCountryClick }) => {
    const [popup, setPopup] = useState(null);
    const [zoom, setZoom] = useState(1);

    const zoomIn = () => {
        setZoom((z) => Math.min(z + 0.3, 3));
    };

    const zoomOut = () => {
        setZoom((z) => Math.max(z - 0.3, 1));
    };

    const handleClick = (e, countryCode, countryName) => {
        const details = detailsMap[countryCode];
        setPopup(details ? { ...details } : null);
        if (details) onCountryClick?.(countryName, details);
    };

    return (
        <div className="relative w-full overflow-hidden">

            {/* Zoom buttons */}
            <div className="absolute top-2 left-2 z-10 flex flex-col">
                <button
                    onClick={zoomIn}
                    className="w-7 h-7 bg-white border text-sm font-bold shadow"
                >
                    +
                </button>
                <button
                    onClick={zoomOut}
                    className="w-7 h-7 bg-white border text-sm font-bold shadow"
                >
                    −
                </button>
            </div>

            {/* Map container */}
            <div
                className="transition-transform duration-300 origin-center"
                style={{ transform: `scale(${zoom})` }}
            >
                <WorldMap
                    richInteraction
                    backgroundColor="#ffffff"
                    borderColor="#ffffff"
                    color="#097f9c"
                    tooltipBgColor="#1a589e"
                    valueSuffix=" universities"
                    size="responsive"
                    data={universitiesData}
                    styleFunction={stylingFunction}
                    onClickFunction={handleClick}
                />
            </div>

            {/* Popup */}
            {popup && (
                <div
                    className="absolute z-20 bg-white border border-[#00b4d8] rounded shadow-lg text-center"
                    style={{ top: "30%", left: "22%", minWidth: 130 }}
                >
                    <div className="bg-[#00b4d8] text-white text-xs font-bold px-4 py-1.5 rounded-t">
                        {popup.name}
                    </div>

                    <div className="px-4 py-2 text-xs text-gray-700">
                        <p>Public = <b>{popup.public}</b></p>
                        <p>Private = <b>{popup.private}</b></p>
                        <p>Total = <b>{popup.total}</b></p>
                    </div>

                    <button
                        onClick={() => setPopup(null)}
                        className="absolute top-1 right-2 text-white text-xs font-bold"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    );
};

export default memo(WorldMapComponent);