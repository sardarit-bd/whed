"use client";

import * as d3 from "d3";
import { useCallback, useEffect, useRef, useState } from "react";
import { feature } from "topojson-client";

const COUNTRY_COLOR = "#0081a0";
const COUNTRY_HOVER = "#1A8EC0";
const COUNTRY_ACTIVE = "#1275A0";
const STROKE_COLOR = "#FFFFFF";
const OCEAN_COLOR = "#FFFFFF";
const GEO_URL =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMembersMap({ handleCountryClick }) {
    const svgRef = useRef(null);
    const gRef = useRef(null);
    const zoomRef = useRef(null);
    const handleCountryClickRef = useRef(handleCountryClick);
    const [tooltip, setTooltip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dimensions, setDimensions] = useState({ width: 960, height: 500 });
    const containerRef = useRef(null);

    // সবসময় latest handleCountryClick ref-এ রাখো
    useEffect(() => {
        handleCountryClickRef.current = handleCountryClick;
    }, [handleCountryClick]);

    // Responsive dimensions
    useEffect(() => {
        const update = () => {
            if (containerRef.current) {
                const w = containerRef.current.clientWidth;
                const h = Math.max(300, Math.min(w * 0.55, 600));
                setDimensions({ width: w, height: h });
            }
        };
        update();
        const ro = new ResizeObserver(update);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    // Build map — শুধু dimensions বদলালে rebuild হবে
    useEffect(() => {
        const { width, height } = dimensions;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const projection = d3
            .geoMercator()
            .scale((width / 2 / Math.PI) * 0.85)
            .translate([width / 2, height / 1.6]);

        const path = d3.geoPath().projection(projection);

        const g = svg.append("g");
        gRef.current = g;

        // zoom — filter দিয়ে click event আলাদা রাখা হয়েছে
        const zoom = d3
            .zoom()
            .scaleExtent([1, 8])
            .translateExtent([
                [-width * 0.4, -height * 0.4],
                [width * 1.4, height * 1.4],
            ])
            .filter((event) => {
                // click event zoom-এ যাবে না, শুধু drag আর scroll যাবে
                if (event.type === "click") return false;
                return !event.ctrlKey && !event.button;
            })
            .on("zoom", (event) => {
                g.attr("transform", event.transform);
            });

        zoomRef.current = zoom;
        svg.call(zoom);

        // double click zoom বন্ধ করো
        svg.on("dblclick.zoom", null);

        setLoading(true);
        d3.json(GEO_URL)
            .then((world) => {
                const countries = feature(world, world.objects.countries);

                g.selectAll("path")
                    .data(countries.features)
                    .join("path")
                    .attr("d", path)
                    .attr("fill", COUNTRY_COLOR)
                    .attr("stroke", STROKE_COLOR)
                    .attr("stroke-width", 0.5)
                    .attr("cursor", "pointer")
                    .style("transition", "fill 0.15s ease")
                    .on("mouseenter", function (event, d) {
                        d3.select(this).attr("fill", COUNTRY_HOVER);
                        const name = d.properties?.name ?? "Unknown";
                        setTooltip({ name, x: event.clientX, y: event.clientY });
                    })
                    .on("click", function (event, d) {
                        event.stopPropagation();
                        d3.select(this).attr("fill", COUNTRY_HOVER);
                        const name = d.properties?.name ?? "Unknown";
                        setTooltip({ name, x: event.clientX, y: event.clientY });
                        // ref দিয়ে call — stale closure নেই
                        handleCountryClickRef.current?.(name);
                    })
                    .on("mousemove", function (event) {
                        setTooltip((prev) =>
                            prev ? { ...prev, x: event.clientX, y: event.clientY } : null
                        );
                    })
                    .on("mouseleave", function () {
                        d3.select(this).attr("fill", COUNTRY_COLOR);
                        setTooltip(null);
                    })
                    .on("mousedown", function () {
                        d3.select(this).attr("fill", COUNTRY_ACTIVE);
                    })
                    .on("mouseup", function () {
                        d3.select(this).attr("fill", COUNTRY_HOVER);
                    });

                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [dimensions]); // handleCountryClick নেই — ref pattern use করছি

    const handleZoomIn = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        d3.select(svgRef.current)
            .transition()
            .duration(300)
            .call(zoomRef.current.scaleBy, 1.5);
    }, []);

    const handleZoomOut = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        d3.select(svgRef.current)
            .transition()
            .duration(300)
            .call(zoomRef.current.scaleBy, 1 / 1.5);
    }, []);

    const handleReset = useCallback(() => {
        if (!svgRef.current || !zoomRef.current) return;
        d3.select(svgRef.current)
            .transition()
            .duration(400)
            .call(zoomRef.current.transform, d3.zoomIdentity);
    }, []);

    return (
        <div className="w-full bg-white select-none">

            {/* Map */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden"
                style={{ background: OCEAN_COLOR }}
            >
                {loading && (
                    <div
                        className="absolute inset-0 flex items-center justify-center z-10"
                        style={{ background: OCEAN_COLOR }}
                    >
                        <div className="w-8 h-8 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <svg
                    ref={svgRef}
                    width={dimensions.width}
                    height={dimensions.height}
                    style={{
                        display: "block",
                        width: "100%",
                        height: dimensions.height,
                        background: OCEAN_COLOR,
                        cursor: "grab",
                    }}
                />

                {/* Zoom Controls */}
                <div
                    className="absolute flex flex-col overflow-hidden"
                    style={{
                        bottom: 20,
                        right: 20,
                        border: "1px solid #bbb",
                        borderRadius: 4,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    }}
                >
                    <button
                        onClick={handleZoomIn}
                        className="flex items-center justify-center bg-[var(--secondary-color)] cursor-pointer text-white font-medium transition-colors"
                        style={{
                            width: 34,
                            height: 34,
                            fontSize: 22,
                            lineHeight: 1,
                            borderBottom: "1px solid #bbb",
                        }}
                        aria-label="Zoom in"
                    >
                        +
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="flex items-center justify-center bg-[var(--secondary-color)] cursor-pointer text-white font-medium transition-colors"
                        style={{ width: 34, height: 34, fontSize: 26, lineHeight: 1 }}
                        aria-label="Zoom out"
                    >
                        −
                    </button>
                </div>

                {/* Reset button */}
                <button
                    onClick={handleReset}
                    className="absolute top-3 left-3 bg-[var(--secondary-color)] text-white text-xs px-2 py-1 transition-colors cursor-pointer"
                    style={{
                        border: "1px solid #bbb",
                        borderRadius: 4,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                    }}
                    aria-label="Reset view"
                >
                    Reset
                </button>
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="fixed z-50 h-fit w-fit pointer-events-none bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-md shadow-lg"
                    style={{
                        left: tooltip.x + 14,
                        top: tooltip.y - 38,
                        border: "1px solid #ddd",
                        borderRadius: 4,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                        whiteSpace: "nowrap",
                    }}
                >
                    <h2 className="border-b border-gray-200 pb-0.5">{tooltip.name}</h2>
                    <h2 className="pt-0.5">Public = 132</h2>
                    <h2 className="pt-0.5 pb-0.5">Private = 26</h2>
                    <h2 className="border-t border-gray-200 pt-0.5">Total = 148</h2>
                </div>
            )}
        </div>
    );
}