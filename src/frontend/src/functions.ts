export default function fun(): void {
  const root = document.getElementById("root");
  if (root === null) return;

  setInterval(() => {
    const date = new Date();
    const T_SEC = 6 * date.getSeconds();
    const T_MIN = 6 * (date.getMinutes() + (1 / 60) * date.getSeconds()); // Определяем угол для минут
    const T_HOUR = 30 * (date.getHours() + (1 / 60) * date.getMinutes()); // Определяем угол для часов

    // let span: HTMLSpanElement;
    const elem = <HTMLCollectionOf<HTMLSpanElement> | null>root.getElementsByClassName("indicator");
    if (elem !== null) {
      // span = elem[0];
      elem[0].style.transform = `rotate(${T_SEC}deg)`;
      elem[1].style.transform = `rotate(${T_HOUR}deg)`;
      elem[2].style.transform = `rotate(${T_MIN}deg)`;
    }
  }, 1000);
}


