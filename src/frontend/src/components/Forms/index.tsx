import React from "react"; // , useId
import InputFC from "./Inputs.tsx";

export default function FormFC(): React.JSX.Element {
  function handler(e: any): void {
    const patterncitys = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
    const re = new RegExp(patterncitys);

    const patternTimizone = /(^[^(%_ \$ А-Яа-яA-Za-z])[\+-]?[0-9]{1, 2}$/;
    const reTimeZone = new RegExp(patternTimizone, "i");

    e.preventDefault();
    const event = (e as React.FormEvent<HTMLFormElement>); /* получаем данные из формы */

    /* Received datas */
    const formSourceData = new FormData(event.target as HTMLFormElement);
    const citys = (formSourceData.get("citys") as string).slice(0);
    let timezone = (formSourceData.get("timzone") as string).slice(0);

    /* Проверка шаблона из названий городов */
    if (re.test(citys)) {
      console.log("[Input citys Value]: true");
    } else {
      console.log("[Input citys Value]: false");
      return;
    }

    /* Проверка шаблона из временной зоны */
    timezone = "-".includes(timezone) ? timezone : ("+" + timezone);
    if (reTimeZone.test(timezone)) {
      console.log("[Input Timizone Value]: true");
    } else {
      console.log("[Input Timizone Value]: false");
    }
  }
  return (
    <>
      <form onSubmit={handler}>
        <InputFC htmlfor="citys" type="text" ind="citys" name="citys" placeholder='Название "Анкара"' />
        <InputFC htmlfor="timezone" type="number" ind="timezone" name="timzone" placeholder='Временная зона "+3"' />
        <button type="submit">Добавить</button>
      </form>
      <div>
      </div>
    </>
  );
  // }
}
