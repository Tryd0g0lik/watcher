import React from "react";
import FormFC from "./components/Forms/index.tsx";
import WatcherFC from "./components/Watchers/index.tsx";

export default function AppFC(): React.JSX.Element {
  return (
    <>
      <FormFC />
      <WatcherFC />
    </>
  );
}
