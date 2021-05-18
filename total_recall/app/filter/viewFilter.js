export default class ViewFilter{
    filters = document.querySelectorAll('a[data-filter]');
    constructor(handleFilterCategory){
        for (let filter of this.filters) {
            filter.addEventListener('click', handleFilterCategory);
        }
    }


    getCategory(type){
        let catId = type.target.dataset.filter;
        return catId; 
    };
}   