import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';

export default class ControllerDates{
    constructor(Publisher){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToCart, this.handleClickInfo);

        this.load();
        this.publisher = Publisher;
        // this.publisher.subscribe('TO_RELOAD_DATES', this.handleReloadDates);
        this.publisher.subscribe('FILTER_BY_NAMES', this.handleFindingByNames);
        this.publisher.subscribe('FILTER_BY_CATEGORY', this.handleFilterByCategory);
        this.publisher.subscribe('SORT_BY_PRICE', this.handleSortByPrice);
    }

    load(){
        this.model.load()
            .then(d => {
                this.view.render(d);
                // const minMaxDates = this.model.findMinMaxDates();    
                // this.publisher.notify('FIND_MIN_MAX_DATES', minMaxDates);
            });

    }

    handleClickAddToCart = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_CART', date);
    }

    handleClickInfo = ev => {
        const data = this.getDateByEvent(ev);
        this.publisher.notify('INFO', data);
    }

    getDateByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getDateById(id);
    }

    handleReloadDates = () => {
        this.load();
    }

    handleFindingByNames = names => {
        const findingNames = this.model.findingByNames(names);
        this.view.render(findingNames);
    }
    handleFilterByCategory = category => {
        const findingNames = this.model.FilterByCategory(category);
        this.view.render(findingNames);
    }
    handleSortByPrice = sort => {
        const findingNames = this.model.SortByPrice(sort);
        console.log(findingNames);
        this.view.render(findingNames);
    }
}