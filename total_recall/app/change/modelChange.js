export default class ModelChange{
    constructor(){

    }

    updateDate(name){
        this.date.name = name;
        fetch(`https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/dates/${ this.date.id }`, {
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(this.date)
        });
    }
}