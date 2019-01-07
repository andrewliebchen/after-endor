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

  start.map((value, i) => (rangeCount -= Math.abs(value - end[i])));

  // // TODO: Need to do something different if moving between quadrants

  return rangeCount >= 0;
};
