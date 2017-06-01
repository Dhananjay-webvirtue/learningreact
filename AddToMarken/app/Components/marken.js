/**
 * Created by User on 5/21/2017.
 */
import React, {Component} from 'react';
import Store from "../Store/store";
import {Badge} from 'react-bootstrap';

class Marken extends Component {
    constructor() {
        super();
        this.state = { marked: [] }
    }

    componentWillMount() {
        this.state.marked= Store.getAllMarked();
        var markedProdList = JSON.stringify(this.state.marked);

        Store.on("update", function () {
            this.setState({marked: Store.getAllMarked()});
        }.bind(this))
    }


    render() {
        return (
            <div class="marken">Marken <Badge>0{this.state.marked.length} {/*: {this.state.marked.ProductId.bind(this)}*/}</Badge></div>
        );
    }
}


export default Marken;