import React, { useState, useEffect, useId } from "react"; // , useId
import WatcherFC from "./Watcher/index.tsx";
import Times from "../services/time-zone.ts";
import FormFC from "./Forms/index.tsx";

const x = new Date();
let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);
const listing: any[] = [];

export default function ClocksFC(): React.JSX.Element {
  // const [city, setCity] = useState();
  const [utc, setUtc] = useState(currentTimeZoneOffsetInHours);
  const [watch, setWatch] = useState(<WatcherFC />);
  listing.push(watch);
  const [clocks, setClocks] = useState(listing);
  useEffect(() => {
    const time = utc.length !== 0 ? new Times(utc) : new Times(currentTimeZoneOffsetInHours);
    const root = document.getElementById("root");
    if (root === null || root === undefined) return;
    time.boxTime = root;
    time.timeZone();

    return () => {

    };
  });
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

    setWatch(<WatcherFC />);
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
  if (clocks.length <= 1) {
    return (
      <>
        <FormFC handler={handler} />

        <div>
          {clocks[0]}
        </div>
      </>
    );
  } else {
    return (
      <>
        <FormFC handler={handler} />
        <div>
          {clocks.map((item: any) => (
            <div key={useId()}>
              {item}
            </div>
          ))}
        </div>
      </>
    );
  }
}
