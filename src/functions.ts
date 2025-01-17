import { Valute } from "./store/types.ts";

export function converter(charCodes: Valute, to: string, from: string, value: number = 1): number {
  if (value === 0) return 0;
  const valueTo = charCodes[to].value / charCodes[to].nominal;
  const valueFrom = charCodes[from].value / charCodes[from].nominal;

  const k: number = (valueFrom / valueTo) * value;
  const okrugl: number = k > 1000 ? 100: 10000
  return Math.round(k * okrugl) / okrugl
}

export function formatNumberWithSpaces(number: number) {
  const numberString = number.toString();
  const [integerPart, decimalPart] = numberString.split('.');
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}