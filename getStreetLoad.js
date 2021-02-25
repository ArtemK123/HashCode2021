function getStreetLoad(system) {
  const streetsLoadDictionary = {};
  system.cars.forEach(car => {
    car.streets.forEach(streetOnTheWay => {
      if (streetsLoadDictionary[streetOnTheWay] === undefined) {
        streetsLoadDictionary[streetOnTheWay] = 1;
      }
      else {
        streetsLoadDictionary[streetOnTheWay]++;
      }
    })
  });
  return streetsLoadDictionary;
}

exports.getStreetLoad = getStreetLoad