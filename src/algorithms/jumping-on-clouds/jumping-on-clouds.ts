export default function jumpingOnClouds(c: number[]): number {
  const path = c.reduce((acc, curr, index, array) => {
    if (index !== 0 && index < Array.from(acc)[acc.size - 1]) {
      return acc;
    }
    if (curr === 0) {
      if (array[index + 1] === 0) {
        if (array[index + 2] === 0) {
          array[index + 2] !== undefined
            ? acc.add(index + 2)
            : acc.add(array.length - 1);
          return acc;
        } else {
          acc.add(index + 1);
          array[index + 3] !== undefined
            ? acc.add(index + 3)
            : acc.add(array.length - 1);
          return acc;
        }
      } else {
        array[index + 2] !== undefined
          ? acc.add(index + 2)
          : acc.add(array.length - 1);
      }
    }
    return acc;
  }, new Set([0]));

  return path.size - 1;
}

export function betterJumpingOnClouds(c: number[]): number {
  const game = c.reduce(
    (acc, _, index) => {
      if (index >= acc.currentIndex && index < c.length - 1) {
        if (index + 2 < c.length && c[index + 2] === 0) {
          acc.currentIndex += 2;
        } else {
          acc.currentIndex += 1;
        }
        acc.jumps++;
      }
      return acc;
    },
    { jumps: 0, currentIndex: 0 }
  );

  return game.jumps;
}

export function optimizedJumpingOnClouds(c: number[]): number {
  let jumps = 0;
  let i = 0;

  while (i < c.length - 1) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i += 2;
    } else {
      i += 1;
    }
    jumps++;
  }

  return jumps;
}
