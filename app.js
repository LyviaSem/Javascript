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
        for (i = 0; i < word.length; i++){
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

function capitalize(str){
    let newString = "";

    if ( typeof str == 'string'){
        const myArray= str.split(" ");

        for(i = 0; i < myArray.length; i++){
            for(j = 0; j < myArray[i].length; j++){
                if(j == 0){
                    newString += myArray[i][j].toUpperCase();
                }
                else{
                    newString += myArray[i][j];
                }
            }
            newString += " ";
        }
        return newString;
    }
    else{
        return null;
    }
}

function pascalCase(str){
    let newString = "";

    if ( typeof str == 'string'){
        const myArray= str.split(" ");

        for(i = 0; i < myArray.length; i++){
            for(j = 0; j < myArray[i].length; j++){
                if(j == 0){
                    newString += myArray[i][j].toUpperCase();
                }
                else{
                    newString += myArray[i][j];
                }
            }
        }
        return newString;
    }
    else{
        return null;
    }
}

function  palindrome(str){
    let lettre = "";
    let Dlettre ="";

    if ( typeof str == 'string'){

        for(i = 0; i < str.length; i++){
            if(i == 0){
                lettre = str.charAt(i);
            }
            else{
                Dlettre = str.charAt(i);
            }
        }
        if(lettre == Dlettre){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return null;
    }
}

function  findLongestWord(str){
    let compte;
    let comparaison = 0;
    let mot = "";

    if ( typeof str == 'string'){
        const myArray= str.split(" ");

        for(i = 0; i < myArray.length; i++){
            compte = 0;
            for(j = 0; j < myArray[i].length; j++){
                compte += 1;
            }

            if(compte > comparaison){
                comparaison = compte;
                mot =myArray[i];
            }
        }
        return mot;
    }
    else{
        return null;
    }
}

/*console.log(revert("Hello I'm Robert !"));
console.log(ucFirst("hello"));
console.log(capitalize("hello i’m robert"))
console.log(pascalCase("sentence in pascalCase"));
console.log(palindrome("kayak"));*/
console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur"));