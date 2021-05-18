import viewOrder from "./viewOrder.js";
import modelOrder from "./modelOrder.js"

export default class controllerOrder{
    constructor(publisher){
        this.view = new viewOrder(this.handleOrder,this.submitOrder);
        this.model = new modelOrder();
        this.load();
    }

    load(){
        const cart = this.model.loadFromLS();
        return cart
    }

    handleOrder = () => {
        let data = this.load();
        this.view.render(data, this.model.cartSum());
    }
    
    submitOrder = () => {
        let orderInfo = this.view.getData();
        this.model.makeOrder(orderInfo);
        alert("Order success");
        this.view.closeModal();
    }
}