function ShipFactory(name, position) {
  let hits = [];

  const hit = (position) => {
    hits.push(position);
  };

  const isSunk = () => {
    return position.every((element) => {
      return hits.includes(element);
    });
  };

  return { name, position, hits, hit, isSunk };
}

// const subma = ShipFactory("jill", [4, 5, 6, 7, 8]);
// subma.hit(4);
// subma.hit(5);
// subma.hit(6);
// subma.hit(7);
// subma.hit(8);
// console.log(subma.hits);
// console.log(subma.position);
// console.log(subma.isSunk());

export default ShipFactory;
