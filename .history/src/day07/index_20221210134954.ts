import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).trim().split("\n");

  class file {
      name: string;
      size: number;
  
      constructor(name: string, size: number) {
          this.name = name;
          this.size = size;
      }
  }
  
  class dir {
      name: string;
      directories: dir[];
      files: file[];
      parent?: dir;
  
      constructor(dirs: dir[], files: file[], name: string, parent?: dir) {
          this.directories = dirs;
          this.files = files;
          this.name = name;
          this.parent = parent;
      }
  
      getAllDir(): dir[] {
          let dirs: dir[] = [];
          for (const dir of this.directories) {
              dirs = dirs.concat(dir.getAllDir());
          }
          return dirs.concat(this.directories);
      }
  
      getDir(name: string) {
          return this.directories.filter((a) => a.name == name)[0];
      }
  
      addFile(file: file) {
          this.files.push(file);
      }
  
      addDir(dir: dir) {
          this.directories.push(dir);
          dir.parent = this;
      }
      size(): number {
          let sum = 0;
  
          for (const dir of this.directories) {
              sum += dir.size();
          }
          for (const file of this.files) {
              sum += file.size;
          }
          return sum;
      }
  }
  
  const rootDir = new dir([], [], "/");
  let currentDir: dir = rootDir;
  for (let line of input) {
      const a = line.split(" ");
      if (a[0] == "$") {
          if (a[1] == "ls") {
              continue;
          } else if (a[1] == "cd") {
              const command = a[2];
              if (command == "..") {
                  currentDir = currentDir.parent!;
              } else if (command == "/") {
                  currentDir = rootDir;
              } else {
                  currentDir = currentDir.getDir(command);
              }
          }
      } else {
          if (a[0] == "dir") {
              currentDir.addDir(new dir([], [], a[1], currentDir));
          } else {
              currentDir.addFile(new file(a[1], +a[0]));
          }
      }
  }
  
  let sum = 0;
  
  const usedSpace = rootDir.size();
  const spaceNeeded = 30000000 - (70000000 - usedSpace);
  const possibleDirs: dir[] = [];
  
  for (const dir of rootDir.getAllDir()) {
      if (dir.size() <= 100000) {
          sum += dir.size();
      }
      if (dir.size() >= spaceNeeded) {
          possibleDirs.push(dir);
      }
  }
  console.log(sum);
  console.log(possibleDirs.sort((a, b) => a.size() - b.size())[0].size());;

  return sum;
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
