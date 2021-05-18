import ViewFilter from './viewFilter.js';

export default class ControllerFilter{
    constructor(publisher){
        this.view = new ViewFilter(this.handleFilterCategory);
        this.publisher = publisher;
        this.publisher.notify('FILTER_BY_CATEGORY', "All");
    }

    handleFilterCategory = type => {
        console.log(type);
        const category = this.view.getCategory(type);
        console.log(category);
        this.publisher.notify('FILTER_BY_CATEGORY', category);
    }
}