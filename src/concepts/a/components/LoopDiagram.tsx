import { legacyModelLayers as modelLayers } from "../../../content/legacyModel";

/**
 * Static quiet loop diagram — four nodes, one highlighted return arrow from
 * Insight back to Experience. Deliberately not animated in this concept;
 * Direction B/C carry the moving version of this idea.
 */
export function LoopDiagram() {
  const size = 168;
  const radius = 62;
  const center = size / 2;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-labelledby="a-loop-title a-loop-desc"
      className="a-loop"
    >
      <title id="a-loop-title">The Experience, Platform, Data and Insight loop</title>
      <desc id="a-loop-desc">
        Four connected stages arranged in a circle: Experience, Platform, Data and Insight, with
        Insight feeding back into Experience.
      </desc>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="var(--a-border)"
        strokeWidth={1}
        strokeDasharray="2 4"
      />
      {modelLayers.map((layer, i) => {
        const angle = (Math.PI * 2 * i) / modelLayers.length - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        const isInsight = layer.name === "Insight";
        return (
          <g key={layer.name}>
            <circle
              cx={x}
              cy={y}
              r={isInsight ? 7 : 5}
              fill={isInsight ? "var(--a-accent)" : "var(--a-text)"}
            />
          </g>
        );
      })}
    </svg>
  );
}
