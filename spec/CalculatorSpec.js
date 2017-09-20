// Suite: group of test cases that can be used to test a specific behavior of the code. 
// Begins with a call to the Jasmine global function 'describe' with two parameters:
// - First parameter represents the title of the test suite 
// - Second parameter represents a function that implements the test suite.
describe("Calculator", function() {
    var calc;
 
    // Called before running each spec
    beforeEach(function() {
        calc = new Calculator();
    });
 
    // In Jasmine, describe function is for grouping related specs. 
    // The string parameter is for naming the collection of specs, and will be concatenated with specs to make a spec’s full name. 
    // This helps in finding specs in a large suite.
    describe("basic operations", function(){
         
        // Spec for sum operation
        // A Jasmine spec represents a test case inside the test suite. 
        // Begins with a call to the Jasmine global function 'it' with two parameters
        // - First parameter represents the title of the spec
        // - Second parameter represents a function that implements the test case.
        it("sum", function() {
            expect(calc.sum(2,2)).toEqual(4); // Matchers (toEqual()) are just like assertions
        });

        it("wrong sum", function(){
            expect(calc.sum(2,2)).not.toEqual(5);
        });
 
        //Spec for multiply operation
        it("multiply", function() {
            expect(calc.multiply(3, 5)).toEqual(15);
        });
 
        //Spec for divide operation
        it("division", function() {
            expect(calc.divide(9, 3)).toEqual(3);
        });
         
        //Spec for division by zero
        it("division by 0", function() {
            expect(function() { 
                calc.divide(9, 0)
            }).toThrowError(Error);
        });
    });
    
    describe("complex operations", function(){

        it("exponential", function() {
            var result = calc.exponentiate(2,5);
            
            expect(result).toBe(32);
        });

        it("exponential with spy sample", function() {

            // A spy can stub any function and tracks calls to it and all arguments. 
            // A spy only exists in the describe or it block in which it is defined, and will be removed after each spec.
            // There are two matchers toHaveBeenCalled and toHaveBeenCalledWith which should be used with spies. 
            // - toHaveBeenCalled matcher will return true if the spy was called
            // - toHaveBeenCalledWith matcher will return true if the argument list matches any of the recorded calls to the spy.
            spyOn(calc, 'exponentiate');

            //call any method
            calc.exponentiate(2,5);
            
            //verify it got executed
            expect(calc.exponentiate).toHaveBeenCalled();
            expect(calc.exponentiate).toHaveBeenCalledWith(2,5);
        });

    });

    
});