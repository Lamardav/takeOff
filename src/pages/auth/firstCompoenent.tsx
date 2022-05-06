import React, { memo } from "react";

interface Props {
  isAuth?: boolean;
  mass: string[];
}
export const FirstCompoenent = memo(({ isAuth, mass }: Props) => {
  console.log("First Component Rerendered");
  return (
    <div>
      First Component {isAuth ? "isAuth!!" : "not!!!"}
      {mass}
    </div>
  );
});
