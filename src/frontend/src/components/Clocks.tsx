import React, { useState } from "react"; // , useId
import WatcherFC from "./Watcher/index.tsx";
import Ind from "../services/getId.ts";
// import Times from "../services/time-zone.ts";
import FormFC from "./Forms/index.tsx";
// let listing = [] as any[]; /* Один из вариантов куда кидали часы */

/* Конечный код где и происходит сборка + все действия */
export default function ClocksFC(): React.JSX.Element | undefined {
  // const mapClock = new Map();
  const cityId = new Ind();
  // const ind = new Ind();
  const x = new Date();
  let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
  console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);
  const [clocks, setClocks] = useState<Map<string, { offset: string, name: string }>>(new Map()); /* Один из вариантов куда кидали часы */

  function handler(e: any): void {
    const patterncitys = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
    const re = new RegExp(patterncitys);

    const patternTimizone = /[\+-]?[0-9]{1,2}$/; /* Условия для проверки UTC */
    const reTimeZone = new RegExp(patternTimizone, "i");

    e.preventDefault();
    const event = (e as React.FormEvent<HTMLFormElement>); /* получаем данные из формы */

    /* Received datas */
    const formSourceData = new FormData(event.target as HTMLFormElement);
    const name = (formSourceData.get("citys") as string).slice(0);
    let offset = (formSourceData.get("timzone") as string).slice(0);

    /* Проверка шаблона из названий городов */
    if (re.test(name)) {
      console.log("[Input name Value]: true", name);
    } else {
      console.log("[Input name Value]: false", name);
      return;
    }

    /* Проверка шаблона из временной зоны */
    offset = offset.includes("-") ? offset : ("+" + offset);
    if (reTimeZone.test(offset) && ((typeof offset).includes("string"))) {
      console.log("[Input Timizone Value UTC]: ", offset);

      const indNew = cityId.indAdd();
      if ((indNew !== null) && (indNew !== undefined)) {
        console.log("[Timizone will add UTC]: ", offset);
        setClocks(clocks.set(indNew, { offset: offset, name: name })); /* не задействована в последствии */
      }
    } else {
      console.log("[Input Timizone Value]: false", offset);
    }
  }
  if (Array.from(clocks.entries()).length > 0) {
    return (
      <>
        <FormFC handler={handler} />
        <div>
          {Array.from(clocks.entries()).map((id: any, data: any) => (
            <div key={id} data-test="test" data-name={data.name}>
              <WatcherFC utc={data.offset} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <FormFC handler={handler} />
        <div>

          <div data-test="test">
            <WatcherFC utc={currentTimeZoneOffsetInHours} />
          </div>

        </div>
      </>
    );
  }
  // }
}
