export const isInRange = (start, end, range) => {
  /*
    Coordinates are an array [0, 4, 0]...ship is in quadrant 0, ring 4, sector 0.
    Ships cannot move diagonally.
    If the ship has movement of 1, it can move to:
    * Deep Space: [0, 5, 0]
    * Within its own ring: [0, 4, 1], [1, 4, 3]
    * Down system: [0, 3, 0]
  */

  let rangeCount = range;
  const rotationalValue = end[0] - start[0];

  switch (rotationalValue) {
    case 1:
    case 3:
      if (start[1] === end[1]) {
        rangeCount -= start[1] - end[2];
      } else {
        rangeCount = -1;
      }
      break;
    default:
      start.map((value, i) => (rangeCount -= Math.abs(value - end[i])));
  }

  return rangeCount >= 0;
};
