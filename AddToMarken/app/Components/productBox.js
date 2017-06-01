/**
 * Created by User on 5/21/2017.
 */
import React, {Component} from 'react';
import Store from "../Store/store";
import * as Actions from "../Actions/actions";
import { Row } from 'react-bootstrap';
import ProductList from './productList';



class ProductBox extends Component {
    constructor(){
        super();
        this.state = {prodlist: []};
        this.state = {marked: []};
    }

    componentDidMount() {
        console.log("component mounted")
    }

    componentWillMount() {
        this.state.prodlist = Store.getAllTodos();
       /* Store.on("update", function () {
            this.setState({prodlist: Store.getAllTodos()});
        }.bind(this));*/


        this.state.marked = Store.getAllMarked();
        Store.on("update", function () {
            this.setState({marked: Store.getAllMarked()});
            var markedProdList = JSON.stringify(this.state.marked);
            console.log("markedProdList :- ", markedProdList);
        }.bind(this));
    }

    addToMarkenList(i) {
        Actions.createToMarkenList(i);
    }


    render() {
        var prodlist = this.state.prodlist.map((product, index) =>
            {
                //console.log(this.state.marked);
                var productIDAddedInDB = product.productId;
                var addAsFavorite = true;
                this.state.marked.map((mark)=>{
                    //console.log("MarkedId is: ", mark.ProductId);
                    //console.log("productIDAddedInDB is: ", productIDAddedInDB)
                    if(mark.ProductId === productIDAddedInDB){
                        //console.log("product found= ", mark.ProductId , " == ", productIDAddedInDB);
                        //console.log("found as :- ", this.state.addAsFav )
                        addAsFavorite = false;
                    }
                })
                console.log("product found= ", productIDAddedInDB, "==",addAsFavorite);
                return  <ProductList key={index} product={product} index={index} whenClick={this.addToMarkenList.bind(this)} addAsFav={addAsFavorite}  />
            }
        );


        return (
            <Row>
                {prodlist}
            </Row>
        );
    }
}



export default ProductBox;
