import type { StoryDefault } from "@ladle/react";

import type { CarouselProps } from "..";
import { Scenario as CarouselDefault } from "./carousel.scenario";

export default {
  title: "components/ui/carousel",
} satisfies StoryDefault<CarouselProps>;

export const Carousel = () => <CarouselDefault />;
