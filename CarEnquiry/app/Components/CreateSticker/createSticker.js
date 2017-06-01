/**
 * Created by User on 5/25/2017.
 */
import React, {Component} from 'react';
import CarStore from '../../Store/carStore';

class CreateSticker extends Component {
    constructor () {
        super();
        this.state = {fontFamilies:[] };
        this.handleChange = this.handleChange.bind(this);
        this.state = { InputTxtShow: 'Type to see your *Sticker* Name here!', fontFamilyStyle: '' }
        this.dropDownOnChange = this.dropDownOnChange.bind(this);
    }

    handleChange(e) {
        var inputText = e.target.value;
        this.setState({ InputTxtShow: inputText});
        console.log(this.state.InputTxtShow);
    }

    dropDownOnChange(e) {
        var selectValue = e.target.value;
        console.log(selectValue);
        this.setState({fontFamilyStyle: selectValue});

    }

    componentWillMount() {
        this.state.fontFamilies = CarStore.getallfontFamilies();
        /*console.log("font family list :", this.state.fontFamilies);
        var text = JSON.stringify(this.state.fontFamilies)
        var obj = JSON.parse(text);
        console.log("font Name",this.state.fontFamilies.families);*/
    }



    render() {

        function Item(props) {
            return <option key={props.fontfamily} value={props.fontfamily}>{props.fontfamily}</option>;
        }

        return (
            /* Create Sticker
            * use this class for hide container
            * class="hidden-xl-up hidden-md-up hidden-md-down hidden-lg-up hidden-lg-down hidden-xl-down"
            */

            <div id="createSticker" >
                <section class="success">
                    <div class="container">
                        <h2 class="text-center">Create Your Own Sticker</h2>
                        <hr class="star-light" />
                        <div class="row">
                            <div class="col-lg-4 offset-lg-2">
                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Enter Text</label>
                                        <textarea onChange={this.handleChange.bind(this)} class="form-control" rows="2" placeholder={this.state.InputTxtShow}></textarea>
                                    </div>
                                    <br/>
                                </div>

                                <div class="control-group">
                                    <div class="form-group floating-label-form-group controls">
                                        <label>Select Font from List</label>
                                        <select class="form-control" value={this.state.fontFamilyStyle} onChange={this.dropDownOnChange.bind(this)}>
                                            {this.state.fontFamilies.families.map((fontfamily, key) => <Item key={fontfamily} fontfamily={fontfamily} />)}
                                        </select>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <label>&nbsp;</label>
                                <p id="yourEnteredText" style={{fontFamily: this.state.fontFamilyStyle}}>{this.state.InputTxtShow}</p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CreateSticker;
