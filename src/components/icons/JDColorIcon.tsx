"use client";
import { createIcon } from "@chakra-ui/react";
import { JDShared } from "./shared/JDShared";

export const JDColorIcon = createIcon({
  displayName: "JDColor",
  viewBox: "0 0 100 100",
  path: (
    <>
      <defs>
        <linearGradient
          id="blue-yellow-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#007BFF" />
          <stop offset="50%" stopColor="#00CFFF" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
      <g fill="url(#blue-yellow-gradient)">{JDShared}</g>
    </>
  ),
});
