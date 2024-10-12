import "../src/index.css";

import type { GlobalProvider } from "@ladle/react";
import React from "react";

export const Provider: GlobalProvider = ({
  children,
  // globalState,
  // storyMeta,
}) => <>{children}</>;
