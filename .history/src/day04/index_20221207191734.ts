import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).trim().split("\n");
let overlapCount1 = 0;
let overlapCount2 = 0;
for (const i of input) {
  const a = i.split(",");
  const j = a[0].split("-");
  const k = a[1].split("-");

  if (
      (+j[0] <= +k[0] && +j[1] >= +k[1]) ||
      (+j[0] >= +k[0] && +j[1] <= +k[1])
  ) {
      overlapCount1++;
  }

  if (+j[0] <= +k[1] && +k[0] <= +j[1]) {
      overlapCount2++;
  }
}



  return (`Pt 1: ${overlapCount1} \nPt 2: ${overlapCount2}`);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
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
