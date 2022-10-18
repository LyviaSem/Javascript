function revert(str){
    let newString ='';

    if ( typeof str == 'string'){
        const myArray= str.split(" ");

        for(i = myArray.length-1; i>=0; i--){
            for(j = myArray[i].length-1; j>=0; j--){
               newString += myArray[i][j];
            }
            newString += " ";
        }
        return newString;
     
    }
    else{
        return null;
    }
}

function ucFirst(word){
    let newWord ="";
    
    if ( typeof word == 'string'){
        for (i = 0; i <= word.length; i++){
            if (i == 0){
                newWord += word.charAt(i).toUpperCase();
            }
            else{
                newWord += word.charAt(i);
            }
        }
        
        return newWord
    }
    else{
        return null;
    }
    
}

//console.log(revert("Hello I'm Robert !"));
console.log(ucFirst("hello"));