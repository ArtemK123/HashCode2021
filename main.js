const fs = require("fs");
const { parseInput } = require("./parse");
const greenLightsSolution = require("./algorithms/greenLightsSolution");
const { createOutput } = require("./createOutput");

fs.readFile("./inputs/a.txt", "utf8" , (readingError, input) => {
  if (readingError) {
    console.error(readingError);
    return;
  }
  try {
    const system = parseInput(input);
    console.log("Parsed input:");
    console.log(system);
    const res = greenLightsSolution.compute(system);
    const output = createOutput(res);
    console.log("\n\n\nOutput:");
    console.log(output);
    fs.writeFile('result.txt', output, () => {});
  }
  catch (error) {
    console.log(error);
  }
})