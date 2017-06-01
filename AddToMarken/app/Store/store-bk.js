import dispatcher from "../Dispatcher/dispatcher";
import EventEmitter from "events";

class Store extends EventEmitter {

    constructor() {
        super();
        this.productlistingDB = [
            {productId: 1,  productTitle: "First Product"},
            {productId: 2,  productTitle: "Second Product"},
            {productId: 3,  productTitle: "Third Product"},
            {productId: 4,  productTitle: "Fourth Product"},
            {productId: 5,  productTitle: "Fifth Product"},
            {productId: 6,  productTitle: "Sixth Product"},
            {productId: 7,  productTitle: "Seven Product"},
            {productId: 8,  productTitle: "Eight Product"},
            {productId: 9,  productTitle: "Nine Product"},
            {productId: 10,  productTitle: "Ten Product"}
        ]
    }


    getAllProductlist() {
        return this.productlistingDB;
    }

}

var store = new Store;
// window.productListStore = productListStore;
dispatcher.register(store.handleAction.bind(store));
dispatcher.register(todoStore.handleAction.bind(todoStore));
// window.dispatcher = dispatcher;


export default store;
