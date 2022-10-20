function revert(str){
    if (typeof (str) == 'string') {
        return str.split('').reverse().join('');
      } 
      return null
}

function ucFirst (word){
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

function capitalize (str){
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
          if(i < myArray.length-1){
            newString +=" ";
          }
      }
      return newString;
  }
  else{
      return null;
  }
}

function pascalCase (str){
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

function palindrome(str) {

    if ( typeof str == 'string'){
        
        if (str.toLowerCase == revert(str.toLowerCase)){
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


function findLongestWord(str) {
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

function leet(str) {
  let mot = "";

    if ( typeof str == 'string'){

        for(i = 0; i < str.length; i++){
            switch(str.charAt(i).toLowerCase()){
                case 'a': 
                     mot += "4";
                    break;
                case 'e': 
                    mot += "3";
                    break;
                case 'i': 
                    mot += "1";
                    break;
                case 'o': 
                    mot += "0";
                    break;
                case 'u': 
                    mot += "(_)";
                    break;
                case 'y': 
                    mot += "7";
                    break;
                default:
                    mot += str.charAt(i);
            }
        }
        return mot;
    }
    else{
        return null;
  }
}

function prop_access(object, path) {}

function type_check_v1(data, type) {}

function type_check_v2(val, condition) {}

module.exports = {
  revert,
  ucFirst,
  capitalize,
  pascalCase,
  palindrome,
  leet,
  findLongestWord,
  prop_access,
  type_check_v1,
  type_check_v2,
}