/**
 * Created by User on 5/22/2017.
 */
import React, {Component} from 'react';
import * as Actions from "../Actions/actions";
import { Button, Col, Thumbnail } from 'react-bootstrap';


class ProductList extends Component {

    constructor(){
        super();
        this.handleAddToMarkenClick = this.addMarken.bind(this);
        this.handleDeleteFromMarkenClick = this.deleteFromMarken.bind(this);
        this.state = {addAsFav: true};
    }

/*
    componentWillMount() {
        var productIDAddedInDB = this.props.product.productId;

         this.props.marked.map((mark)=>{
             //console.log("MarkedId is: ", mark.ProductId);
             //console.log("productIDAddedInDB is: ", productIDAddedInDB)
             if(mark.ProductId === productIDAddedInDB){
                 console.log("product found= ", mark.ProductId , " == ", productIDAddedInDB);
                 this.state.addAsFav = false;
             }
             else {
                //console.log("found as false")
                 this.state.addAsFav = true;
             }
         })
    }
*/

/*
    componentDidMount() {
        console.log("product list component mounted")
    }
*/


    /*Add to Marken DB Table */
    addMarken() {
        this.props.whenClick(this.props.product.productId);
        //console.log("whenClick on product list Coomponenent", this.props.product.productId)
        this.setState({addAsFav: false});

    }

    /* Delete From Marken DB Table */
    deleteFromMarken() {
        console.log("onClick on product list", this.props.product.productId)
        var mId = this.props.product.productId;
        Actions.deleteFromMarkenList(mId);
        this.setState({addAsFav: true});
    }


    render() {
console.log("addAsFav props = ", this.props.addAsFav );
        //var addAsFav = this.props.AddAsFav;
        //var productIDAddedInDB = this.props.product.productId;
        //console.log("state = ", this.props.product.productId , " = ", this.state.addAsFav);

        let button = null;
        if (!this.props.addAsFav) {
            button = <Button bsStyle="danger" onClick={this.deleteFromMarken.bind(this)}>Delete from Marken {this.props.product.productId}</Button>;
        } else {
            button = <Button bsStyle="primary" onClick={this.addMarken.bind(this)}>Add to Marken {this.props.product.productId}</Button>;
        }


        return (
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>{this.props.product.productTitle}</h3>
                    <p>{this.props.product.description}</p>
                    <p>
                        {button}
                    </p>
                </Thumbnail>
            </Col>
        );
    }
}

export default ProductList;
