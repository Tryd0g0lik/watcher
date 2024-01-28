import React, { useEffect } from "react";
import "./Watcher.css";
import Times from "../../services/time-zone.ts";
import Ind from "../../services/getId.ts";
interface UTC {
  utc: string
  root?: HTMLDivElement
}

export default function WatcherFC({ utc }: UTC): React.JSX.Element {
  const ind = new Ind();
  const useInd = ind.indAdd();
  let root: HTMLElement | null = null;
  const time = new Times(utc);
  console.log("[WatcherFC ]: UTC Times", utc);
  // const []
  useEffect(() => {
    root = document.getElementById("root");
    if (root === null || root === undefined) return;
    const subroot = root.querySelector(`div[data-name="${useInd}"`);
    if (subroot === null || subroot === undefined) return;

    time.boxTime = subroot;
    time.timeZone();
    console.log("[WatcherFC useEffect]: UTC 0", utc);
    return () => { };
  }, []);
  console.log("[WatcherFC ]: UTC 1", utc);

  return (
    <div className="watch" data-name={useInd}>
      <span className="indicator"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>
    </div>
  );
}
