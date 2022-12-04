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


  return (total);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).trim()
  .split("\n");

const t: string[] = [];

for (let i = 0; i < input.length; i += 3) {
  const a = input[i];
  const b = input[i + 1];
  const c = input[i + 2];
  const ab: string[] = [];
  const bc: string[] = [];

  for (const ch of a) {
      if (b.includes(ch)) ab.push(ch);
  }
  for (const ch of b) {
      if (c.includes(ch)) bc.push(ch);
  }

  for (const i of ab) {
      if (bc.includes(i)) {
          t.push(i);
          break;
      }
  }
}
let total = 0;
for (const i of t) {
  total += `_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.indexOf(i);
}

  return (total);
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
