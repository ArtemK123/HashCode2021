const fs = require("fs")
const { parseInput } = require("./parse");

fs.readFile("./inputs/a.txt", "utf8" , (readingError, input) => {
  if (readingError) {
    console.error(readingError);
    return;
  }
  try {
    console.log(parseInput(input));
  }
  catch (parsingError) {
    console.log(parsingError);
  }
})