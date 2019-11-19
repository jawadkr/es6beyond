// like getters and setters, generators can simplify the interface to your classes 
//You can make a class with a complex data structure but design it in such a way that developers using it will be able to access the data as if it were a simple array.

class FamilyTree {
    constructor() {
            this.family = {
                name: 'John',
                child: {
                    name: "Martha",
                    child: {
                        name: 'Dyan',
                        child: {
                            name: "Beta"
                        }
                    }
                }
            }
        }
        *[Symbol.iterator]() {
            let node = this.family;
            while (node) {
                yield node.name;
                node = node.child;
            }
        }
}

const family = new FamilyTree();
[...family];

//other developers don’t need to get caught up in the implementation details of your class. They don’t need to know that the class is actually using a tree data structure. To them, the class contains an iterable.