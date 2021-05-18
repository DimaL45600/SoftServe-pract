export default class viewInfo{
    modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    constructor(){
        this.dom = document.querySelector('.info');
        this.DOMModal = document.getElementById('modalI');;
        this.DOMFormWrapper = document.querySelector('.info');
    }
    render(data){
        console.log(data);
        this.dom.innerHTML = this.renderCart(data);
        this.addListeners();
        this.DOMModal.classList.add(this.modalClassToggle);
        document.documentElement.classList.add(this.modalFreezeBack);
    }
    addListeners(){
        //  document.querySelector('.btn_del_from_cart').addEventListener('click', this.handleSubmitChangeName);
        [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
    }
    renderCart({ img, manufacture, pname, price, category, idp, amount , ingridients , units}){
        return `
                  
                    <label class="label">Product</label>
                      <div class="modal-card-image ">
                        <figure class="image is-75x75 is-medium text-center">
                        <img src="${ img }" alt=""${ pname }"">
                        </figure>
                      </div>
                      <div class="modal-card-content">
                              <p class="title is-4">${ pname } </p>
                              <p class="subtitle is-6">Manufacture: ${ manufacture } </p>
                              <p>Category: ${ category }</p>
                              <p>ingridients: ${ ingridients }</p>
                              <p>units: ${ units }</p>
                              <p class="price tag is-success is-medium is-right">cost of goods: ${ price }$</p>
                              <p class="price tag is-medium is-right">goods left: ${ amount }</p>
                                 
                      </div>
                  </div>
  `;
    }
    closeModal = () => {
        this.DOMModal.classList.remove(this.modalClassToggle);
        document.documentElement.classList.remove(this.modalFreezeBack);
    }
}
