export default class ViewDates{
    btnsAddToCart = '.btn_add_to_cart';
    btnsInfo = '.btn-info';
    constructor(handleClickAddToCart, handleClickInfo){
        this.dom = document.querySelector('.dates');
        this.handleClickAddToCart = handleClickAddToCart;
        this.handleClickInfo = handleClickInfo;
    }

    render(d){
        this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');

        this.addListeners();
    }

    renderCard({ img, manufacture, pname, price, ingridients, category, idp }){
        return `
        <div class="col">
        <div class="card" >
        <div class="card-image ">
          <figure class="image is-4by3 is-medium">
            <img src="${ img }" alt=""${ pname }"">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${ pname } </p>
              <button type="button" class="btn btn-info" data-id="${ idp }">INFO</button>
              <p class="price tag  is-large is-center">Price:${ price }$</p>
              <p><button class="button  is-warning  btn_add_to_cart" data-id="${ idp }">Add to Cart</button></p>
            </div>
          </div>         
        </div>        
      </div>
      </div>`;
    }

    addListeners(){
        [...document.querySelectorAll(this.btnsAddToCart)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToCart));

        [...document.querySelectorAll(this.btnsInfo)]
            .forEach(btn => btn.addEventListener('click', this.handleClickInfo));
    }
}