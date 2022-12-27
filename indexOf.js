const dcHero = ["Super Man", "Bat Man", "Flash", "Green Arrow"];

const positionOfIndex = dcHero.indexOf("Flash");
console.log(positionOfIndex);

const numbers = [43, 76, 98, 107, 45, 32, 567, 43, 12, 90, 78];
const positionOfIndex2 = numbers.indexOf(90);
console.log(positionOfIndex2);

/* Note:
If you want to search an element that is not included in array then the result will be -1
*/

const positionOfIndex3 = numbers.indexOf(100000);
console.log(positionOfIndex3);
