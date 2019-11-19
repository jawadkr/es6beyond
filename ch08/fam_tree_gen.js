class FamilyTree {
    constructor() {
            this.family = {
                name: 'Dolores',
                child: {
                    name: 'Martha',
                    child: {
                        name: 'Dyan',
                        child: {
                            name: 'Bea',
                        },
                    },
                },
            };
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