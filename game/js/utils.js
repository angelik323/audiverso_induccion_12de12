Array.prototype.parse2D = function (data) {
  const rows = [];
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }
  return rows;
};

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];
  this.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol !== 0) {
        //push a new collision into collisionBlocks array
        objects.push(
          new CollisionBlock({
            position: {
              x: x * 64 * porcX,
              y: y * 64 * porcX,
            },
          })
        );
      }
    });
  });
  return objects;
};
