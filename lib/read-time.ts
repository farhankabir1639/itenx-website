/**
 * Estimate read time in minutes from Portable Text body
 * Average reading speed: ~200 words per minute
 */
export function estimateReadTime(body: { _type?: string; children?: { text?: string }[] }[] | null | undefined): number {
  if (!body || !Array.isArray(body)) return 0;
  let wordCount = 0;
  for (const block of body) {
    if (block.children) {
      for (const child of block.children) {
        const text = child?.text ?? "";
        wordCount += text.trim().split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return Math.max(1, Math.ceil(wordCount / 200));
}
