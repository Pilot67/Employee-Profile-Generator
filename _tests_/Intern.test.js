const Intern = require ('../lib/Intern');

describe ("Intern", () => {
    describe("Initialisation", () => {
        const name = "Stuart";
        const id = 123;
        const email = "test@developer.com"
        const school = "Monash"
        const obj = new Intern(name,id,email,school);
        
        it ("should return a new 'Intern' object", () =>{
            expect(obj instanceof Intern).toEqual(true);
        })

        it ("should return a role of 'Intern'",() =>{
            expect(obj.getRole()).toEqual("Intern");
        })
        it ("should return a school equal to school",() =>{
            expect(obj.getSchool()).toEqual(school);
        })

    })
})