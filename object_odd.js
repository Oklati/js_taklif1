function separateOddEven(array){
    separatedNumbers = {
        odd: [] ,
        even: [] ,
    };
    for(let i=0; i < array.length ; i++){
        if(array[i] % 2 == 0){
            separatedNumbers.even.push(array[i]) ;
        }
        else{
            separatedNumbers.odd.push(array[i]) ;
        }
    }
    return separatedNumbers ;
}