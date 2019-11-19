var assert = require('assert'); // using the assert library 
// creating a testing group 
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        })
    })
})

// describe: is a way to group our tests in Mocha 
// we can also nest other test groups 
// describe(test_group, callbackFunction)

// it is for individual test-cases 


describe('Math', function () {
    it('test 3*3 = 9', function () {
        assert.equal(9, 3 * 3);
    });
    it('test (3-4) * 8 = -8', function () {
        assert.equal(-8, (3 - 4) * 8);
    });
})