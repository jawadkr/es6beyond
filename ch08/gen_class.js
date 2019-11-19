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
    getMembers() {
        const family = [];
        let node = this.family;
        while (node) {
            family.push(node.name);
            node = node.child;
        }
        return family;
    }
}

const family = new FamilyTree()
family.getMembers()
export default FamilyTree;