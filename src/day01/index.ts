import run from "aocrunner";

const part1 = (input: string): number => {
  const calorieLists: string[] = input.split("\n\n");
  const calorieTotals: number[] = calorieLists.map(
    (calList: string): number => {
      const calories: number[] = calList
        .split("\n")
        .map((stringNum: string) => parseInt(stringNum));
      return calories.reduce((total: number, cal: number) => total + cal, 0);
    },
  );

  return calorieTotals.sort((a: number, b: number) => a - b)[
    calorieTotals.length - 1
  ];
};

const part2 = (input: string): number => {
  const calorieLists: string[] = input.split("\n\n");
  const calorieTotals: number[] = calorieLists.map(
    (calList: string): number => {
      const calories: number[] = calList
        .split("\n")
        .map((stringNum: string) => parseInt(stringNum));
      return calories.reduce((total: number, cal: number) => total + cal, 0);
    },
  );
  const sortedTotals = calorieTotals.sort((a: number, b: number) => a - b);
  const sortedLength = sortedTotals.length;

  return (
    sortedTotals[sortedLength - 1] +
    sortedTotals[sortedLength - 2] +
    sortedTotals[sortedLength - 3]
  );
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
