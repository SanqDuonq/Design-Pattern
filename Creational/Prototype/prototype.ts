interface IEmployee {
    clone(): Employee
}

class Employee implements IEmployee {
    public name: string
    public position: string
    public salary: number

    constructor(name: string, position:string, salary: number) {
        this.name = name,
        this.salary = salary,
        this.position = position
    }

    clone(): Employee {
        return new Employee(this.name,this.position,this.salary);
    }

    showInfo(): void {
        console.log(`Employee Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name,'Full-time',salary)
    }

    clone(): Employee {
        return new FullTimeEmployee(this.name,this.salary)
    }
}

class PartTimeEmployee extends Employee {
    constructor(name: string, salary: number) {
        super(name,'Part-time',salary);
    }
    clone(): Employee {
        return new PartTimeEmployee(this.name,this.salary);
    }
}

const employee1 = new FullTimeEmployee('Sanq',2000);
employee1.showInfo();

const employee2 = new Employee('Sanq1','Dev',3000);
employee2.showInfo();

const employee3 = employee2.clone().showInfo();


