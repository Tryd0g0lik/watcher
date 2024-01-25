export default function fun(h: number): void {
  const root = document.getElementById("root");
  if (root === null) return;

  setInterval(() => {
    const date = new Date();
    const T_SEC = 6 * date.getUTCSeconds();
    const T_MIN = 6 * (date.getUTCMinutes() + (1 / 60) * date.getSeconds()); // Определяем угол для минут
    const T_HOUR = 30 * (date.getUTCHours() + h + (1 / 60) * date.getMinutes()); // Определяем угол для часов

    const elem = <HTMLCollectionOf<HTMLSpanElement> | null>root.getElementsByClassName("indicator");
    if (elem !== null) {
      elem[0].style.transform = `rotate(${T_SEC + 90}deg)`;
      elem[1].style.transform = `rotate(${T_HOUR + 90}deg)`;
      elem[2].style.transform = `rotate(${T_MIN + 90}deg)`;
    }
  }, 1000);
}
