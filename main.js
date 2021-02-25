const fs = require("fs")
const { parseInput } = require("./parse");
const { getStreetLoad } = require("./getStreetLoad");

fs.readFile("./inputs/a.txt", "utf8" , (readingError, input) => {
  if (readingError) {
    console.error(readingError);
    return;
  }
  try {
    const system = parseInput(input);
    console.log(getStreetLoad(system));
  }
  catch (error) {
    console.log(error);
  }
})