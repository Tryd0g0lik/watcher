import React from "react";
import { type Sizes } from "../interfacies.ts";

export default function boxFC({ height, width }: Sizes): React.JSX.Element {
  return <canvas height={height} width={width} id='myCanvas' > </canvas>;
}
