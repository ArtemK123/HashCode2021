function parseStreets(lines) {
  return lines.map((line, index, array) => {
    const [B, E, name, L] = line.split(" ");
    return {
      B: Number.parseInt(B),
      E: Number.parseInt(E),
      name: name,
      L: Number.parseInt(L)
    };
  });
}

function parseCars(lines) {
  return lines.map((line, index, array) => {
    const parsedLine = line.split(" ");
    return {
      P: Number.parseInt(parsedLine[0]),
      streets: parsedLine.slice(1)
    };
  });
}

function parseInput(input)
{
  const lines = input.split("\n");
  const firstLine = lines[0];
  const firstLineInputs = firstLine.split(" ");
  const system = {
    D: Number.parseInt(firstLineInputs[0]),
    I: Number.parseInt(firstLineInputs[1]),
    S: Number.parseInt(firstLineInputs[2]),
    V: Number.parseInt(firstLineInputs[3]),
    F: Number.parseInt(firstLineInputs[4])
  };
  const streetLines = lines.slice(1, 1 + system.S);
  system.streets = parseStreets(streetLines);
  const carsLines = lines.slice(1 + system.S, lines.length - 1);
  system.cars = parseCars(carsLines);
  return system;
}

exports.parseInput = parseInput;