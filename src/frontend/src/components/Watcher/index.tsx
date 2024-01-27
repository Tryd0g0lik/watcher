import React, { useEffect } from "react";
import "./Watcher.css";
import Times from "../../services/time-zone.ts";
interface UTC {
  utc: string
  root?: HTMLDivElement
}

export default function WatcherFC({ utc }: UTC): React.JSX.Element {
  let root: HTMLElement | null = null;
  // const []
  useEffect(() => {
    root = document.getElementById("root");
    if (root === null || root === undefined) return;
    const time = utc.length !== 0 ? new Times(utc) : new Times(utc);
    time.boxTime = root;
    time.timeZone();
  }, []);

  // debugger;

  // if ((root !== undefined) && (root !== null)) {
  //   time.boxTime = root;
  //   time.timeZone();
  // }
  return (
    <div className="watch">
      <span className="indicator"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
    </div>
  );
}
