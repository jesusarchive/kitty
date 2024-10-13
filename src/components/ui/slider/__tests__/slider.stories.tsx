import type { StoryDefault } from "@ladle/react";

import type { SliderProps } from "..";
import { Scenario as SliderDefault } from "./slider.scenario";

export default {
  title: "components/ui/slider",
} satisfies StoryDefault<SliderProps>;

export const Slider = () => <SliderDefault />;
