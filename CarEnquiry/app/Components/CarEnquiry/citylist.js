/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';

class Citylist extends Component {
    render() {
        return (
            <option value={this.props.cityname.cityId}>{this.props.cityname.cityName}</option>
        );
    }
}

export default Citylist;
