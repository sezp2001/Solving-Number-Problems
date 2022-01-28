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
function problem2(){
    var outputObj = document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML = "number: " + num + "<br><br>Sum of digits: "; 
    var digit = 0;
    var sum = 0;
  
    while(num > 0)
    {
        digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num/10);    
       
    }
    outputObj.innerHTML=outputObj.innerHTML+sum.toFixed();
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
    
}
function problem3(){
    var outputObj = document.getElementById("output");
    var n = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML = "number: " + n + "<br><br>" + n + "! = "; 
  
    var fact= 1;

    while(n > 0)
    {
        fact = fact * n;
        n = n-1;
    }

    outputObj.innerHTML=outputObj.innerHTML+ fact;
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function problem4(){
    var outputObj = document.getElementById("output");
    var n = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML = "number: " + n + "<br><br> Fibonacci = "; 

    var a = 0;
    var b = 1;
    var fib;
    var i;

    for(i=0; i<=n; i=i+1){
         
        if (i>1){
            fib = a + b;
            a = b;
            b = fib;
        }

        else {
            fib = i;
        }

      outputObj.innerHTML=outputObj.innerHTML+ fib + ", ";
  }
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
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
    function prime(num){
        var flag = true;
        var d = 2; 
    
        while (flag == true && d <= num/2) 
        {
            if ((num % d) == 0){
                flag = false;
            }
            d = d + 1;
        }
        return flag;
    }


