const defaultIntersection = {
  id: null,
  incoming: [],
  outcoming: []
}

function getAllIntersections(streets) {
  const intersections = [];
  streets.forEach(street => {
    if (intersections[street.B] === undefined) {
      intersections[street.B] = {
        id: street.B,
        incoming: [],
        outcoming: []
      };
    }
    if (intersections[street.E] === undefined) {
      intersections[street.E] = {
        id: street.E,
        incoming: [],
        outcoming: []
      };
    }
    intersections[street.B].outcoming = street;
    intersections[street.E].incoming = street;
  });
  return intersections;
}

exports.getAllIntersections = getAllIntersections;