import modelCart from "./modelCart.js";
import viewCart from "./viewCart.js";

export default class controllerCart{
    constructor(publisher){
        this.model = new modelCart();
        this.view = new viewCart(this.handleRemoveFromCart, this.handleOpenCart);
        publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
        this.load();
    }

    load(){
        const cart = this.model.loadFromLS();
        this.view.count(cart.length);
        return cart
    }

    handleOpenCart = () => {
        let cart = this.load();
        if(cart.length > 0)
        this.view.render(cart, this.model.cartSum());
    }

    handleAddToCart = data => {
        const newCart = this.model.addCart(data);
        this.view.count(newCart.length);
    }

    handleRemoveFromCart = ev => {
        const id = ev.target.dataset.id;
            const newCart = this.model.removeById(id);
            newCart.length > 0 ? this.view.render(newCart, this.model.cartSum()) : this.view.closeModal();
    }

}