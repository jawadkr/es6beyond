// Partially applied functions are a great way to combine parameters without a lot of effort.

const birds = ['meadowlark', 'robin', 'roadrunner'];
const zip = (...left) => (...right) => {
    return left.map((item, i) => [item, right[i]]);
};
const res = zip('kansas', 'wisconsin', 'new mexico')(...birds);
console.log(res)