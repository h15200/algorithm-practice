// 100 doors initially closed
// for 1st pass, toggle every door
// 2nd pass toggle every 2nd door
// 3rd pass
// repeat until 100th pass, where you toggle the 100th door only

const getFinalOpenedDoors = () => {
  const doors = {};

  // do 100 loops total

  // door number, boolean open/close like - '1' : false
  for (let i = 1; i <= 100; i++) {
    // initialize and open every door
    doors[i] = true;
  }

  // 99 more loops
  let index = 2;
  let loops = 99;
  while (loops > 0) {
    for (let id in doors) {
      if (parseInt(id) % index === 0) {
        doors[id] = !doors[id];
      }
    }
    index++;
    loops--;
  }

  const openDoors = [];
  for (let id in doors) {
    if (doors[id]) {
      openDoors.push(parseInt(id));
    }
  }
  // push the open doors to an array
  return openDoors;
};
