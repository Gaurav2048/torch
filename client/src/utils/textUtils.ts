export const avaterText = (str: string) => {
  const strSplit = str.split(" ");
  return `${strSplit?.[0][0]}${strSplit?.[1][0]}`;
};

export function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}
