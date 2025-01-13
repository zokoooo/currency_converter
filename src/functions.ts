export function costPerOne(to: string, from: string): number {
  const valueTo = this[to].value / this[to].nominal;
  const valueFrom = this[from].value / this[from].nominal;

  const k: number = valueFrom / valueTo;
  return Math.round(k * 1000000) / 1000000
}

export function converter(to: string, from: string, value: number): number {
  if (value === 0) return 0;
  const valueTo = this[to].value / this[to].nominal;
  const valueFrom = this[from].value / this[from].nominal;

  const k: number = (valueFrom / valueTo) * value;
  return Math.round(k * 10000) / 10000
}