"use client";
import { createIcon } from "@chakra-ui/react";

export const NextColorIcon = createIcon({
  displayName: "Next.JS",
  viewBox: "0 0 100 100",
  path: (
    <>
      <defs>
        <linearGradient
          id="next-icon-b"
          x1="60.5556"
          y1="64.7222"
          x2="80.2778"
          y2="89.1667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="next-icon-c"
          x1="67.2222"
          y1="30"
          x2="67.1106"
          y2="59.3751"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <mask
        id="next-icon-a"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <circle cx="50" cy="50" r="50" fill="black" fillOpacity="1" />
      </mask>
      <g mask="url(#next-icon-a)">
        <circle
          cx="50"
          cy="50"
          r="48.3333"
          fill="black"
          stroke="white"
          fillOpacity="1"
          strokeOpacity="1"
          strokeWidth="3.33333"
        />
        <path
          d="M83.06 87.5113L38.4122 30H30V69.9833H36.7298V38.5464L77.7773 91.5806C79.6293 90.3409 81.394 88.9808 83.06 87.5113Z"
          fill="url(#next-icon-b)"
        />
        <rect
          x="63.8889"
          y="30"
          width="6.66667"
          height="40"
          fill="url(#next-icon-c)"
        />
      </g>
    </>
  ),
});
