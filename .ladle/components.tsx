import type { GlobalProvider } from "@ladle/react";
import React from "react";
import "../src/index.css";
import { ThemeProvider } from "../src/providers/theme-provider/theme-provider";

export const argTypes = {
  background: {
    control: { type: "background" },
    options: ["purple", "blue", "white", "pink"],
    defaultValue: "purple",
  },
};

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <h1>Theme: {globalState.theme}</h1>
    <h2>{JSON.stringify(storyMeta)}</h2>
    {children}
  </ThemeProvider>
);
