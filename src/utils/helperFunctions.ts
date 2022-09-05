export const TitleWord = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const replaceURL = (value: string) =>
  value.replace("https://swapi.dev/api/", "/resources/");
