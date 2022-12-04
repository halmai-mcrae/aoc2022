import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).trim().split("\n");

  const doubleLetters: string[] = [];

for (const i of input) {
    const a = i.slice(0, i.length / 2);
    const b = i.slice(i.length / 2);
    for (const ai of a) {
        if (b.includes(ai)) {
            doubleLetters.push(ai);
            break;
        }
    }
}
let total = 0;
for (const i of doubleLetters) {
    total += `_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(i);
}


  return; total
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
