import React from 'react'
import { render } from '@testing-library/react'
import FinalDestinationInfo from '.'

test('should render the container final-destination-info', () => {
    const { getByRole } = render(<FinalDestinationInfo />)
    expect(getByRole('final-destination-info')).toBeInTheDocument
})

test('should render the adress container', () => {
    const { getByRole } = render(<FinalDestinationInfo />)
    expect(getByRole('adress-container')).toBeInTheDocument
})
