//Common patters in cp

//1) Recursive funtions(for problems like fibonacci, factorial, tree traversals)
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//2) helper functions (to keep main logic clean)
function isPrime(num){
    if(num <=1) return false;
    for (let i= 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
        }
        return true;
}

function countPrimeInRange(a,b){
    let count= 0;
    for (let i = a; i <=b; i++){
        if(isPrime(i)) count++;
    }
    return count;
}