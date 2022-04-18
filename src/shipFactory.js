function shipFactory(name, length) {
  let shipArr = new Array(length);
  let arrLength = shipArr.length;

  const hit = (position, shipAr) => {
    if (position >= shipAr.length) {
      return;
    } else {
      shipAr[position] = "hit";
    }
  };

  const isSunk = (arr) => {
    return arr.every((element) => {
      element === "hit";
    });
  };

  return { name, shipArr, arrLength, hit, isSunk };
}

const destroyer = shipFactory("destoryer", 5);
console.log(destroyer.shipArr);
destroyer.hit(1, destroyer.shipArr);
destroyer.hit(4, destroyer.shipArr);
destroyer.hit(2, destroyer.shipArr);
console.log(destroyer.shipArr);
console.log(destroyer);

export default shipFactory;
