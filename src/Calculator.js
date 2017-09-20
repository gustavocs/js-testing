Calculator = function() {};
 
Calculator.prototype.sum = function(n1, n2) {
    return n1 + n2;
}
 
Calculator.prototype.subtract = function(n1, n2) {
    return n1 - n2;
}
 
Calculator.prototype.multiply = function(n1, n2) {
    return n1 * n2;
}
 
Calculator.prototype.divide = function(n1, n2) {
    if (n2 == 0) {
        throw new Error("There is no division by zero");
    }
    return n1/n2;
}

Calculator.prototype.exponentiate = function(base, n) {
   var result; 

   if(n == 0) {
        result = 1;
    } 
    else {
        result = base;
        for(var i = n; i > 1; i--){
            result *= base;
        } 
    }
    return result;
}