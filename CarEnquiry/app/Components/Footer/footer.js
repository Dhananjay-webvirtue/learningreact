/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="text-center">
                <div class="footer-above">
                    <div class="container">
                        <div class="row">
                            <div class="footer-col col-md-4">
                                <h3>Location</h3>
                                <p>3rd Floor, Building No. 9-A, DLF Cyber City, Phase III, Gurgaon, Haryana - 122002, India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-below">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                &copy; Copyrights CarEnquiry.com. All rights reserved 2017.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
