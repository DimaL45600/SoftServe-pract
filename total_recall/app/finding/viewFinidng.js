export default class ViewFinding{
    btnNameFinding = document.querySelector('.search-btn');
    inputName = document.querySelector('.nameSearch');

    constructor(handleFindingNames){
        this.btnNameFinding.addEventListener('click', handleFindingNames);
    }

    getNames(){
        return {
            Name : this.inputName.value
        };
    }
}