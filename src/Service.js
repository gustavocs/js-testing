Service = function() {};
 
Service.prototype.Get = function() {
    alert("Method Get called");

    return { obj: { a: "Example" }, success: true };
}
Service.prototype.Post = function() {
    alert("Method Post called");

    return { success: true };
}
