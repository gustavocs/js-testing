AnotherClass = function() {};
 
AnotherClass.prototype.StartsWith  = function(inputStr, firstLetter) {
    return inputStr.startsWith(firstLetter);
}
AnotherClass.prototype.Invoke = function() {
    alert("I was called");

    return { obj: {}, success: true };
}

AnotherClass.prototype.GetSomething  = function() {
    var result = this.Invoke();

    if(result.success){
        return "Success!";
    }
    else {
        throw new Error("Error when calling service");
    }
}