/**
 * Created by Dhananjay on 6/1/2017.
 */
import React, {Component} from 'react';
import Artist from '../src/Artist'

class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="jumbotron">
                            <h1 ref="h1">Setup Test React jasmine Karma!!</h1>
                            <p><Artist name="Dhananjay" /></p>
                            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;



