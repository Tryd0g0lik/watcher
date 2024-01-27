import React from "react"; // , useId
import { Hand } from "./interfacies.ts";
import InputFC from "./Inputs.tsx";

export default function FormFC({ handler }: Hand): React.JSX.Element {
  return (
    <form onSubmit={handler}>
      <InputFC htmlfor="citys" type="text" ind="citys" name="citys" placeholder='Название "Анкара"' />
      <InputFC htmlfor="timezone" type="number" ind="timezone" name="timzone" placeholder='Временная зона "+3"' />
      <button type="submit">Добавить</button>
    </form>
  );
}
