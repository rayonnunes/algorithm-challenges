export default function countingValleys(steps: number, path: string): number {
  const pathCalc = path.split("").reduce(
    (acc, curr) => {
      if (curr === "D") {
        if (acc.level === 0) {
          acc.numValleys++;
        }
        --acc.level;
      } else {
        ++acc.level;
      }
      return acc;
    },
    { level: 0, numValleys: 0 }
  );

  return pathCalc.numValleys;
}
