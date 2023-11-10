export function formatPhone(value: string): string {
  const strippedValue = value.replace(/[^0-9]/g, "");

  let formattedValue = "";

  if (strippedValue.length > 0) {
    formattedValue = "(";
  }

  for (let i = 0; i < strippedValue.length && i < 11; i++) {
    if (i === 2) {
      formattedValue += ") ";
    }

    if (i === 6) {
      formattedValue += "-";
    }

    formattedValue += strippedValue[i];
  }

  return formattedValue;
}
