"use client";
import WorldMap from "@/app/react-svg-worldmap/dist";
import React, { memo, useState, useRef, useEffect } from "react";
import detailsMap from "../data/MapData/detailsMap";
import universitiesData from "../data/MapData/universitiesData";




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
      className={`relative w-full h-full overflow-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
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