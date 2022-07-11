export{}

interface Namepro {
    firstname: string,
    lastname: string
}


let namets = (Namepro:Namepro) => {

    console.log(`My name is ${Namepro.firstname} ${Namepro.lastname}`);
}

namets({firstname: "Sachin", lastname: "Hirve"});