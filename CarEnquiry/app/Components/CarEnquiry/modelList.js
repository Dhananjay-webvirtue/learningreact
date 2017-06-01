/**
 * Created by User on 5/25/2017.
 */
import React, {Component} from 'react';

class ModelList extends Component {
    render() {
        return (
            <option value={this.props.modelname.carModelName}>{this.props.modelname.carModelName}</option>
        );
    }
}

export default ModelList;

