export default class modelHistory{
    #History = [];

    loadFromLS(){
        this.#History = JSON.parse(localStorage.getItem('orderHistory') || "[]");
        return this.#History;
    }
}