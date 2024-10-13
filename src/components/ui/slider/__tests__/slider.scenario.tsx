import { Slider } from "..";

export function Scenario({ ...props }) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
      {...props}
    />
  );
}
