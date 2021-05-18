export default class viewCart{
  modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';
    btnH = document.querySelector('.order-h-btn');
    constructor(showHistory){
        this.dom = document.querySelector('.history');
        this.DOMModal = document.getElementById('modalH');
        this.DOMFormWrapper = document.querySelector('.history');
        this.btnH.addEventListener('click',showHistory);
    }
    
    render(date){
      this.dom.innerHTML = date.map(el => this.renderCart(el)).join('');
      this.addListeners();
      this.DOMModal.classList.add(this.modalClassToggle);
      document.documentElement.classList.add(this.modalFreezeBack);
  }

  renderCart(el){
    console.log(el);
    return `
              
                <label class="label">order № ${ el[el.length-1] }</label>
                  <div class="modal-card-content">
                          <p>Order price: ${ el[el.length-3] }  customer name: ${el[el.length-2][0]} </p>  
                  </div>
              </div>
              
`;
}
addListeners(){
  //  document.querySelector('.btn_del_from_cart').addEventListener('click', this.handleSubmitChangeName);
  [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
}
closeModal = () => {
  this.DOMModal.classList.remove(this.modalClassToggle);
  document.documentElement.classList.remove(this.modalFreezeBack);
}
}