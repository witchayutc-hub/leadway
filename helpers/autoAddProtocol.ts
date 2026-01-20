export function autoAddProtocol(text: string) {
  return text.replace(/(^|\s)(facebook\.com\/[^\s]+)/gim, "$1https://$2");
}
