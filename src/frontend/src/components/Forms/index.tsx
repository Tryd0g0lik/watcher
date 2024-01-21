import React from "react";
export default function FormFC(): React.JSX.Element {
  let n = "";

  return (
    <form >
      <input type="text" name="name" placeholder="Название" value={n} />
      <input type="number" name="timzone" placeholder="Временная зона" />
      <button type="submit">Добавить</button>
    </form>

  );
}
