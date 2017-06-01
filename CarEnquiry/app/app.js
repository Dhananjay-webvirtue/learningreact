/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from './Components/index';

var carObj = React.createElement(Index, {});

ReactDOM.render(carObj, document.getElementById('carEnquiry'));
