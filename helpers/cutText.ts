export const cutAfterPipe = (text = "") => {
  return text.split("|")[0].trim();
};

export const cutBeforePipe = (text = "") => {
  const parts = text.split("|");
  return (parts[1] || parts[0]).trim();
};
