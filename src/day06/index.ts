import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).toString();
  const computeMarker = (input: string, markerLength: number): number => {
    let chars = [];
    let totalScannedCharacters = null;

    input.split("").find((char, index) => {
      const indexOfChar = chars.indexOf(char);
      if (indexOfChar !== -1) {
        chars = [...chars.slice(indexOfChar + 1), char];
      } else {
        chars.push(char);
      }
      if (chars.length === markerLength) {
        totalScannedCharacters = index + 1;
      }

      return totalScannedCharacters !== null;
    });

    return totalScannedCharacters;
  };

  const part1 = computeMarker(input, 4);
  const part2 = computeMarker(input, 14);

  return part1;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).toString();
  const computeMarker = (input: string, markerLength: number): number => {
    let chars = [];
    let totalScannedCharacters = null;

    input.split("").find((char, index) => {
      const indexOfChar = chars.indexOf(char);
      if (indexOfChar !== -1) {
        chars = [...chars.slice(indexOfChar + 1), char];
      } else {
        chars.push(char);
      }
      if (chars.length === markerLength) {
        totalScannedCharacters = index + 1;
      }

      return totalScannedCharacters !== null;
    });

    return totalScannedCharacters;
  };

  const part1 = computeMarker(input, 4);
  const part2 = computeMarker(input, 14);

  return part2;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
