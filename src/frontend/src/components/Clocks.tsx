import React, { useState } from "react"; // , useId
import WatcherFC from "./Watcher/index.tsx";
import Ind from "../services/getId.ts";
// import Times from "../services/time-zone.ts";
import FormFC from "./Forms/index.tsx";

const x = new Date();
let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);

// let root: any = "";
export default function ClocksFC(): React.JSX.Element | undefined {
  let listing = [] as any[];
  const ind = new Ind();
  // let uniqueInd = ;

  const [watch, setWatch] = useState(<WatcherFC utc={currentTimeZoneOffsetInHours} />);
  listing.push(watch);
  const [clocks, setClocks] = useState(listing);

  function handler(e: any): void {
    // uniqueInd = ind.indAdd();
    const patterncitys = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
    const re = new RegExp(patterncitys);

    const patternTimizone = /[\+-]?[0-9]{1,2}$/;
    const reTimeZone = new RegExp(patternTimizone, "i");

    e.preventDefault();
    const event = (e as React.FormEvent<HTMLFormElement>); /* получаем данные из формы */

    /* Received datas */
    const formSourceData = new FormData(event.target as HTMLFormElement);
    const citys = (formSourceData.get("citys") as string).slice(0);
    let timezone = (formSourceData.get("timzone") as string).slice(0);

    /* Проверка шаблона из названий городов */
    if (re.test(citys)) {
      console.log("[Input citys Value]: true", citys);
    } else {
      console.log("[Input citys Value]: false", citys);
      return;
    }

    /* Проверка шаблона из временной зоны */
    timezone = timezone.includes("-") ? timezone : ("+" + timezone);
    if (reTimeZone.test(timezone)) {
      // setUtc(timezone);
      // console.log("[Input Timizone Value]: true", timezone, utc);

      setWatch(<WatcherFC utc={timezone} />);
      listing.push(watch);
      setClocks(listing);
    } else {
      console.log("[Input Timizone Value]: false", timezone);
    }
  }
  // if (uniqueInd !== null && uniqueInd !== undefined) {
  return (
    <>
      <FormFC handler={handler} />
      <div>
        {clocks.map((item: any) => (
        <div key={ind.indAdd() + String(listing.length)}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
  // }
}
