const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
  Math.ceil(min)

// take a line from each poem and string them together
export const createPoem = poems =>
  poems
    .map(({ lines, linecount }) => lines[getRandomInt(0, linecount)])
    .filter(x => x)
    .join('\n')
