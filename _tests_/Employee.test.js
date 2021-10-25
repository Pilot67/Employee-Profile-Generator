const Employee = require ('../lib/Employee');

describe ("Employee", () => {
    describe("Initialisation", () => {
        const name = "Stuart";
        const id = 123;
        const email = "test@developer.com"
        const obj = new Employee(name,id,email);
        
        it ("should return a new 'Employee' object", () =>{
            expect(obj instanceof Employee).toEqual(true);
        })

        it ("should return a new object containing a name and id",() =>{
            expect(obj.employeeName).toEqual(name);
            expect(obj.id).toEqual(id);
        });
        it ("should return a role of Employee",() =>{
            expect(obj.getRole()).toEqual("Employee");
        })
        it ("should return an email of test@developer.com",() =>{
            expect(obj.getEmail()).toEqual(email);
        })
        it ("should return a name of Stuart",() =>{
            expect(obj.getName()).toEqual(name);
        })
        it ("should return an ID of 123",() =>{
            expect(obj.getId()).toEqual(id);
        })

    })
})