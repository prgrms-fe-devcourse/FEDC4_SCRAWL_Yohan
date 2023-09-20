export const testRegex = (pattern: RegExp, input: string) => {
  const regex = new RegExp(pattern);
  return regex.test(input);
};
