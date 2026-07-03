"use client";

import * as React from "react";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Temporary workaround for React 19 script tag error with next-themes
  // Since dark mode is hidden/off for now, we just pass children.
  return <>{children}</>;
}

