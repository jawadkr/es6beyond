// const: you can not reassign within the context of a block 
function test() {
    const a = 'bonjur'
    console.log(a)

    function inner() {
        const a = 'hello'
        console.log(a)
    }
    return inner
}


inner = test()
inner()

// the value of const is not immutable; is mutable 
const discountable = [];
for (let i = 0; i < cart.length(); i++) {
    if (cart[i].discountAvailable) {
        discountable.push(cart[i]);
    }
}

// avoiding mutations using filter; this is neat and clean 
const discountable2 = cart.filter(item => item.discountAvailable);