import type { StoryDefault } from "@ladle/react";

import type { PaginationProps } from "..";
import { Scenario as PaginationDefault } from "./pagination.scenario";

export default {
  title: "components/ui/pagination",
} satisfies StoryDefault<PaginationProps>;

export const Pagination = () => <PaginationDefault />;
