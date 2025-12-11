class Students{
    constructor(name,dept) {
        this.name = name;
        this.dept = dept;
    }

    display(){
        console.log(`Student : ${this.name},Dept: ${this.dept}`);
    }
}
const s = new Students("yuva","CSE");
s.display();