export default class ModelDates{
    #apiUrl = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    #products = [];
    #data = [];

    load(){
        return fetch(this.#apiUrl)
            .then(r =>  r.json() )
            .then(d => {
                this.#data = d;
                let idp = 0;
                let pname = "";
                let manufacture = "";
                let category = "";
                let ingridients = "";
                let amount = 0;
                let units = "";
                let price = "";
                let img = "";
                for (var key in this.#data.feed.entry) {
                     if(this.#data.feed.entry[key].title.$t.indexOf('A') != -1 )
                     idp = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('B') != -1 )
                    pname = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('C') != -1 )
                    manufacture = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('D') != -1 )
                    category = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('E') != -1 )
                    ingridients = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('F') != -1 )
                    amount = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('G') != -1 )
                    units = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('H') != -1 )
                    price = this.#data.feed.entry[key].content.$t;
                    if(this.#data.feed.entry[key].title.$t.indexOf('I') != -1 )
                    img = this.#data.feed.entry[key].content.$t;
                    this.#products[idp] = {idp : idp, pname : pname, manufacture : manufacture, category : category, ingridients : ingridients, amount : amount, units : units, price : price, img : img}    
                }
                return this.#products = this.#products.filter((el) =>  el != null);
                
            });
    }

    get data(){
        // return this.#data.map(el => Object.assign({}, el));
        return this.copy(this.#products);
    }

    getDateById(find_id){
        return this.copy(this.#products.find(({ idp }) => idp === find_id));
    }

    copy(d){
        return JSON.parse(JSON.stringify(d));
    }

    getLeaderZero(d){
        return d < 10 ? `0${ d }` : d; 
    }

    findingByNames(names){
        const name = names.Name;
        if(name != "") {
        const findingNames = this.#products.filter(el => el.pname.indexOf(name) != -1  || el.manufacture.indexOf(name) != -1
        );
        return findingNames;
        }
        else return this.#products

        
    }
    FilterByCategory(categories){
        const category = categories;
        if(category != "All") {
        const findingNames = this.#products.filter(el => el.category.indexOf(category) != -1 );
        return findingNames;
        }
        else return this.#products

        
    }
SortByPrice(toggle){
    let prod = this.copy(this.#products);
    if(toggle == true){
        console.log(this.#products)
        return prod.sort((a,b) => a.price - b.price );
    }
    if(toggle == false){
        
        return prod.slice().sort((a,b) => b.price - a.price );
    }
    if(toggle == -1){
    
        return this.#products;
    }
    }
}