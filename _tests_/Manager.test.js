const Manager = require ('../lib/Manager');

describe ("Manager", () => {
    describe("Initialisation", () => {
        const name = "Stuart";
        const id = 123;
        const email = "test@developer.com"
        const officeNumber = "+61422779955"
        const obj = new Manager(name,id,email,officeNumber);
        
        it ("should return a new 'Manager' object", () =>{
            expect(obj instanceof Manager).toEqual(true);
        })

        it ("should return a role of Manager",() =>{
            expect(obj.getRole()).toEqual("Manager");
        })
        it ("should return an Office Number equal to officeNumber",() =>{
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        })

    })
})