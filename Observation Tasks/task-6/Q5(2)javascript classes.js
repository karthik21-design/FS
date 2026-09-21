class Student {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }

    display() {
        console.log(
            `Name: ${this.name}, Branch: ${this.branch}`
        );
    }
}

const student1 = new Student(
    "Karthik",
    "CSE(AI&ML)"
);

const student2 = new Student(
    "Rahul",
    "CSE"
);

student1.display();
student2.display();