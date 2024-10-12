import "../src/index.css";

import type { GlobalProvider } from "@ladle/react";
import React from "react";

export const argTypes = {
  background: {
    control: { type: "background" },
    options: ["purple", "blue", "white", "pink"],
    defaultValue: "white",
  },
};

export const Provider: GlobalProvider = ({
  children,
  // globalState,
  // storyMeta,
}) => <>{children}</>;
