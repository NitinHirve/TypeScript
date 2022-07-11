
class Youtubes {

    public firstname: string;
    private lastname: string;
    protected age: number;

    constructor(firstname: string, lastname: string, age?: number) {

        this.firstname = firstname;
        this.lastname = lastname;
        // this.age = age;

    }

     getFirstName() {
        console.log("My firstname is : " + this.firstname)
    }

    getLastName() {
        console.log("My last name is : " + this.lastname);
    }

    getAge() {
        console.log("My age is : " + this.age);

    }

}

let obj = new Youtubes("Manisha", "Hirve");


obj.getFirstName();
obj.getLastName();
obj.getAge();





