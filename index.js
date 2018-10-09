function patternDetect(arr) {
  
    var arith, geo;

    for (let i = 0; i < arr.length; i++) {

        arith = arr[arr.length - 1] - arr[arr.length - 2];
        geo = arr[arr.length - 1] / arr[arr.length - 2];

        if (arr[i] + arith === arr[i + 1]) {
            return 'Arithmetic';
        } else if (arr[i] * geo === arr[i + 1]) {
            return 'Geometric';
        } else {
            return -1;
        }

    }

}
// patternDetect([2, 4, 6, 8]);
console.log(patternDetect([100, 50, 25, 12.5]));

module.exports = patternDetect;
