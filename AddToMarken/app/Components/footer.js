/**
 * Created by User on 5/21/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <p>&copy; 2017 React Bootstarp. All Rights Reserved Webvirtue.</p>
                    <ul class="list-inline">
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
