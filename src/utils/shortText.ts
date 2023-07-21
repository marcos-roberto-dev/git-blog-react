export function shotText(text: string) {
  const maxLength = 181
  return text.length > maxLength
    ? text.substring(0, maxLength) + '...'
    : text + '...'
}
