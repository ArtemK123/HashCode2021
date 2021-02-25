const fs = require("fs");
const { parseInput } = require("./parse");
const greenLightsSolution = require("./algorithms/greenLightsSolution");
const { createOutput } = require("./createOutput");

try{
  fs.readdir("./inputs", (readDirError, inputFileNames) => {
    if (readDirError) {
      console.error(readDirError);
    }
    if (!fs.existsSync("./outputs")){
      fs.mkdirSync("./outputs");
    } 
    inputFileNames.forEach(inputFileName => {
      const inputFilePath = "./inputs/" + inputFileName;
      fs.readFile(inputFilePath, "utf8" , (readFileError, input) => {
        if (readFileError) {
          console.error(readFileError);
        }
        const system = parseInput(input);
        const res = greenLightsSolution.compute(system);
        const output = createOutput(res);
        const outputFileName = "./outputs/" + inputFileName;
        fs.writeFile(outputFileName, output, () => {});
      })
    })
  });
}
catch(error) {
  console.error(error);
}
