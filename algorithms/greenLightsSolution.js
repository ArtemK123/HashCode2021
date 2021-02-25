const { getAllIntersections } = require("../getAllIntersections");

function orderCarsByStreetsInPath(cars) {
  return cars.sort((car1, car2) => car1.P - car2.P);
}

function compute(system) {
  const result = getAllIntersections(system.streets).map((_, index, __) => ({
    id: index,
    lights: []
  }));
  orderCarsByStreetsInPath(system.cars).forEach(car => {
    car.streets.forEach((streetName) => {
      const street = system.streets.find(currentStreet => currentStreet.name === streetName);
      const endingInterception = result.find(interceptionInResult => interceptionInResult.id === street.E);
      if (endingInterception === undefined || endingInterception.lights.find(light => light.street === street.name) !== undefined) {
        return;
      }
      endingInterception.lights.push({
        street: street.name,
        T: system.D
      });
    });
  });
  return result;
}

exports.compute = compute;