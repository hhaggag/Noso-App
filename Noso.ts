
class EnglishLetters {
    name:string;
    word:string;
    simpleImg:any;
    playWord() :string {
        return this.name + " " + this.word;
    }
};

var EnglishLetterA : EnglishLetters = new EnglishLetters();

EnglishLetterA.name = "A";
EnglishLetterA.word = "Apple";
EnglishLetterA.simpleImg = "./Img/Apple.jpeg";

console.log(EnglishLetterA.playWord());

var EnglishLetterB : EnglishLetters = new EnglishLetters();

EnglishLetterB.name = "B";
EnglishLetterB.word = "Ball";
EnglishLetterB.simpleImg = "./Img/Apple.jpeg";

console.log(EnglishLetterB.playWord());

var EnglishLetterC : EnglishLetters = new EnglishLetters();

EnglishLetterC.name = "C";
EnglishLetterC.word = "Car";
EnglishLetterC.simpleImg = "./Img/Apple.jpeg";

console.log(EnglishLetterC.playWord());

var EnglishLetterD : EnglishLetters = new EnglishLetters();

EnglishLetterD.name = "D";
EnglishLetterD.word = "Dog";
EnglishLetterD.simpleImg = "./Img/Apple.jpeg";

console.log(EnglishLetterD.playWord());

var EnglishLetterE : EnglishLetters = new EnglishLetters();

EnglishLetterE.name = "E";
EnglishLetterE.word = "Elephant";
EnglishLetterE.simpleImg = "./Img/Apple.jpeg";

console.log(EnglishLetterE.playWord());

var EnglishLetterF : EnglishLetters = new EnglishLetters();

EnglishLetterF.name = "F";
EnglishLetterF.word = "Fish";


console.log(EnglishLetterF.playWord());

var EnglishLetterG : EnglishLetters = new EnglishLetters();

EnglishLetterG.name = "G";
EnglishLetterG.word = "Goat";


console.log(EnglishLetterG.playWord());

var EnglishLetterH : EnglishLetters = new EnglishLetters();

EnglishLetterH.name = "H";
EnglishLetterH.word = "Hourse";

console.log(EnglishLetterH.playWord());

var EnglishLetterI : EnglishLetters = new EnglishLetters();

EnglishLetterI.name = "I";
EnglishLetterI.word = "Icecream";

console.log(EnglishLetterI.playWord());

var EnglishLetterJ : EnglishLetters = new EnglishLetters();

EnglishLetterJ.name = "J";
EnglishLetterJ.word = "Jacket";

console.log(EnglishLetterJ.playWord());

var EnglishLetterK : EnglishLetters = new EnglishLetters();

EnglishLetterK.name = "K";
EnglishLetterK.word = "Key";

console.log(EnglishLetterK.playWord());

var EnglishLetterL : EnglishLetters = new EnglishLetters();

EnglishLetterL.name = "L";
EnglishLetterL.word = "Lion";

console.log(EnglishLetterL.playWord());

var EnglishLetterM : EnglishLetters = new EnglishLetters();

EnglishLetterM.name = "M";
EnglishLetterM.word = "Monckey";

console.log(EnglishLetterM.playWord());

var EnglishLetterN : EnglishLetters = new EnglishLetters();

EnglishLetterN.name = "N";
EnglishLetterN.word = "Newspaper";

console.log(EnglishLetterN.playWord());

var EnglishLetterO : EnglishLetters = new EnglishLetters();

EnglishLetterO.name = "O"
EnglishLetterO.word = "Orange"

console.log(EnglishLetterO.playWord());

var EnglishLetterP : EnglishLetters = new EnglishLetters();

EnglishLetterP.name = "P";
EnglishLetterP.word = "Pen";

console.log(EnglishLetterP.playWord());

var EnglishLetterQ : EnglishLetters = new EnglishLetters();

EnglishLetterQ.name = "Q";
EnglishLetterQ.word = "Queen";

console.log(EnglishLetterQ.playWord());

var EnglishLetterR : EnglishLetters = new EnglishLetters();

EnglishLetterR.name = "R";
EnglishLetterR.word = "Ring";

console.log(EnglishLetterR.playWord());

var EnglishLetterS : EnglishLetters = new EnglishLetters();

EnglishLetterS.name = "S";
EnglishLetterS.word = "Snak";

console.log(EnglishLetterS.playWord());

var EnglishLetterT : EnglishLetters = new EnglishLetters();

EnglishLetterT.name = "T";
EnglishLetterT.word = "Train";

console.log(EnglishLetterT.playWord());

var EnglishLetterU : EnglishLetters = new EnglishLetters();

EnglishLetterU.name = "U";
EnglishLetterU.word = "Umbrella";

console.log(EnglishLetterU.playWord());

var EnglishLetterV : EnglishLetters = new EnglishLetters();

EnglishLetterV.name = "V";
EnglishLetterV.word = "Violin";

console.log(EnglishLetterV.playWord());

var EnglishLetterW : EnglishLetters = new EnglishLetters();

EnglishLetterW.name = "W";
EnglishLetterW.word = "Water";

console.log(EnglishLetterW.playWord());

var EnglishLetterX : EnglishLetters = new EnglishLetters();

EnglishLetterX.name = "X";
EnglishLetterX.word = "Xylophone";

console.log(EnglishLetterX.playWord());

var EnglishLetterY : EnglishLetters = new EnglishLetters();

EnglishLetterY.name = "Y";
EnglishLetterY.word = "Yellow";

console.log(EnglishLetterY.playWord());

var EnglishLetterZ : EnglishLetters = new EnglishLetters();

EnglishLetterZ.name = "Z";
EnglishLetterZ.word = "Zero";

console.log(EnglishLetterZ.playWord());

var myPword = document.getElementsByClassName('word');
var myEnglishLetters =[EnglishLetterA, EnglishLetterB, EnglishLetterC, EnglishLetterD, EnglishLetterE, EnglishLetterF, EnglishLetterG, EnglishLetterH, EnglishLetterI, EnglishLetterJ, EnglishLetterK, EnglishLetterL, EnglishLetterM, EnglishLetterN, EnglishLetterO, EnglishLetterP, EnglishLetterQ, EnglishLetterR, EnglishLetterS, EnglishLetterT, EnglishLetterU, EnglishLetterV, EnglishLetterW, EnglishLetterX, EnglishLetterY, EnglishLetterZ];
var i;
for(i=0; i<=25; i++)
{
    let myP = document.createElement('p');
    let myDivLetter = document.createElement('div').appendChild(myP);
    let myExample =  document.getElementById('word');
    let mySimpleWord = myEnglishLetters[i].word;
    let mySimpleImg = myEnglishLetters[i].simpleImg;
    let myExImg = document.getElementById('Simg');
    myP.classList.add("leb");
    myP.innerText = myEnglishLetters[i].name;
    myDivLetter.addEventListener('click', function(){ 
    myExample.innerHTML = mySimpleWord;
    myExImg.setAttribute("src", (mySimpleImg));
    });
    document.getElementById('buttons').appendChild(myDivLetter).classList.add("clicks");
};
var myDivArray = [document.getElementsByClassName('clicks')];
