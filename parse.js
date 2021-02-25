function parseStreet(streetLines) {
  return "streets";
}

function parseCars(streetLines) {
  return "cars";
}

function parseInput(input)
{
  const lines = input.split("\n");
  const firstLine = lines[0];
  const firstLineInputs = firstLine.split(" ");
  const system = {
    D: firstLineInputs[0],
    I: firstLineInputs[1],
    S: firstLineInputs[2],
    V: firstLineInputs[3],
    F: firstLineInputs[4]
  };
  const streetLines = lines.slice(1, 1 + system.S);
  system.streets = parseStreet(streetLines);
  const carsLines = lines.slice(1 + system.S);
  system.cars = parseCars(carsLines);
  return system;
}

exports.parseInput = parseInput;