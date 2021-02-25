const fs = require("fs");
const { parseInput } = require("./parse");
const { getStreetLoad } = require("./getStreetLoad");
const { simple } = require("./algorithms/simple");
const { createOutput } = require("./createOutput");

fs.readFile("./inputs/a.txt", "utf8" , (readingError, input) => {
  if (readingError) {
    console.error(readingError);
    return;
  }
  try {
    const system = parseInput(input);
    const res = simple(system);
    const output = createOutput(res);
    fs.writeFile('result.txt', output, () => {});
  }
  catch (error) {
    console.log(error);
  }
})