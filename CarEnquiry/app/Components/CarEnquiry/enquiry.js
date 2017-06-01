/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';
import CarStore from '../../Store/carStore';
//import * as Actions from "../Action/carAction";
import Citylist from './citylist';
import Brandlist from './brandList';
import ModelList from './modelList'

class Enquiry extends Component {

    constructor() {
        super();
        this.state = {cityList: [], carBrands: [], carModels: [], value: 'coconut'};
        this.handleChangeCityList= this.handleChangeCityList.bind(this);
    }
    componentWillMount() {
        this.state.cityList = CarStore.getCity();
        var cityListObj = this.state.cityList;
        //console.log("all car list", cityListObj);

        this.state.carBrands = CarStore.getBrand();
        var carBrandsObj = this.state.carBrands;
        //console.log("all car Brands List", carBrandsObj);

        this.state.carModels = CarStore.getModel();
        var carModelsObj = this.state.carModels;
        //console.log("all car Brands List", carModelsObj);
    }

    handleChangeCityList(e){
        const value = e.target.value;
        console.log("value :- ", value);
        this.setState({value: e.target.value},
            () => { this.showcarBrands(value) });
    };
    showcarBrands(e) {


        console.log('Your favorite flavor is: ' + this.state.value)
        //alert('Your favorite flavor is: ' + this.state.value);
        //event.preventDefault();
    }

    render() {
        var getcity = this.state.cityList.map((city, index) =>
            <Citylist key={index} cityname={city} index={index} />
        );

        var getbrand = this.state.carBrands.map((brand, index) =>
            <Brandlist key={index} brandname={brand} index={index} />
        );

        var getmodel = this.state.carModels.map((model, index) =>
            <ModelList key={index} modelname={model} index={index} />
        );

        return (
            /* FIND THE RIGHT CAR
             *use this class for hide container
             *class="hidden-xl-up hidden-md-up hidden-md-down hidden-lg-up hidden-lg-down hidden-xl-down"
             */
            <section id="contact" >
                <div class="container">
                    <h2 class="text-center">FIND THE RIGHT CAR</h2>
                    <hr class="star-primary" />
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>City</label>
                                    <select class="form-control" value={this.state.value} onChange={this.handleChangeCityList.bind(this)}>
                                        <option>Select City</option>
                                        {getcity}
                                    </select>
                                </div>
                                <br/>
                            </div>

                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>Car Brand</label>
                                    <select class="form-control">
                                        <option>Select Car Brand</option>
                                        {getbrand}
                                    </select>
                                </div>
                                <br/>
                            </div>

                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>Car Model</label>
                                    <select class="form-control">
                                        <option>Select Car Model</option>
                                        {getmodel}
                                    </select>
                                </div>
                                <br/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Enquiry;
