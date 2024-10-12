import "../src/index.css";

import type { GlobalProvider } from "@ladle/react";
import React from "react";
import Toaster from "../src/components/ui/toast/toaster";

export const Provider: GlobalProvider = ({
  children,
  // globalState,
  // storyMeta,
}) => (
  <>
    {children}
    <Toaster />
  </>
);
