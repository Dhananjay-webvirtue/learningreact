import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Artist from '../src/Artist';



var TestUtils = React.addons.TestUtils;

describe('Artist', () => {
    var component;

    beforeEach( () => {
        component = TestUtils.renderIntoDocument(<Artist name="Run the Jewls"/>)
        });
    it("Should display the correct Artist Name", () => {
        expect(component.getDOMNode().textContent).toMatch(/Artist name: Run the Jewels/);
    });

});


