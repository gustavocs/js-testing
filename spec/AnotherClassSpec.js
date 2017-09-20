describe("AnotherClass", function() {
    var obj;

    beforeEach(function() {
        obj = new AnotherClass();
    });
 
    describe("test functions in different browsers", function(){
    
        it("testing multiple browsers", function() {
             var result = obj.StartsWith("Test", "T");

            expect(result).toBeTruthy();
        });

    });

    describe("mocking external dependencies", function(){

        it("mocking a dependency", function() {

            //creates the spy and mocks the result
            spyOn(obj, 'Invoke').and.callFake(function() {
                return { success: true };
            });

            //call 
            var result = obj.GetSomething();
            
            //verify if message is ok
            expect(result).toBe("Success!");
        });

        it("another sample", function() {

            //creates the spy and mocks the result
            spyOn(obj, 'Invoke').and.callFake(function() {
                return { success: false };
            });

            var getSomething = function(){ obj.GetSomething(); }

            //call and verify if threw an error
            expect(getSomething).toThrowError();
        });
    });

});