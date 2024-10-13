import type { StoryDefault } from "@ladle/react";

import type { BreadcrumbProps } from "..";
import { Scenario as BreadcrumbDefault } from "./breadcrumb.scenario";

export default {
  title: "components/ui/breadcrumb",
} satisfies StoryDefault<BreadcrumbProps>;

export const Breadcrumb = () => <BreadcrumbDefault />;
