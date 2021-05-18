import modelHistory from "./modelHistory.js";
import viewHistory from "./viewHistory.js";

export default class controllerCart{
    constructor(publisher){
        this.model = new modelHistory();
        this.view = new viewHistory(this.showHistory);
        this.load();
    }

    load(){
        let history = this.model.loadFromLS();
        return history
    }

    showHistory = () => {
        let history = this.load();
        if(history.length > 0)
        this.view.render(history);
    }
}