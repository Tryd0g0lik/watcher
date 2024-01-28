import React, { useState } from "react"; // , useId
import WatcherFC from "./Watcher/index.tsx";
import Ind from "../services/getId.ts";
// import Times from "../services/time-zone.ts";
import FormFC from "./Forms/index.tsx";
let listing = [] as any[]; /* Один из вариантов куда кидали часы */

/* Конечный код где и происходит сборка + все действия */
export default function ClocksFC(): React.JSX.Element | undefined {
	const mapClock = new Map(); /* Один из многих, но рабочих вариантов некого такого хаба куда
   скидываем часы в том виде в октором они должны выглядить. От сбда и публикуем.
   - в данной локации получем 1-у визуализацию часов в местном UTC.
   Добавить часы не получается.
   - в локации на строке 8 и выше происходит дублирование. Зато имеем возможность добавлять
   часы с разными UTC.
   */
	const cityId = new Ind();
	const ind = new Ind();
	const x = new Date();
	let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
	console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);

  const [watch, setWatch] = useState(<WatcherFC utc={currentTimeZoneOffsetInHours} />);
  listing.push(watch);
	mapClock.set(cityId.indAdd(), watch);
	const [clocks, setClocks] = useState(listing); /* Один из вариантов куда кидали часы */

	function handler(e: any): void {
    const patterncitys = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
    const re = new RegExp(patterncitys);

		const patternTimizone = /[\+-]?[0-9]{1,2}$/; /* Условия для проверки UTC */
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
			console.log("[Input Timizone Value UTC]: ", timezone);

      setWatch(<WatcherFC utc={timezone} />);
			listing.push(watch); /* не задействована в последствии */
			mapClock.set(cityId.indAdd(), watch);
			setClocks(() => listing); /* не задействована в последствии */
    } else {
      console.log("[Input Timizone Value]: false", timezone);
    }
  }
  // if (uniqueInd !== null && uniqueInd !== undefined) {
	const mapKeys = Array.from(mapClock.keys());

  return (
    <>
      <FormFC handler={handler} />
      <div>
				{mapKeys.map((item: any) => (
        <div key={ind.indAdd() + String(listing.length)}>
						{mapClock.get(item)}
          </div>
        ))}
      </div>
    </>
  );
  // }
}
