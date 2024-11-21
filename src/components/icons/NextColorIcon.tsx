"use client";
import { createIcon } from "@chakra-ui/react";

export const NextColorIcon = createIcon({
  displayName: "Next.JS",
  viewBox: "0 0 100 100",
  path: (
    <>
      <mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <circle
          cx="50"
          cy="50"
          r="50"
          fill="black"
          style={{ fill: "black", fillOpacity: 1 }}
        />
      </mask>
      <g mask="url(#a)">
        <circle
          cx="50"
          cy="50"
          r="48.3333"
          fill="black"
          stroke="white"
          style={{
            fill: "black",
            fillOpacity: 1,
            stroke: "white",
            strokeOpacity: 1,
          }}
          strokeWidth="3.33333"
        />
        <path
          d="M83.06 87.5113L38.4122 30H30V69.9833H36.7298V38.5464L77.7773 91.5806C79.6293 90.3409 81.394 88.9808 83.06 87.5113Z"
          fill="url(#b)"
        />
        <rect x="63.8889" y="30" width="6.66667" height="40" fill="url(#c)" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="60.5556"
          y1="64.7222"
          x2="80.2778"
          y2="89.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="white"
            style={{ stopColor: "white", stopOpacity: 1 }}
          />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
            style={{ stopColor: "none", stopOpacity: 0 }}
          />
        </linearGradient>
        <linearGradient
          id="c"
          x1="67.2222"
          y1="30"
          x2="67.1106"
          y2="59.3751"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="white"
            style={{ stopColor: "white", stopOpacity: 1 }}
          />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
            style={{ stopColor: "none", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
    </>
  ),
});
