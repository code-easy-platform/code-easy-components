import { v4 as uuidv4 } from 'uuid';

export class Utils {
  /**
   * Return a random number id.
   */
  public static getRandomId(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /** Return a UUID */
  public static getUUID = () => uuidv4();

  /** Returns a string with no special characters, spaces, and line breaks  */
  public static getNormalizedString = (value: string) => value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(' ', '');

  /** Download a file */
  public static downloadFile = (filename: string, fileType: string, content: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${filename}.${fileType}`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  /** Copy any to clipboard */
  public static copyToClipboard = async (data: string) => {
    await navigator.clipboard.writeText(data);
  }

  /** Validate a string with no special characters, spaces, and line breaks */
  public static isValidName(name: string) {
    return !(/^(?! )((?! {2})(?<! )$[a-zA-Z ]){3,50}$/.test(name));
  }

  /** Validate a version field like this "0.0.1" */
  public static isValidVersion(version: string) {
    return !(/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(version));
  }

  /**
   * Compares two Date objects and returns e number value that represents
   * the result:
   * 0 if the two dates are equal.
   * 1 if the first date is greater than second.
   * -1 if the first date is less than second.
   * @param date1 First date object to compare.
   * @param date2 Second date object to compare.
   */
  public static compareDate(date1: Date, date2: Date): number {

    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    // Check if the dates are equal
    let same = d1.getTime() === d2.getTime();
    if (same) return 0;

    // Check if the first is greater than second
    if (d1 > d2) return 1;

    // Check if the first is less than second
    if (d1 < d2) return -1;

    return 0;
  }

  /**
   * This function is **valid** if there is no **name repeated** in the list, if hover returns **another name** with the count **MyName1, ..2, ..3**.
   * @param newName string New desired name.
   * @param names string[] Existing names.
   * @returns string A valid and not repeated name.
   */
  public static newName(newName: string, names: string[]): string {
    let nameAlreadyExist = names.some(name => name === newName);
    if (!nameAlreadyExist) return newName;

    let currentI: number = 1;
    while (nameAlreadyExist) {
      currentI++;
      let num = currentI;
      nameAlreadyExist = names.some(name => (name === (newName + num)))
    }
    return newName + currentI;
  }

  /** Get angue from a grup of coords */
  public static getAngle(currX: number, currY: number, endX: number, endY: number): number {
    var angle = Math.atan2(currX - endX, currY - endY) * (180 / Math.PI);

    if (angle < 0) {
      angle = Math.abs(angle);
    } else {
      angle = 360 - angle;
    }

    return angle;
  }
}
