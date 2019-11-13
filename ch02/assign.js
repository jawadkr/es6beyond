/* using assign  to copy object properties 
// why? becaus we want to avid mutation in the objects as much as possible 
 values of all enumerable own properties from one or more sources to a taget */


// const target = {
//     author: '',
//     title: 'javaScript made easy',
//     price: 19.5,
// }
// const source1 = {
//     author: 'Jawad Shokralziadeh',
//     title: 'javaScript made super easy',
//     co_authors: true
// }
// const source2 = {
//     author: 'Mohammad Jawad Shokralziadeh',
//     publication_co: 'Packt',
//     useless: 'blah blah',
//     price: 20.20
// }

// const final = Object.assign(target, source1, source2)
// console.log('\nfinal:::\n', final)
// console.log('\ntarget::: \n', target)

//cloning an object 
// var obj = {
//     a: 1
// };
// var copy = Object.assign({}, obj)
// console.log(copy)

// warning for deep clone 
// function test() {
//     'use strict';
//     let obj1 = {
//         a: 0,
//         b: {
//             c: 0
//         }
//     };
//     let obj2 = Object.assign({}, obj1);

//     obj1.a = 1;
//     console.log('obj1', obj1)
//     console.log('obj2', obj2)

//     obj1.b.c = 4
//     console.log('obj1.b.c = 4')
//     console.log('obj1', obj1)
//     console.log('obj2', obj2)
//     // this is because b is a reference to an object and this reference is copied 

//     // this is how to do deep cloning 
//     let obj3 = {
//         a: 0,
//         b: {
//             c: 0
//         }
//     };
//     let obj4 = JSON.parse(JSON.stringify(obj3));
//     obj3.a = 4;
//     obj3.b.c = 4;
//     console.log(JSON.stringify(obj4))
//     console.log('obj3: ', obj3)
// }

// test()


var o1 = {
    a: 1
};
var o2 = {
    b: 2
};
var o3 = {
    c: 3
};

var merged = Object.assign({}, o1, o2, o3)
console.log(merged)


// copying symbol-typed properties 

var o1 = {
    a: 1
}
var o2 = {
    [Symbol('foo')]: 2
};
var obj = Object.assign