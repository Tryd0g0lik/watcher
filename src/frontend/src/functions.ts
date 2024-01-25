export default class Times {
  UTC: number;
  root: Record<any, any>;
  constructor(utc: number) {
    this.UTC = utc;
  }

  set boxTime(root: Record<any, any>) {
    this.root = root;
  }

  timeZone(): void {
    const root = this.root;
    console.log("[ROOT]: ", this.root);
    console.log("[ROOT]: ", root);
    setInterval(() => {
      const date = new Date();
      const T_SEC = 6 * date.getUTCSeconds();
      const T_MIN = 6 * (date.getUTCMinutes() + (1 / 60) * date.getSeconds()); // Определяем угол для минут
      const T_HOUR = 30 * (date.getUTCHours() + this.UTC + (1 / 60) * date.getMinutes()); // Определяем угол для часов

      const elem = <HTMLCollectionOf<HTMLSpanElement> | null>root.getElementsByClassName("indicator");
      if (elem !== null) {
        elem[0].style.transform = `rotate(${T_SEC + 90}deg)`;
        elem[1].style.transform = `rotate(${T_HOUR + 90}deg)`;
        elem[2].style.transform = `rotate(${T_MIN + 90}deg)`;
      }
    }, 1000);
  }
}
