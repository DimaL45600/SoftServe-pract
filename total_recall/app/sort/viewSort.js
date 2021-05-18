export default class ViewSort{
    btnSort = document.querySelector('.sort-btn');
    sort = false;
    constructor(handleSort){
            this.btnSort.addEventListener('click', handleSort);
            
    }


    getSort(){
        let s = this.sort;
        switch (this.sort) {
            case false:
                this.sort = true;
                break;
            case true:
                this.sort = -1;
                break;
            case -1:
                this.sort = false;
                break;
            default:
                break;
        }
        return s; 
    };
}   