import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let trees: number[][] = [];

  const lines = input.split("\n");
  for (const line of lines) {
    let arr = [];
    for (const tree of line.split("")) {
      arr.push(parseInt(tree));
    }
    trees.push(arr);
  }

  return 2 * trees.length + 2 * (trees.length - 2) + getScore(trees, 1);
};

function getScore(trees: number[][], inset: number): number {
  let x = inset;
  let y = inset;
  let score = 0;
  let state = 0;

  while (state < 4) {
    let slices: number[][] = [[], []];
    for (let i = 0; i < trees.length; i++) {
      if (i == y) continue;
      slices[Number(i < y)].push(trees[i][x]);
    }

    slices.push(trees[y].slice(0, x));
    slices.push(trees[y].slice(x + 1, trees[y].length));

    for (let i = 0; i < slices.length; i++) {
      const slice = slices[i];
      if (Math.max(...slice) < trees[y][x]) {
        score++;
        break;
      }
    }

    if (inset == Math.trunc(trees.length / 2)) return score;

    switch (state) {
      case 0:
        if (++x >= trees[y].length - inset - 1) state++;
        break;
      case 1:
        if (++y >= trees.length - inset - 1) state++;
        break;
      case 2:
        if (--x <= inset) state++;
        break;
      case 3:
        if (--y <= inset) state++;
        break;
    }
  }

  return score + getScore(trees, ++inset);
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let trees: number[][] = [];

  const lines = input.split("\n");
  for (const line of lines) {
    let arr = [];
    for (const tree of line.split("")) {
      arr.push(parseInt(tree));
    }
    trees.push(arr);
  }

  let max = 0;

  for (let i = 0; i < trees.length; i++) {
    const row = trees[i];
    for (let j = 0; j < row.length; j++) {
      const tree = row[j];
      let score = 1;

      let slices: number[][] = [[], []];
      for (let k = 0; k < trees.length; k++) {
        if (k == i) continue;
        slices[Number(k < i)].push(trees[k][j]);
      }
      slices[1].reverse();

      slices.push(trees[i].slice(0, j).reverse());
      slices.push(trees[i].slice(j + 1, trees[i].length));

      for (let i = 0; i < slices.length; i++) {
        const slice = slices[i];
        for (let k = 0; k < slice.length; k++) {
          if (slice[k] >= tree) {
            slices[i] = slice.slice(0, k + 1);
            break;
          }
        }
      }

      slices.forEach((s) => {
        score *= s.length;
      });

      if (score > max) max = score;
    }
  }

  return max;

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
