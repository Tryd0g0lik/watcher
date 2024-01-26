import React from "react";
import { Inp } from "./interfacies.ts";

/**
 * ```JSX
 * <label htmlFor="citys">
      <input type="text" id="citys" name="citys" placeholder='Название "Анкара"' />
    </label>
 * ```
 * @param `type`, Exemple is a `type="text"`
 * @param `ind`, Exemple is a `id="citys"`
 * @param `name`, Exemple is a `name="citys"`
 * @param `placeholder`, Exemple is a `'Название "Анкара"'`
 * @param `htmlfor`, Exemple is a `<label htmlFor="citys">`
 * @returns  React.JSX.Element
 */
export default function InputFC({
  type,
  ind,
  name,
  placeholder,
  htmlfor
}: Inp): React.JSX.Element {
  return (
    <>
      <label htmlFor={htmlfor}>
        <input type={type}
          id={ind}
          name={name}
          placeholder={placeholder} />;
      </label >
    </>
  );
}
