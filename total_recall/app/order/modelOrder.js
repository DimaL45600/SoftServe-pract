export default class modelOrder{
    #order = [];
    #orderHistory = []
    loadFromLS(){
        this.#order = JSON.parse(localStorage.getItem('cart') || "[]");
        return this.#order;
    }
    cartSum(){
        let sum = 0
        this.#order.map(el => sum += el.amount*el.price);
        return sum;
    }

    makeOrder(orderInfo){
        this.#order.push(this.cartSum());
        this.#order.push(orderInfo);
        this.#orderHistory = JSON.parse(localStorage.getItem('orderHistory') || "[]");
        this.#order.push(this.#orderHistory.length+1);
        this.#orderHistory.push(this.#order);
        localStorage.setItem('orderHistory', JSON.stringify(this.#orderHistory));
        console.log(this.#orderHistory);
        this.loadFromLS();
        console.log(this.#order);
    }
}