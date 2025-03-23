export function formatMoney(number: string): string {
  if (number != null) {
    return Number(number)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
}

export function formatPercentage(number: string): string {
  if (number != null) {
    return Number(number).toFixed(2) + "%";
  }
  return "";
}

export function formatDecimal(number: string): string {
  if (number != null) {
    return Number(number).toFixed(5);
  }
  return "";
}
