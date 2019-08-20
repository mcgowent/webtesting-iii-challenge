// Test away
import React from 'react';
import renderer from 'react-test-renderer';
//Import react-test-renderer as a --dev dependency and then import


import Dashboard from './Dashboard'; //Importing componenet that we are testing


describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});