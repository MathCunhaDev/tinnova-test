export const removeChars = (value: string) => {
  return value.replace(/[^\w]/g, "");
};
