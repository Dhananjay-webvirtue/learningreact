/**
 * Created by User on 5/25/2017.
 */
import React, {Component} from 'react';
import {ShippingFormErrors} from './shippingFormError';

class ShippingDetails extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            addressOne: '',
            addressTwo: '',
            shippingFormErrors: {name: '', phone: '', email: '', addressOne:'', addressTwo:''},
            nameValid: false,
            phoneValid: false,
            emailValid: false,
            addressOneValid: false,
            addressTwoValid: false,
            formValid: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateForm - this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        /* use either of these sysntex but me must bind in constructor  */
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
        /*this.setState({
            [name]: value
        },this.validateField(name, value));*/

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.shippingFormErrors;
        let nameValid = this.state.nameValid;
        let phoneValid = this.state.phoneValid;
        let emailValid = this.state.emailValid;
        let addressOneValid = this.state.addressOneValid;
        let addressTwoValid = this.state.addressTwoValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrors.name = nameValid ? '' : 'Name is too short';
                break;

            case 'phone':
                phoneValid = value.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
                fieldValidationErrors.phone = phoneValid ? '' : 'Phone number  is invalid';
                break;

            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
                break;

            case 'addressOne':
                addressOneValid = value.length >= 6;
                fieldValidationErrors.addressOne = addressOneValid ? '': 'First Address text is too short';
                break;

            case 'addressTwo':
                addressTwoValid = value.length >= 6;
                fieldValidationErrors.addressTwo = addressTwoValid ? '': 'Second Address text  is too short';
                break;

            default:
                break;
        }
        this.setState({shippingFormErrors: fieldValidationErrors,
            nameValid: nameValid,
            phoneValid: phoneValid,
            emailValid: emailValid,
            addressOneValid: addressOneValid,
            addressTwoValid: addressTwoValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.phoneValid && this.state.emailValid && this.state.addressOneValid && this.state.addressTwoValid });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'error');
    }


    handleSubmit(event) {
        localStorage.setItem("LS_Name", this.state.name);
        localStorage.setItem("LS_Phone", this.state.phone);
        localStorage.setItem("Ls_Email", this.state.email);
        localStorage.setItem("LS_AddressOne", this.state.addressOne);
        localStorage.setItem("LS_AddressTwo", this.state.addressTwo);
        event.preventDefault();
    }

    render() {
        /*var storedValue_LS_Name = localStorage.getItem("LS_Name");
        var storedValue_LS_Phone = localStorage.getItem("LS_Phone");
        var storedValue_Ls_Email = localStorage.getItem("Ls_Email");
        var storedValue_LS_AddressOne = localStorage.getItem("LS_AddressOne");
        var storedValue_LS_AddressTwo = localStorage.getItem("LS_AddressTwo");
        console.log(storedValue_LS_Name + ":-" + storedValue_LS_Phone + ":-" + storedValue_Ls_Email + ":-" + storedValue_LS_AddressOne + ":-" + storedValue_LS_AddressTwo);*/
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
                            <form name="sentMessage" id="shippingDetailForm" onSubmit={this.handleSubmit}>
                                <div class={`control-group ${this.errorClass(this.state.shippingFormErrors.name)}`}>
                                    <div class={`form-group floating-label-form-group controls`}>
                                        <label>Name</label>
                                        <input class={`form-control form-group`} id="name" name="name" type="text" placeholder="Please enter your name..."
                                               value={this.state.name}
                                               onChange={this.handleUserInput}
                                        />
                                        <p class={`help-block text-danger`}>{this.state.shippingFormErrors.name}</p>
                                    </div>
                                    <br/>
                                </div>
                                <div class={`control-group ${this.errorClass(this.state.shippingFormErrors.phone)}`}>
                                    <div class={`form-group floating-label-form-group controls ${this.errorClass(this.state.shippingFormErrors.phone)}`}>
                                        <label>Phone</label>
                                        <input class={`form-control form-group`} id="phone" name="phone" type="phone" placeholder="Please enter your phone number..."
                                               value={this.state.phone}
                                               onChange={this.handleUserInput}
                                        />
                                        <p class={`help-block text-danger`}>{this.state.shippingFormErrors.phone}</p>
                                    </div>
                                    <br/>
                                </div>
                                <div class={`control-group ${this.errorClass(this.state.shippingFormErrors.email)}`}>
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input class={`form-control form-group ${this.errorClass(this.state.shippingFormErrors.email)}`} id="email" name="email" type="email" placeholder="Please enter your email address..."
                                               value={this.state.email}
                                               onChange={this.handleUserInput}
                                        />
                                        <p class={`help-block text-danger`}>{this.state.shippingFormErrors.email}</p>
                                    </div>
                                    <br/>
                                </div>
                                <div class={`control-group ${this.errorClass(this.state.shippingFormErrors.addressOne)}`}>
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Address 1</label>
                                        <textarea class={`form-control form-group ${this.errorClass(this.state.shippingFormErrors.addressOne)}`} id="addressOne" name="addressOne" rows="2" placeholder="Please enter Your Address 1..."
                                                  value={this.state.addressOne}
                                                  onChange={this.handleUserInput}
                                        ></textarea>
                                        <p class={`help-block text-danger`}>{this.state.shippingFormErrors.addressOne}</p>
                                    </div>
                                    <br/>
                                </div>
                                <div class={`control-group ${this.errorClass(this.state.shippingFormErrors.addressTwo)}`}>
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Address 2</label>
                                        <textarea class={`form-control form-group ${this.errorClass(this.state.shippingFormErrors.addressTwo)}`} id="addressTwo" name="addressTwo" rows="2" placeholder="Please enter Your Address 2..."
                                                  value={this.state.addressTwo}
                                                  onChange={this.handleUserInput}
                                        ></textarea>
                                        <p class={`help-block text-danger`}>{this.state.shippingFormErrors.addressTwo}</p>
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
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-lg" disabled={!this.state.formValid}>Send</button>
                                </div>
                            </form>
                            <br /><br />
                            <div id="success">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Local Storage Data</h3>
                                    </div>
                                    <div class="panel-body">
                                        <ul class="list-group">
                                            <li class="list-group-item">Name: {localStorage.getItem("LS_Name")}</li>
                                            <li class="list-group-item">Phone = {localStorage.getItem("LS_Phone")}</li>
                                            <li class="list-group-item">Email = {localStorage.getItem("Ls_Email")}</li>
                                            <li class="list-group-item">Address 1 = {localStorage.getItem("LS_AddressOne")}</li>
                                            <li class="list-group-item">Address 2 = {localStorage.getItem("LS_AddressTwo")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShippingDetails;
