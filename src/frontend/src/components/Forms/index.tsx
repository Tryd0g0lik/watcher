import React, { useState, useEffect } from "react"; // , useId
import InputFC from "./Inputs.tsx";
import Times from "../../services/time-zone.ts";
// import citysHendler from "./handlerces/citys-handler/index.tsx";
import WatcherFC from "../Watcher/index.tsx";
let tzoneForStart = "0";
const map = {};

export default function FormFC(): React.JSX.Element {
  const [city, seTcity] = useState("null");
  const [tzone, setTimezone] = useState(tzoneForStart);
  const [watch, setWatch] = useState(<WatcherFC />);
  // const [clocks, setClocks] = useState(map);

  useEffect(() => {
    const root = document.getElementById("root");
    setWatch(<WatcherFC />);
    if (root === null) return;
    console.log("[useEffect TZONE]: ", tzone);
    const keyCities = Object.keys(map);
    if (!keyCities.includes(city)) {
      const timeZone = new Times(tzone);
      timeZone.boxTime = root;
      timeZone.timeZone();
      console.log("[useEffect return BEFORE]: ", tzone);

      console.log("[useEffect MAP]: map's data is", city, tzone, watch);
      // map.city = { tzone: watch }; // Key: city. Value: {utc: < html-component the clock >}
      // setClocks(map);
    } else {
      console.log("[useEffect MAP]: map has a city", city);
    }

    return () => {
      console.log("[useEffect return]: ", tzone);
    };
  }, [city, tzone]);

  function handler(e: any): void {
    const patterncitys = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
    const re = new RegExp(patterncitys);

    const patternTimizone = /(^[^(%_ \$ А-Яа-яA-Za-z])[\+-]?[0-9]{1, 2}$/;
    const reTimeZone = new RegExp(patternTimizone, "i");

    e.preventDefault();
    const event = (e as React.FormEvent<HTMLFormElement>); /* получаем данные из формы */
    console.log("[EventForm]; ", event);

    /* Received datas */
    const formSourceData = new FormData(event.target as HTMLFormElement);

    const citys = (formSourceData.get("citys") as string).slice(0);
    let timezone = (formSourceData.get("timzone") as string).slice(0);
    console.log(`[Event input-cityS]: ${citys}`);
    console.log(`[Event input-TIMZONE]: ${timezone}`);

    /* Проверка шаблона из названий городов */
    if (re.test(citys)) {
      console.log("[Input citys Value]: true");
      seTcity(citys);
    } else {
      console.log("[Input citys Value]: false");
      return;
    }

    /* Проверка шаблона из временной зоны */
    timezone = "-".includes(timezone) ? timezone : ("+" + timezone);
    if (reTimeZone.test(timezone)) {
      console.log("[Input Timizone Value]: true");
      tzoneForStart = timezone;
      setTimezone(timezone);
    } else {
      console.log("[Input Timizone Value]: false");
    }
  }
  console.log("[tzone DOWN]: ", tzone);
  console.log("[clocks map DOWN]: ", map);
  console.log("[watch DOWN]: ", watch);
  // const keyCities = Object.keys(map);
  // if (keyCities.length === 0) {
  return (
    <>
      <form onSubmit={handler}>
        <InputFC htmlfor="citys" type="text" ind="citys" name="citys" placeholder='Название "Анкара"' />
        <InputFC htmlfor="timezone" type="number" ind="timezone" name="timzone" placeholder='Временная зона "+3"' />
        <button type="submit">Добавить</button>
      </form>
      <div>
        {watch}
      </div>
    </>
  );
}
