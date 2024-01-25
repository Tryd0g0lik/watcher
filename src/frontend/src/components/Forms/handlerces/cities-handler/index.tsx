import React from "react";

export default function handler(e: any): void {
  const patternCities = /^[A-ZА-Я][а-яa-z]+[а-яa-z]$/; /* Условия для проверки названий городов */
  const re = new RegExp(patternCities);

  const patternTimizone = /(^[^(%_ \$ А-Яа-яA-Za-z])[\+-]?[0-9]{1,2}$/;
  const reTimeZone = new RegExp(patternTimizone, "i");

  e.preventDefault();
  const event = (e as React.FormEvent<HTMLFormElement>); /* получаем данные из формы */
  console.log("[EventForm]; ", event);

  /* Received datas */
  const formSourceData = new FormData(event.target as HTMLFormElement);

  const cities = (formSourceData.get("cities") as string).slice(0);
  let timzone = (formSourceData.get("timzone") as string).slice(0);
  console.log(`[Event input-CITIES]: ${cities}`);
  console.log(`[Event input-TIMZONE]: ${timzone}`);

  /* Проверка шаблона из названий городов */
  if (re.test(cities)) {
    console.log("[Input Cities Value]: true");
  } else {
    console.log("[Input Cities Value]: false");
    return;
  }

  /* Проверка шаблона из временной зоны */
  timzone = "-".includes(timzone) ? timzone : ("+" + timzone);
  if (reTimeZone.test(timzone)) {
    console.log("[Input Timizone Value]: true");
  } else {
    console.log("[Input Timizone Value]: false");
  }
}
