// Test away!
import React from 'react'
import Display from './Display'
import { render } from '@testing-library/react'



describe("<Display />", () => {
    it('checking the open and unlocked states', () => {
        const { getByText } = render(<Display />)
        //Checks to see if unlocked and open are displayed
        expect(getByText("Unlocked"))
        expect(getByText("Open"))
    })

    it("Accepting props", () => {
        // Check if display changes based off received props
        const { getByText } = render(<Display locked={true} closed={true} />);
        expect(getByText("Locked"));
        expect(getByText("Closed"));
    });
})