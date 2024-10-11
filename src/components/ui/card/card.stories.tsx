import type { StoryDefault, Story } from "@ladle/react";

type Props = { label: string; test: string };

export default {
  title: "Test",
} satisfies StoryDefault<Props>;

export const Card: Story<Props> = ({ label, test }) => (
  <p>
    Label: {label}
    {test}
  </p>
);
Card.args = {
  label: "Hello",
  test: "test",
};
