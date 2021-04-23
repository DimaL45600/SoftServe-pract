// Task 1 start
class Hex {
    constructor(num){
        this.num = +num;
        this.hex = this.decToHex();
    }
    decToHex(){
        return Number(this.num).toString(16);
    }
    hexToDec (){
        return parseInt(this.hex,16);
    }
    plus (Hex){
        this.num += Hex.num;
        this.hex = this.decToHex();
        console.log(this.hex);  
    }
    minus (Hex){
        this.num -= Hex.num;
        this.hex = this.decToHex();
        console.log(this.hex);
    }
}

buttonT1.onclick = function(){
    let num = inputT1.value;
    let a = new Hex(num);
    let b = new Hex(5);
    for(let i = 0; i < 5; i++){
        a.plus(b);
    }
    for(let i = 0; i < 5; i++){
        a.minus(b);
    }  
}
// Task 1 end
// Task 2 start
class dictionary {
    constructor(){
        this.words = new Array();
        this.meanings = new Array();
    }
    add(word,meaning){
        if(this.words.indexOf(word) == -1){
            this.words.push(word);
            this.meanings.push(meaning);
            console.log("новое слово успешно добавлено");
        }
        else{
            console.log("такое слово уже существует");
        }
    }
    findWord(word){
        let wordPos = this.words.indexOf(word);
        wordPos >=0 ? console.log("значение слова " + word + ": " + this.meanings[wordPos]) : console.log("Такое слово не найдено");
    }
}
let w = new dictionary();

buttonT2.onclick = function(){
    w.add(inputT2.value,inputT22.value);
}
buttonT22.onclick = function(){
    w.findWord(inputT2.value);
}
// Task 2 end