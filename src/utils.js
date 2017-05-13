// take a line from each poem and string them together
export const createPoem = poems =>
  poems
    .map(({ lines, linecount }, i) => (i <= linecount ? lines[i] : lines[0]))
    .filter(x => x)
    .join('\n')
