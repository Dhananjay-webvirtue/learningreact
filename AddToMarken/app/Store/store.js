import dispatcher from "../Dispatcher/dispatcher";
import EventEmitter from "events";
class ProductStore extends EventEmitter {

    constructor() {
        super();
        this.prodlist = [
            {productId: 1,  productTitle: "First Product", description: "React First Product"},
            {productId: 2,  productTitle: "Second Product", description: "React Second Product"},
            {productId: 3,  productTitle: "Third Product", description: "React Third Product"},
            {productId: 4,  productTitle: "Fourth Product", description: "React Fourth Product"},
            {productId: 5,  productTitle: "Fifth Product", description: "React Fifth Product"},
            {productId: 6,  productTitle: "Sixth Product", description: "React Sixth Product"},
            {productId: 7,  productTitle: "Seven Product", description: "React Seven Product"},
            {productId: 8,  productTitle: "Eight Product", description: "React Eight Product"},
            {productId: 9,  productTitle: "Nine Product", description: "React Nine Product"},
            {productId: 10,  productTitle: "Ten Product", description: "React Ten Product"}
        ]
        this.marked = [
            {ProductId: 1},
            {ProductId: 2}
        ]
    }

    getAllTodos() {
        return this.prodlist;
    }
    getAllMarked() {
        return this.marked;
    }

    /* Update Product Id In Marken DB Table */
    addToMarkenDb(id) {
        //console.log("Add To Marken List in store file:- ", id)
        this.marked.push({ProductId: id});
        this.emit("update")
    }
    /* Delete Product Id From Marken DB Table */
    deleteFromMarkenList(id) {
        //var index = this.marked.indexOf("ProductId: "+id);
        //console.log("Delete From Marken List in store file:- ", id, " == index == ", index)
        //this.marked.splice(index, 1);
        //this.marked.pop({ProductId: id});

        this.marked = this.marked.filter(function(item) {
            //console.log("item = " , item.ProductId, " == ", id)
            return item.ProductId !== id
        })

        this.emit("update")
    }


    handleAction(action) {
        console.log("Action recieved ", action);
        switch (action.type) {
            case "ADD_MARKEN":
                this.addToMarkenDb(action.ProductId);
                break;

            case "DELETE_MARKEN":
                this.deleteFromMarkenList(action.ProductId)
                break;
            default:
        }
    }

}

var productStore = new ProductStore;
window.prodlist = productStore;
dispatcher.register(productStore.handleAction.bind(productStore));
window.dispatcher = dispatcher;

window.productStore = productStore;

export default productStore;

