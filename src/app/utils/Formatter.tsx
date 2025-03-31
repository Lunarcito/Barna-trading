export function formatMoney(number: string): string {
  if (number != null && !isNaN(Number(number))) {
    return Number(number)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "0.00";
}

export function formatDecimal(number: string): string {
  if (number != null && !isNaN(Number(number))) {
    return Number(number).toFixed(5);
  }
  return "0.00000";
}

export function formatPercentage(number: string): string {
  if (number != null && !isNaN(Number(number))) {
    return Number(number).toFixed(2) + "%";
  }
  return "0.00%";
}