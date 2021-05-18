export default class modelCart{
    #cart = [];

    loadFromLS(){
        this.#cart = JSON.parse(localStorage.getItem('cart') || "[]");
        return this.cart;
    }

    get cart(){
        return JSON.parse(JSON.stringify(this.#cart));
    }

    addCart(data){
        if(!this.#cart.find(({ idp }) => idp === data.idp)){
            data.amount = 1;
            this.#cart.push(data);
        }else{
            this.#cart.find(({ idp }) => idp === data.idp).amount++;
        }
        this.writeToLS();
        return this.cart;
    }
    
    removeById(id){
        if(this.#cart.find(({ idp }) => idp === id).amount == 1){
        this.#cart = this.#cart.filter(date => date.idp != id);
        this.writeToLS();
        }
        else{
            this.#cart.find(({ idp }) => idp === id).amount--; 
            this.writeToLS(); 
        }
        return this.cart;
    }
    cartSum(){
        let sum = 0
        this.#cart.map(el => sum += el.amount*el.price);
        return sum;

    }

    writeToLS(){
        localStorage.setItem('cart', JSON.stringify(this.#cart));
    }
}