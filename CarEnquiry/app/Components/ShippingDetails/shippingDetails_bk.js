/**
 * Created by User on 5/25/2017.
 */
import React, {Component} from 'react';
import {ShippingFormErrors} from './shippingFormError';

class ShippingDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            addressone: '',
            addresstwo: '',
            ShippingFormErrors: {name: '', phone: '', email: '', addressone:'', addresstwo:''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }

    }


    render() {
        return (
            /* Shipping Details
             *use this class for hide container
             *class="hidden-xl-up hidden-md-up hidden-md-down hidden-lg-up hidden-lg-down hidden-xl-down"
            */
            <section id="shippingDetails" >
                <div class="container">
                    <h2 class="text-center">Shipping Details</h2>
                    <hr class="star-primary" />
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <form name="sentMessage" id="shippingDetailForm">
                                <div className="panel panel-default">
                                    <FormErrors formErrors={this.state.ShippingFormErrors} />
                                </div>

                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input class="form-control" id="name" name="name" type="text" placeholder="Please enter your name..." required data-validation-required-message="Please enter your name." />
                                        <span class="help-block text-danger hidden"></span>
                                    </div>
                                    <br/>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Phone</label>
                                        <input class="form-control" id="phone" name="phone" type="text" placeholder="Please enter your phone number..." required data-validation-required-message="Please enter your Phone No." />
                                        <span class="help-block text-danger hidden"></span>
                                    </div>
                                    <br/>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input class="form-control" id="email" name="email" type="email" placeholder="Please enter your email address..." required data-validation-required-message="Please enter your email address." />
                                        <span class="help-block text-danger hidden"></span>
                                    </div>
                                    <br/>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Address 1</label>
                                        <textarea class="form-control" id="addressone" name="addressone" rows="2" placeholder="Please enter Your Address 1..." required data-validation-required-message="Please enter Your Address 1."></textarea>
                                        <span class="help-block text-danger hidden"></span>
                                    </div>
                                    <br/>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Address 2</label>
                                        <textarea class="form-control" id="addresstwo" name="addresstwo" rows="2" placeholder="Please enter Your Address 2..." required data-validation-required-message="Please enter Your Address 2."></textarea>
                                        <span class="help-block text-danger hidden"></span>
                                    </div>
                                    <br/>
                                </div>
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>City</label>
                                        <input class="form-control" id="city" name="City" disabled />
                                    </div>
                                    <br/>
                                </div>

                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>State</label>
                                        <input class="form-control" id="state" name="State" disabled />
                                    </div>
                                    <br/>
                                </div>

                                {/*<div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>IP Address</label>
                                        <input class="form-control" id="ipAddress" name="IpAddress" disabled value="182.71.64.84" />
                                    </div>
                                    <br/>
                                </div>


                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Lat / Lng</label>
                                        <input class="form-control" id="latLng" name="LatLng" disabled />
                                    </div>
                                    <br/>
                                </div>

                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Useragent</label>
                                        <input class="form-control" id="useragent" name="Useragent" disabled />
                                    </div>
                                    <br/>
                                </div>*/}
                                <br />
                                <div id="success"></div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-lg" disabled={!this.state.formValid}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShippingDetails;
