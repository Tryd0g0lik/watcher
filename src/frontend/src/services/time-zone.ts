/**
 * Еа вход получаем UTC в формате строки
 */
export default class Times {
  UTC: number;
  root: Record<any, any>;
  T_SEC: any;
  T_MIN: any;
  T_HOUR: any;
  constructor(utc: string) {
    this.UTC = Number(utc);
  }

  /**
   * @param str -> utc;
   * @returns true/false
   */
  private regExp(str: string): boolean {
    const pattern = /(^[^(%_ \$ А-Яа-яA-Za-z])(\+|-)?[0-9]{1,2}$/;
    const re = new RegExp(pattern, "i");
    console.log("[RegExp]: ", re.test(str));
    return re.test(str);
  }

  set boxTime(root: Record<any, any>) {
    this.root = root;
  }
  liveTime(): void {
    const date = new Date();
    this.T_SEC = 6 * date.getUTCSeconds();
    this.T_MIN = 6 * (date.getUTCMinutes() + (1 / 60) * date.getSeconds()); // Определяем угол для минут
    this.T_HOUR = 30 * (date.getUTCHours() + this.UTC + (1 / 60) * date.getMinutes()); // Определяем угол для часов
  }

  timeZone(): void {
    const root = this.root;

    setInterval(() => {
      this.liveTime();
      const elem = <HTMLCollectionOf<HTMLSpanElement>>root.getElementsByClassName("indicator");
      if ((elem !== null) && (elem.length > 0) && (elem?.[0].style !== undefined)) {
        elem[0].style.transform = `rotate(${this.T_SEC + 90}deg)`;
        elem[1].style.transform = `rotate(${this.T_HOUR + 90}deg)`;
        elem[2].style.transform = `rotate(${this.T_MIN + 90}deg)`;
      }
    }, 1000);
  }
}
