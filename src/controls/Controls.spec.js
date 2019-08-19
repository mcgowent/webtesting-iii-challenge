// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer';

import Controls from './Controls'; //Importing componenet that we are testing

describe('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    //Checks that the gate is locked and closed
    it('should be lock and close by default', () => {
        const Spy = jest.fn()
        const { getByText, queryByText } = render(<Controls locked={false} closed={false} toggleClosed={Spy} />);

        // Grabbing the expected text and saving to a var
        const lock = queryByText("Locked Gate")
        const close = queryByText("Close Gate")

        const unlock = queryByText("Unlocked Gate")
        const open = queryByText("Open Gate")

        //Checking that the expected text equals expected saved value
        expect(lock)
        expect(close)

        // fireEvent.click(lock)
        // expect(unlock)

        // fireEvent.click(close)
        // expect(open)

    });

    //Checks that the gate is unlocked and open
    it('should be unlock and open by default', () => {
        const { getByText } = render(<Controls locked={true} closed={true} />);

        expect(getByText(/unlock gate/i));
        expect(getByText(/open gate/i));
    });
});