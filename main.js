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
    const outputExample = [
      {
        id: 1,
        lights: [
          {
            street: "street1",
            T: 10
          },
          {
            street: "street2",
            T: 1
          }
        ]
      },
      {
        id: 13,
        lights: [
          {
            street: "street3",
            T: 2
          },
          {
            street: "street4",
            T: 3
          }
        ]
      }
    ]
  }
  catch (error) {
    console.log(error);
  }
})