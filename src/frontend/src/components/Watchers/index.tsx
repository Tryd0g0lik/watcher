import React from "react";
import BoxFC from "./Box/index.tsx";
import clockFC from "./cLock/index.ts";

function WatchFC(): React.JSX.Element {
  return (
    <>
      Черновик по JavaScript.Работа с холстом:
      <div id='clock'>Тут будет текущее время</div>
    </>
  );
}

export default function WatcherFC(): React.JSX.Element {
  const canvasies = clockFC(BoxFC);
  canvasies();
  return (
    <WatchFC />
  );
}
