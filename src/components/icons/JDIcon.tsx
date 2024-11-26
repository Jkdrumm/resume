"use client";
import { createIcon } from "@chakra-ui/react";
import { JDShared } from "./shared/JDShared";

export const JDIcon = createIcon({
  displayName: "JD",
  viewBox: "0 0 100 100",
  path: <g fill="currentColor">{JDShared}</g>,
});
