/**
 * Created by User on 5/25/2017.
 */
import React, {Component} from 'react';

class BrandList extends Component {
    render() {
        return (
            <option value={this.props.brandname.carBrandName}>{this.props.brandname.carBrandName}</option>
        );
    }
}

export default BrandList;

