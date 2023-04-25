import React from 'react'
import { render } from '@testing-library/react'
import IntermediateDestinationInfo from '.'

test('should render the intermediate destination info fields', () => {
    const { getByRole } = render(<IntermediateDestinationInfo />)
    expect(getByRole('intermediate-destination-info')).toBeInTheDocument
})

test('should render the adress container', () => {
    const { getByRole } = render(<IntermediateDestinationInfo />)
    expect(getByRole('adress-container')).toBeInTheDocument
})

test('should render the estimated time container', () => {
    const { getByRole } = render(<IntermediateDestinationInfo />)
    expect(getByRole('estimated-time-container')).toBeInTheDocument
})
