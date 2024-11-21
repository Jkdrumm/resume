"use client";
import { createIcon } from "@chakra-ui/react";

export const ReactColorIcon = createIcon({
  displayName: "React",
  viewBox: "-10.5 -9.45 21 18.9",
  path: (
    <>
      <circle cx="0" cy="0" r="2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5" />
        <ellipse rx="10" ry="4.5" transform="rotate(60)" />
        <ellipse rx="10" ry="4.5" transform="rotate(120)" />
      </g>
    </>
  ),
});
