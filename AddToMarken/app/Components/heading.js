/**
 * Created by User on 5/21/2017.
 */
import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

import PropTypes from 'prop-types';

class Heading extends Component {
    render() {
        return (
            <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
        );
    }
}

Heading.propTypes = {};
Heading.defaultProps = {};

export default Heading;
