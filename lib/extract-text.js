import { convert } from "html-to-text";

export function extractText(html, length = 80, more = '...') {
  const text = convert(html, {
    selectores: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true }},
    ]
  })
  return text.slice(0, length) + more
}