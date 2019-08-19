// Test away!
import React from 'react';
import render from 'react-testing-library'
import renderer from 'react-test-renderer';
//Import react-test-renderer as a --dev dependency and then import


import Controls from './Controls'; //Importing componenet that we are testing


describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();

        expect(tree).toMatchSnapshot();
    });
    it('defaults to unlocked and open', () => {

    })
});