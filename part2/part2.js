class Mapi  {
  constructor(list){
    this.list = list ? Object.fromEntries(list) : {};
    this.size = list ? Object.values(list).length : 0;
  }
  set(key, elt){
    this.list[key] = elt;
    this.size = Object.keys(this.list).length;
  }

  delete(key){
    delete this.list[key];
    this.size = Object.keys(this.list).length;
  }

  get(key){
    return this.list[key];
  }

  has(key){
    return Object.hasOwn(this.list,key);
  }

  values(){
    return Object.values(this.list);
  }

  keys(){
    return Object.keys(this.list);
  }
  
}



const getHashTags = (str) => str.toLowerCase().split(' ').sort((a, b) => b.length - a.length).slice(0,3).map(str => "#" + str);
const removeDuplicate = (array) => Array.from(new Set(array));
const intersection = (first, second) => removeDuplicate(first).filter(x => removeDuplicate(second).includes(x));
const arrayDiff = (first, second) => first.concat(second).filter(x=> !intersection(first, second).includes(x));

const combinations = (...number) => number.reduce((previousValue, currentValue) => previousValue * currentValue);

const fiscalCode = (personne) => { 
  let numconsonnes = 0;
  let consonnes = "";
  let voyelles = "";
  let numconsonne = 0;
  let consonne = "";
  let voyelle = "";
  let fc = "";
  for(i=0; i<personne.surname.length; i++){
      if(personne.surname[i].toLowerCase().match(/[b-d,f-h,j-n,p-t,v-z]/)){
        consonnes += personne.surname[i].toUpperCase();
        numconsonnes += 1
      }
      else{
        voyelles += personne.surname[i].toUpperCase();
      }
  }

  for(i=0; i<personne.name.length; i++){
    if(personne.name[i].toLowerCase().match(/[b-d,f-h,j-n,p-t,v-z]/)){
      consonne += personne.name[i].toUpperCase();
      numconsonne += 1
    }
    else{
      voyelle += personne.name[i].toUpperCase();
    }
}
  //nom
    if( numconsonnes >= 3 ){
      for(i=0; i<3; i++){
        fc += consonnes[i];
      }
    }
    else if(numconsonnes < 3 && numconsonnes != 0 && personne.surname.length > 3){
      fc += consonnes;
      i = 0;
      while (fc.length < 3){
        fc += voyelles[i];
        i++;
      }
    }
    else if(personne.surname.length < 3) {
      fc += consonnes + voyelles + "X"
    }

    //prenom
    if( numconsonne == 3 ){
        fc += consonne;
    }
    else if(numconsonne > 3){
      fc+= consonne[0]+consonne[2]+consonne[3];
    }
    else if(numconsonne < 3 && numconsonne != 0){
      fc += consonne;
      i = 0;
      while (fc.length < 3){
        fc += voyelle[i];
        i++;
      }
    }
    else if(personne.name.length < 3) {
      fc += consonne + voyelle + "X"
    }

    //date genre
    let date = personne.dob.split("/");
    console.log(date);
    fc += date[2][2] + date[2][3] ;

    switch(date[1]){
      case "1": fc += "A";
      break;
      case "2": fc += "B";
      break;
      case "3": fc += "C";
      break;
      case "4": fc += "D";
      break;
      case "5": fc += "E";
      break;
      case "6": fc += "H";
      break;
      case "7": fc += "L";
      break;
      case "8": fc += "M";
      break;
      case "9": fc += "P";
      break;
      case "10": fc += "R";
      break;
      case "11": fc += "S";
      break;
      case "12": fc += "T";
      break;
    }

    if(personne.gender == "M"){
      if(parseInt(date[0]) < 10){
        fc += "0"+date[0];
      }
      else{
        fc += date[0];
      }
    }
    else{
      let jour = parseInt(date[0]) + 40;
      fc += jour.toString();
    }

    return fc;
}


const lcm = (values) => values.reduce(lcmFunc);
const pgcd = (a,b) => ((a%=b)==0)? b: pgcd(b,a);
const lcmFunc = (a, b) => a * b / pgcd(a, b);

const merge = (obj1,obj2) => console.log(Object.assign({}, obj1, obj2));
const students = [ { name: "Dupont", cours: [ 1, 3, 5 ] }, { name: "Lea", cours: [ 2, 4, 11] }, { name: "Charles", cours: [1] } ];
const courses = [{id: 1, name: "JS" }, { id: 2, name: "PHP" }, { id: 3, name: "C#" }, { id: 4, name: "F#" }, { id: 5, name: "CSS" }];

const getStudents = () => {return new Promise((resolve,reject)=> {
  setTimeout(() => { 
    resolve(students); 
  }, 1500);});
}



const getCourses = () => {return new Promise((resolve,reject)=> {
  setTimeout(() => { 
    resolve(courses); 
  }, 3000);});
}

const getStudentsCourses = () => null;

module.exports = {
  getHashTags,
  removeDuplicate,
  intersection,
  arrayDiff,
  combinations,
  fiscalCode,
  lcm,
  merge,
  getStudents,
  getCourses,
  getStudentsCourses,
  Mapi,
}
