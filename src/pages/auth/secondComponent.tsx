import React, { memo } from "react";

interface Props {
  mass: string[];
}
export const SecondComponent = memo(({ mass }: Props) => {
  console.log("Second Component Rerendered");

  return (
    <div>
      Second Component
      {mass}
    </div>
  );
});
