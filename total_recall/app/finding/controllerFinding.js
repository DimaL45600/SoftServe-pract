import ViewFinding from './viewFinidng.js';

export default class ControllerFinding{
    constructor(publisher){
        this.view = new ViewFinding(this.handleFindingNames);
        this.publisher = publisher;

    }


    handleFindingNames = () => {
        const names = this.view.getNames();
        this.publisher.notify('FILTER_BY_NAMES', names);
    }
}