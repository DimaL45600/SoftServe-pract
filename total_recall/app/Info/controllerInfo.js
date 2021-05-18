import viewInfo from "./viewInfo.js";

export default class controllerInfo{
    constructor(publisher){
        this.view = new viewInfo();
        publisher.subscribe('INFO', this.handleInfo);
    }

    handleInfo = data =>{
        this.view.render(data);
    }
}