import { v4 as uuidv4 } from "uuid";

/**
 * class Ind this's  indentificater.
 * First writes a content line  'const ind = new Ind()'.
 * Last has be writes 'ind.indAdd()'.
 * @returns Ind unique.
 */
export default class Ind {
  keys: string;
  set: any;
  constructor() {
    this.set = new Set();
  }

  private indGenerate(): string {
    const key: string = uuidv4();
    return key;
  }

  private indGet(): string {
    const id = this.indGenerate();
    this.keys = id.slice(0);
    return this.keys;
  }

  indAdd(): string | null | undefined {
    const key = this.indGet();
    const bool: boolean = this.set.has(key);
    if (bool) {
      this.indGet();
    } else {
      this.set.add(key, key);
      return key;
    }
  }
}
