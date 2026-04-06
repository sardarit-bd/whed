
const countryData = {
  Russia: {
    public: 430,
    private: 100,
  },
  Bangladesh: {
    public: 200,
    private: 50,
  },
};

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {

  const [tooltip, setTooltip] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div style={{ position: "relative" }}>

      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {

              const name = geo.properties.NAME;
              const data = countryData[name];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}

                  onMouseEnter={(e) => {
                    if (!data) return;

                    setTooltip({
                      name,
                      public: data.public,
                      private: data.private,
                    });
                  }}

                  onMouseMove={(e) => {
                    setPosition({
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}

                  onMouseLeave={() => {
                    setTooltip(null);
                  }}

                  style={{
                    default: { fill: "#00B4D8", outline: "none" },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: position.x + 15,
            top: position.y + 15,
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            overflow: "hidden",
            width: "160px",
            fontSize: "14px"
          }}
        >
          <div
            style={{
              background: "#0b3d5c",
              color: "#fff",
              padding: "6px 10px",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {tooltip.name}
          </div>

          <div style={{ padding: "8px 10px" }}>
            <div>Public: {tooltip.public}</div>
            <div>Private: {tooltip.private}</div>
            <hr />
            <div>
              Total: {tooltip.public + tooltip.private}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}