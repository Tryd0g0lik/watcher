import React, { useState, useId } from "react"; // , useId
import WatcherFC from "./Watcher/index.tsx";
// import Times from "../services/time-zone.ts";
import FormFC from "./Forms/index.tsx";

const x = new Date();
let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);
let listing: any[] = [];
// let root: any = "";
export default function ClocksFC(): React.JSX.Element {
  const uniqueInd = useId();
  // const [city, setCity] = useState();
  const [utc, setUtc] = useState(currentTimeZoneOffsetInHours);
  const [watch, setWatch] = useState(<WatcherFC utc={utc} />);
  // listing.push(watch);
  const [clocks, setClocks] = useState([watch]);
  // clocks.push(watch);
  console.log("[clock]: ", clocks);

  function handler(e: any): void {
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

    setWatch(<WatcherFC utc={utc} />);
    listing.push(watch);
    setClocks(listing);
    /* Проверка шаблона из названий городов */
    if (re.test(citys)) {
      console.log("[Input citys Value]: true", citys);
    } else {
      console.log("[Input citys Value]: false", citys);
      return;
    }

    /* Проверка шаблона из временной зоны */
    timezone = "-".includes(timezone) ? timezone : ("+" + timezone);
    if (reTimeZone.test(timezone)) {
      console.log("[Input Timizone Value]: true", timezone);
      setUtc(timezone);
    } else {
      console.log("[Input Timizone Value]: false", timezone);
    }
  }
  // if (clocks.length > 1) {
  return (
    <>
      <FormFC handler={handler} />
      <div>
        {listing.map((item: any) => (
          <div key={uniqueInd + listing.length}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
