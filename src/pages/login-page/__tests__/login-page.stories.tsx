import type { StoryDefault } from "@ladle/react";

import { Scenario as LoginPageDefault } from "./login-page.scenario";

export default {
  title: "pages/login-page",
} satisfies StoryDefault;

export const LoginPage = () => <LoginPageDefault />;
