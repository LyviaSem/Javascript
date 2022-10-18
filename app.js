function revert(str){
    let newString ='';
    let newPhrase = "";

    if (str != null){
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

console.log(revert("Hello I'm Robert !"));