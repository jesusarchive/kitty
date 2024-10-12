import React from "react";

import Input from "..";

export const Scenario = () => {
  const [value, setValue] = React.useState("");

  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};
