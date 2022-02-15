function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var fibo=[];
        var a = 0;
        var b = 1;
        var c;
        while(n != 0){
            c = a
            fibo.push(c);
            n--;
            c = a+b;
            a = b;
            b = c;
        }
        return fibo;
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    console.log(fibonacciGenerator(10));
    
    