function selectPrimeNumbers(array){
    const primes = [] ;
    for(let i=0; i < array.length; i++){
        const num = array[i] ;
        if(isPrime(num)){
            primes.push(num) ;
        }
    }
    console.log(primes) ;
}

function isPrime(num){
    if(num == 1){
        return false ;
    }
    else if(num == 2){
        return true ;
    }
    for(let i=2; i*i < num ; i++){
        if(num%i == 0){
            return false ;
        }
    }
    return true ;
}