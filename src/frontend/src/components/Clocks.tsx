import React, { useState } from "react";
import WatcherFC from "./Watcher/index.tsx";
import Ind from "../services/getId.ts";
import FormFC from "./Forms/index.tsx";
import CloseFC from "./Close.tsx";
/* Конечный код где и происходит сборка + все действия */
let newMap: Map<string, { offset: string, name: string }>;
export default function ClocksFC(): React.JSX.Element | undefined {
  const cityId = new Ind(); /* инжекс для сохранения джанных полученных из формы */

  // useEffect(() => {
  //   button = document.querySelector("button[aria-label='Close']");
  // });
  const x = new Date();
  let currentTimeZoneOffsetInHours = String(x.getTimezoneOffset() / 60 * -1);
  console.log("[cuttent UTC]: ", currentTimeZoneOffsetInHours);

  const [clocks, setClocks] = useState<Map<string, { offset: string, name: string }>>(new Map()); /*  куда кидали данные для часов */
  // let buffer: any = {};
  function handlerCLose(e: any): void {
    e.preventDefault();
    // if ((button === null) && (button === undefined)) return;
    const parrent = e.currentTarget as HTMLElement;
    const h2 = parrent.querySelector("h2");
    let nameForDelete: string = "";
    if ((h2?.textContent !== null) && (h2?.textContent !== undefined)) {
      nameForDelete = h2?.textContent.slice(0);
    }

    parrent?.remove();
    if ((nameForDelete.length > 0) && (clocks.has(nameForDelete))) {
      // buffer = clocks;

      clocks.delete(nameForDelete);
      console.log("[DELETE] newMap: ", newMap.entries());
      console.log("[DELETE] clocks: ", clocks.entries());
      if ((newMap !== null) && (newMap !== undefined)) {
        console.log(typeof newMap);
        console.log(newMap.has(nameForDelete));
        newMap.delete(nameForDelete);
        // newMap = buffer;
      }
    }
    console.log("[-----]: ", clocks);

    e.stopPropagation();
  }

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

    /* Проверка шаблона - названий городов */
    if (re.test(name)) {
      console.log("[Input name Value]: true", name);
    } else {
      console.log("[Input name Value]: false", name);
      return;
    }

    /* Проверка шаблона из временнОй зоны */

    offset = offset.includes("-") ? offset : ("+" + offset);
    if (reTimeZone.test(offset) && ((typeof offset).includes("string"))) {
      console.log("[Input Timizone Value UTC]: ", offset);

      const indNew = cityId.indAdd();
      if ((indNew !== null) && (indNew !== undefined)) {
        console.log("[Timizone will add UTC]: ", offset);
        clocks.set(name, { offset: offset, name: name });
        newMap = new Map(clocks);
        setClocks(newMap); /* добавили данные из формы */
        const root = document.querySelector("#root");
        if (root === null) return;
        const textCity = root.querySelector("#citys");
        const textTimezone = root.querySelector("#timezone");
        ((textCity as HTMLInputElement).value) = "";
        ((textTimezone as HTMLInputElement).value) = "";
      }
    } else {
      console.log("[Input Timizone Value]: false", offset);
    }
  }

  return (
    <>
      <FormFC handler={handler} />
      <div className="box">
        <div onMouseDown={handlerCLose} data-name="localtime">
          <CloseFC />
          <h2>Местное время</h2>
          <WatcherFC utc={currentTimeZoneOffsetInHours} />
        </div>
        {Array.from(clocks.entries()).map(([id, data]) => (
          <div key={id} onMouseDown={handlerCLose} data-name="localtime">
            <CloseFC />
            <h2>{data.name}</h2>
            <WatcherFC utc={data.offset} />
          </div>
        ))}
      </div>
    </>
  );
}
