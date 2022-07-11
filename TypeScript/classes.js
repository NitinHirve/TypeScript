var Youtubes = /** @class */ (function () {
    function Youtubes(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        // this.age = age;
    }
    Youtubes.prototype.getFirstName = function () {
        console.log("My firstname is : " + this.firstname);
    };
    Youtubes.prototype.getLastName = function () {
        console.log("My last name is : " + this.lastname);
    };
    Youtubes.prototype.getAge = function () {
        console.log("My age is : " + this.age);
    };
    return Youtubes;
}());
var obj = new Youtubes("Manisha", "Hirve");
obj.getFirstName();
obj.getLastName();
obj.getAge();
