/**
 * Created by User on 5/21/2017.
 */
import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './header';
import Heading from './heading'
import Marken from './marken';
import ProductBox from './productBox';
import Footer from './footer'

class Index extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Col xs={10} md={10}><code><Header /></code></Col>
                        <Col xs={2} md={2}><code><Marken /></code></Col>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} md={12}><code><Heading/></code></Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} md={12}><code><ProductBox/></code></Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={12} md={8}><code><Footer /></code></Col>
                </Row>
            </Grid>
        );
    }
}


export default Index;
