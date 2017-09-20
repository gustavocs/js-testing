BusinessClass = function BusinessClass(serviceInstance) {
    if(serviceInstance)
        this.service = serviceInstance;
    else
        this.service = new Service();
}

BusinessClass.prototype.StartsWith  = function(inputStr, letter) {
    return inputStr.startsWith(letter);
}

BusinessClass.prototype.GetSomething  = function() {
    var result = this.service.Get();

    if(result.success){
        return "Success!";
    }
    else {
        throw new Error("Error when calling service");
    }
}


BusinessClass.prototype.PostSomething  = function() {
    var result = this.service.Post();

    if(result.success){
        return "Success!";
    }
    else {
        throw new Error("Error when calling service");
    }
}