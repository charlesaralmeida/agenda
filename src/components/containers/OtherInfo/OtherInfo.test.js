import React from 'react'
import { render } from '@testing-library/react'
import BoardingInfo from '.'

test('should render the boarding info fields', () => {
    const { getByRole } = render(<BoardingInfo />)
    expect(getByRole('boarding-info')).toBeInTheDocument
})

test('should render the date-time container', () => {
    const { getByRole } = render(<BoardingInfo />)
    expect(getByRole('container-date-time')).toBeInTheDocument
})

test('should render the adress container', () => {
    const { getByRole } = render(<BoardingInfo />)
    expect(getByRole('container-adress')).toBeInTheDocument
})
