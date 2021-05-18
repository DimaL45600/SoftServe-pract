export default class ViewChange{
    modalClassToggle = 'is-active';
    modalFreezeBack = 'is-clipped';

    constructor(handleSubmitChangeName){
        this.DOMFormWrapper = document.querySelector('.form_change');
        this.DOMModal = document.querySelector('.modal');

        this.handleSubmitChangeName = handleSubmitChangeName;
    }

    render(date){
        this.DOMFormWrapper.innerHTML = this.renderForm(date);
        this.addListeners();
        this.DOMModal.classList.add(this.modalClassToggle);
        document.documentElement.classList.add(this.modalFreezeBack);
    }

    addListeners(){
        document.querySelector('.btn_submit_change_name').addEventListener('click', this.handleSubmitChangeName);
        [...document.querySelectorAll('.btn_close_modal_form')].forEach(el => el.addEventListener('click', this.closeModal));
    }

    renderForm({ name }){
        return `
            <header class="modal-card-head">
                <p class="modal-card-title">Change Name</p>
                <button class="delete btn_close_modal_form" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label" for="inp_name">Name</label>
                    <div class="control">
                        <input class="input" type="text" 
                        placeholder="No one is chosen" 
                        id="inp_name" value="${ name }">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button 
                    class="button is-danger is-light btn_submit_change_name">Submit</button>
            </footer>
            `;
    }

    getName(){
        return document.querySelector('#inp_name').value;
    }

    closeModal = () => {
        this.DOMModal.classList.remove(this.modalClassToggle);
        document.documentElement.classList.remove(this.modalFreezeBack);
    }

}