function problem1(){
    var num = parseInt(prompt("Please enter a number: ", ""));
    var prime=true;
    var d=2;

    var outputObj=document.getElementById("output");

    while (prime == true && d <= num/2){  
        if (num % d == 0){
            prime=false;
        }
        d = d + 1;
    }
    if (prime == true){
        outputObj.innerHTML=num+" is prime";
    }
    else {
        outputObj.innerHTML=num+" is not prime";
    }
    
}
function problem2(num){
    var num = parseInt(prompt("Please enter a number: ", ""));
    var outputObj=document.getElementById("output");
    let sum;
    for(sum = 0; num > 0;
        sum += num % 10,
        num = parseInt(num / 10));
    outputObj.innerHTML(problem2(num));

    
}
function problem3(){
    var num = parseInt(prompt("Please enter a number: ", ""));
    var outputObj=document.getElementById("output");
    if (num < 0) {
        outputObj.innerHTML('Error! Factorial for negative number does not exist.');
    }
    else if (num === 0) {
        outputObj.innerHTML(`The factorial of ${num} is 1.`);
    }
    else {
        let n = 1;
        for (i = 1; i <= num; i++) {
            n *= i;
        }
        outputObj.innerHTML(`The factorial of ${num} is ${n}.`);
    }
}
function problem4(){
    var num = parseInt(prompt("Please enter a number: ", ""));
    var outputObj=document.getElementById("output");
    let a = 0;
    let b = 1, c;
    outputObj.innerHTML('Fibanacci Series:');
    for(i = 1; i <=num; i++){
        outputObj.innerHTML(a);
        c = a + b;
        a = b;
        b = c;
    }
}

function problem5(){
    var outputObj=document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));

    for (var i = 0; i < num; i++){
        if ((prime(i)) && (has7(i))){
            outputObj.innerHTML+=i+", ";
        }
    }
}

    function has7(num){
        var temp = false;
        var digit;
    
        while (num > 0){
            digit = (num % 10)
    
            if (digit == 7) {
                temp = true;
                return temp;
            }
        num = Math.floor(num/10);
        }
        return temp;
    }


