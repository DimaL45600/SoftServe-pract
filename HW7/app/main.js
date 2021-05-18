// Task 1 start

class PaginationHelper {
    #kolPerPage
    #arr = [];
    #pageC
    #arrKol
    constructor(content,contentOnPage){
        this.#kolPerPage = +contentOnPage;
        this.#arrKol = content.length;
        let i = 0
        while(i < this.#arrKol){
            this.#arr.push(content.splice(0,contentOnPage));
            i += contentOnPage;
        }
        this.#pageC = this.#arr.length;
    }
    pageCount(){
        return this.#pageC;
    }
    itemCount(){
        return this.#arrKol;
    }
    pageItemCount(num){
        return num >= this.#pageC || num < 0 ? -1 : this.#arr[num].length;
    }
    pageIndex(num){
        return num < 0 || num >= this.#arrKol ? -1 : (Math.ceil((num+1)/this.#kolPerPage)-1);
    }
}
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

/*console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));*/

// Task 1 end
// Task 2 start

class Fighter {
    #name
    #health
    #attack
    constructor(name,health,attack){
        this.#name = name;
        this.#health = +health;
        this.#attack = +attack;
    }
    getName(){
        return this.#name;
    }
    getHealth(){
        return this.#health;
    }
    getAttack(){
        return this.#attack;
    }
}

function declareWinner (fighter1, fighter2, firstAttacker) {
    let name = [fighter1.getName(),fighter2.getName()];
    let health = [fighter1.getHealth(),fighter2.getHealth()];
    let attack = [fighter1.getAttack(),fighter2.getAttack()];
    if (firstAttacker != fighter1.getName()) {
        name.reverse();
        health.reverse();
        attack.reverse();
    }
    let flag = 0;
    while(flag == 0){
        health[1] -= attack[0];
        if(health[1] <= 0){
            flag = 1;
            break;
        }
        console.log(health);
        health[0] -= attack[1];
        if(health[0] <= 0){
            flag = 2;
            break;
        }
        console.log(health);
    }
    if(flag == 1){
        alert("WINNNNEEEER : " + name[0]);
    } 
    if(flag == 2) {
        alert("WINNNNEEEER : " + name[1]);
    }
    console.log(health);
}
let fF = new Fighter ("Stalone", 1000, 100);
let sF = new Fighter ("Schwarzenegger", 800, 150);
declareWinner(fF,sF,"Stalone");
// Task 2 end