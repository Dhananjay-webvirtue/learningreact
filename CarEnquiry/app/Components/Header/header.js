/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header class="masthead">
                <div class="container">
                    <img class="img-fluid" src="img/profile.png" alt="" />
                    <div class="intro-text">
                        <span class="name">Car Enquiry</span>
                        <hr class="star-light" />
                            <span class="skills">Enquiry for New Car | Buying a Car | Car Forums - CarEnquiry.com</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
