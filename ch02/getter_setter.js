var person = {
    firstname: 'joe',
    lastname: 'doe',
    language: 'English',
    education: '',
    //defining a getter for this object usign get keyword 
    get lang() {
        return this.language.toUpperCase()
    },
    set edu(value) {
        this.education = value;
    }
};

person.edu = 'Phd'
console.log(person)
console.log(person.lang)