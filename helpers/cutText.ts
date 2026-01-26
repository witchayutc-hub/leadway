export const cutAfterPipe = (text = "") => {
  return text.split("|")[0].trim();
};
