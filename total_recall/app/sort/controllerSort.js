import ViewSort from './viewSort.js';

export default class ControllerSort{
    constructor(publisher){
        this.view = new ViewSort(this.handleSort);
        this.publisher = publisher;
    }

    handleSort = () => {
        const sort = this.view.getSort();
        console.log(sort);
        this.publisher.notify('SORT_BY_PRICE', sort);
    }
}