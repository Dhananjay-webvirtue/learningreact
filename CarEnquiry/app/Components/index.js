/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';
import Navigation from './Navigation/navigation';
import Header from './Header/header';
import Enquiry from './CarEnquiry/enquiry';
import CreateSticker from './CreateSticker/createSticker';
import ShippingDetails from './ShippingDetails/shippingDetails';
import Footer from './Footer/footer';

class Index extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Header />
                <Enquiry/>
                <CreateSticker />
                <ShippingDetails/>
                <Footer/>
            </div>
        );
    }
}
export default Index;