export const findPairs = (matr:number[][]) => {
  let count: number = 0;

  matr.forEach((row, i) => {
    let unique_pairs = matr[i].filter(function (item, pos) {
      return matr[i].indexOf(item) !== pos;
    });

    count += unique_pairs.length;
  });

  let reversed = matr[0].map((_, colIndex) => matr.map((row) => row[colIndex]));

  reversed.forEach((row, i) => {
    let unique_pairs = reversed[i].filter(function (item, pos) {
      return reversed[i].indexOf(item) !== pos;
    });

    count += unique_pairs.length;
  });

  return count;
};
