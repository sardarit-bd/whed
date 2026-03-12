"use client";
import WorldMap from "@/app/react-svg-worldmap/dist";
import React, { memo, useState, useRef, useEffect } from "react";


export const universitiesData = [
  { country: "CA", name: "Canada", value: 148 },
  { country: "US", name: "United States", value: 250 },
  { country: "DE", name: "Germany", value: 330 },
  { country: "FR", name: "France", value: 240 },
  { country: "BR", name: "Brazil", value: 205 },
  { country: "IN", name: "India", value: 1550 },
  { country: "CN", name: "China", value: 1600 },
  { country: "AU", name: "Australia", value: 50 },
  { country: "GB", name: "United Kingdom", value: 310 },
  { country: "JP", name: "Japan", value: 780 },
  { country: "RU", name: "Russia", value: 530 },
  { country: "ZA", name: "South Africa", value: 120 },
  { country: "MX", name: "Mexico", value: 190 },
  { country: "AR", name: "Argentina", value: 130 },
  { country: "KR", name: "South Korea", value: 420 },
  { country: "IT", name: "Italy", value: 280 },
  { country: "ES", name: "Spain", value: 260 },
  { country: "PL", name: "Poland", value: 140 },
  { country: "NG", name: "Nigeria", value: 90 },
  { country: "EG", name: "Egypt", value: 75 },
  { country: "TR", name: "Turkey", value: 210 },
  { country: "ID", name: "Indonesia", value: 310 },
  { country: "PK", name: "Pakistan", value: 180 },
  { country: "BD", name: "Bangladesh", value: 150 },

  { country: "SA", name: "Saudi Arabia", value: 95 },
  { country: "AE", name: "United Arab Emirates", value: 60 },
  { country: "TH", name: "Thailand", value: 160 },
  { country: "MY", name: "Malaysia", value: 120 },
  { country: "SG", name: "Singapore", value: 35 },
  { country: "PH", name: "Philippines", value: 200 },
  { country: "VN", name: "Vietnam", value: 180 },
  { country: "IR", name: "Iran", value: 350 },
  { country: "IQ", name: "Iraq", value: 65 },
  { country: "UA", name: "Ukraine", value: 200 },
  { country: "NL", name: "Netherlands", value: 95 },
  { country: "BE", name: "Belgium", value: 85 },
  { country: "CH", name: "Switzerland", value: 60 },
  { country: "SE", name: "Sweden", value: 70 },
  { country: "NO", name: "Norway", value: 45 },
  { country: "DK", name: "Denmark", value: 40 },
  { country: "FI", name: "Finland", value: 50 },
  { country: "AT", name: "Austria", value: 65 },
  { country: "PT", name: "Portugal", value: 75 },
  { country: "GR", name: "Greece", value: 80 },
  { country: "CL", name: "Chile", value: 90 },
  { country: "CO", name: "Colombia", value: 120 },
  { country: "PE", name: "Peru", value: 110 },
  { country: "VE", name: "Venezuela", value: 70 },
  { country: "KE", name: "Kenya", value: 65 },
  { country: "GH", name: "Ghana", value: 55 },
  { country: "TZ", name: "Tanzania", value: 50 },
  { country: "UG", name: "Uganda", value: 40 },
  { country: "ET", name: "Ethiopia", value: 60 }
];
export const detailsMap = {
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

  SA: { name: "Saudi Arabia", public: 60, private: 35, total: 95 },
  AE: { name: "United Arab Emirates", public: 25, private: 35, total: 60 },
  TH: { name: "Thailand", public: 80, private: 80, total: 160 },
  MY: { name: "Malaysia", public: 50, private: 70, total: 120 },
  SG: { name: "Singapore", public: 15, private: 20, total: 35 },
  PH: { name: "Philippines", public: 90, private: 110, total: 200 },
  VN: { name: "Vietnam", public: 90, private: 90, total: 180 },
  IR: { name: "Iran", public: 200, private: 150, total: 350 },
  IQ: { name: "Iraq", public: 35, private: 30, total: 65 },
  UA: { name: "Ukraine", public: 120, private: 80, total: 200 },
  NL: { name: "Netherlands", public: 55, private: 40, total: 95 },
  BE: { name: "Belgium", public: 45, private: 40, total: 85 },
  CH: { name: "Switzerland", public: 30, private: 30, total: 60 },
  SE: { name: "Sweden", public: 40, private: 30, total: 70 },
  NO: { name: "Norway", public: 30, private: 15, total: 45 },
  DK: { name: "Denmark", public: 25, private: 15, total: 40 },
  FI: { name: "Finland", public: 30, private: 20, total: 50 },
  AT: { name: "Austria", public: 35, private: 30, total: 65 },
  PT: { name: "Portugal", public: 40, private: 35, total: 75 },
  GR: { name: "Greece", public: 45, private: 35, total: 80 },
  CL: { name: "Chile", public: 40, private: 50, total: 90 },
  CO: { name: "Colombia", public: 60, private: 60, total: 120 },
  PE: { name: "Peru", public: 50, private: 60, total: 110 },
  VE: { name: "Venezuela", public: 40, private: 30, total: 70 },
  KE: { name: "Kenya", public: 35, private: 30, total: 65 },
  GH: { name: "Ghana", public: 25, private: 30, total: 55 },
  TZ: { name: "Tanzania", public: 20, private: 30, total: 50 },
  UG: { name: "Uganda", public: 15, private: 25, total: 40 },
  ET: { name: "Ethiopia", public: 35, private: 25, total: 60 },
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        setMapDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.3, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.3, 1));

  const handleClick = (e) => {
    const details = detailsMap[e.countryCode];
    if (details) onCountryClick?.(e.countryName, details);
  };

  // Mouse drag
  const handleMouseDown = (e) => {
    e.stopPropagation();
    setDragStart({ x: e.clientX + 10, y: e.clientY });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    const maxX = mapDimensions.width * (zoom - 1) / 2;
    const maxY = mapDimensions.height * (zoom - 1) / 2;

    setPosition((prev) => ({
      x: Math.min(Math.max(prev.x + dx, -maxX), maxX),
      y: Math.min(Math.max(prev.y + dy, -maxY), maxY),
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  // Touch drag
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const dx = touch.clientX - dragStart.x;
    const dy = touch.clientY - dragStart.y;

    const maxX = mapDimensions.width * (zoom - 1) / 2;
    const maxY = mapDimensions.height * (zoom - 1) / 2;

    setPosition((prev) => ({
      x: Math.min(Math.max(prev.x + dx, -maxX), maxX),
      y: Math.min(Math.max(prev.y + dy, -maxY), maxY),
    }));

    setDragStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = (context, event) => {
    const details = detailsMap[context.countryCode];
    setPopup(details ? { ...details } : null);
    // if (details) onCountryClick?.(context.countryName, details);
  }
  const handleMouseLeave = (event) => {
    setPopup(null)
  }
  useEffect(() => {
    if (zoom === 1) {
      setPosition({
        x: 0,
        y: 0
      })
    }
  }, [zoom])
  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[400px] overflow-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      onMouseDownCapture={(e) => handleMouseDown(e)}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClickCapture={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {/* Zoom */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        <button
          onClick={zoomIn}
          className="w-8 h-8 bg-white border border-gray-300 text-lg font-bold shadow-md hover:bg-gray-50 transition-colors rounded"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="w-8 h-8 bg-white border border-gray-300 text-lg font-bold shadow-md hover:bg-gray-50 transition-colors rounded"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {/* Map */}
      <div
        className="w-full h-full transition-transform duration-100 ease-out"
        id="worldmap"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          transformOrigin: "center",
        }}
      >
        <WorldMap
          richInteraction
          backgroundColor="#ffffff"
          borderColor="#ffffff"
          color="#0081A0"
          tooltipBgColor="#1a589e"

          valueSuffix=" universities"
          size="responsive"
          data={universitiesData}
          styleFunction={stylingFunction}
          onClickFunction={(e) => handleClick(e)}
          onMouseEnter={(context, event) => handleMouseEnter(context, event)}
          onMouseLeave={(event) => handleMouseLeave(event)}
        />
      </div>

      {/* Popup */}
      {popup && (
        <div
          className="absolute z-20 min-w-[80px] max-w-[150px] bg-white border border-[var(--secondary-color)] rounded-lg shadow-xl text-center"
          style={{
            top: "0%",
            right: "0%",
          }}
          onMouseEnter={(e) => handleMouseEnter(popup, e)}
        >
          <div className="bg-[var(--secondary-color)] text-white text-sm font-semibold px-4 py-2 rounded-t-lg">
            {popup.name}
          </div>
          <div className="px-4 py-3 text-sm text-gray-700 space-y-1">
            <p className="flex justify-between">
              <span>Public:</span>
              <span className="font-semibold">{popup.public}</span>
            </p>
            <p className="flex justify-between">
              <span>Private:</span>
              <span className="font-semibold">{popup.private}</span>
            </p>
            <p className="flex justify-between border-t pt-1 mt-1">
              <span>Total:</span>
              <span className="font-semibold">{popup.total}</span>
            </p>
          </div>
          {/* <button
            onClick={() => setPopup(null)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-[var(--secondary-color)] rounded-full text-[var(--secondary-color)] text-sm font-bold hover:bg-[var(--secondary-color)] hover:text-white transition-colors shadow-md"
          >
            ×
          </button> */}
        </div>
      )}
    </div>
  );
};

export default memo(WorldMapComponent);