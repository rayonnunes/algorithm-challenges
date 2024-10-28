function repeatedString1(s: string, n: number): number {
  let completeString = s;
  let matchedChar = "a";
  let repeatedA = s.split(matchedChar).length - 1;

  while (completeString.length < n) {
    const nextChar = s[completeString.length % s.length];

    if (nextChar === matchedChar) {
      repeatedA++;
    }
    completeString += nextChar;
  }

  return repeatedA;
}

function repeatedString2(s: string, n: number): number {
  let i = s.length;
  let matchedChar = "a";
  let repeatedA = s.split(matchedChar).length - 1;

  while (i < n) {
    const nextChar = s[i % s.length];
    if (nextChar === matchedChar) {
      repeatedA++;
    }

    i++;
  }

  return repeatedA;
}
