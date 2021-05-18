export default class viewOrder{
    modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    btnOrder = document.querySelector('.order-btn');
    btnSOrder = document.querySelector('.valid');
    constructor(handleOrder,submitOrder){
        this.dom = document.querySelector('.order');
        this.DOMModal = document.getElementById('modalO');
        this.DOMFormWrapper = document.querySelector('.order');
        this.footer = document.querySelector('.footero');
        this.btnOrder.addEventListener('click',handleOrder);
        this.btnSOrder.addEventListener('submit',submitOrder);
    }
    render(data, sum){
        console.log(data);
        console.log(sum);
        //this.dom.innerHTML = this.renderCard();
        this.footer.innerHTML = this.renderFooter(sum);
        this.addListeners();
        this.DOMModal.classList.add(this.modalClassToggle);
        document.documentElement.classList.add(this.modalFreezeBack);
    }
    addListeners(){
        [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
        //document.querySelector('.submitOrder').addEventListener('click', this.getData);
    }
    renderCard(){
        return `
                  
                    <label class="label">order info</label>
                      <div class="modal-card-content">
                      <form>
                        <p>Заполните форму (все поля  обязательны)</p>
                        <p>Имя: <input name="name" id = "name" value = "" required></p>
                        <p>Email: <input type="email" name="email" id = "email" value = "" required></p>
                        <p>Phone: <input type="tel" name="tel"  pattern="[0-9]{10}" id = " value = "" required></p>
                        <p><input type="submit" class="submitOrder" value="Оформить"></p>
                    </form>  
                      </div>
                  </div>
  `;
    }
    renderFooter(sum){
        return `
        <p class="price tag is-medium is-right">All-price: ${ sum } $</p>
        `
    }
    closeModal = () => {
        this.DOMModal.classList.remove(this.modalClassToggle);
        document.documentElement.classList.remove(this.modalFreezeBack);
    }
    getData(){
        let info = new Array;
        info.push(document.getElementById('name').value);
        info.push(document.getElementById('email').value);
        info.push(document.getElementById('phone').value);
        console.log(info);
        return info;
    }
}
