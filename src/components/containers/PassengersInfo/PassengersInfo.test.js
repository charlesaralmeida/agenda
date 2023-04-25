import React from 'react'
import { render } from '@testing-library/react'
import PassengersInfo from '.'

test('should render the passenger info fields', () => {
    const { getByRole } = render(<PassengersInfo />)
    expect(getByRole('passengers-info')).toBeInTheDocument
})

test('should render the passengers container', () => {
    const { getByRole } = render(<PassengersInfo />)
    expect(getByRole('passengers-container')).toBeInTheDocument
})
