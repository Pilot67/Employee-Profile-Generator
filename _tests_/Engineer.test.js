const Engineer = require ('../lib/Engineer');

describe ("Engineer", () => {
    describe("Initialisation", () => {
        const name = "Stuart";
        const id = 123;
        const email = "test@developer.com"
        const github = "Pilot67"
        const obj = new Engineer(name,id,email,github);
        
        it ("should return a new 'Engineer' object", () =>{
            expect(obj instanceof Engineer).toEqual(true);
        })

        it ("should return a role of 'Engineer'",() =>{
            expect(obj.getRole()).toEqual("Engineer");
        })
        it ("should return a github username equal to github",() =>{
            expect(obj.getGithub()).toEqual(github);
        })

    })
})