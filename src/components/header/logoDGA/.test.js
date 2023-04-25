import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import LogoDGA from '.'
import logo_dga from 'img/LogotipoDGA.png'
import { LINKS } from 'utils/constants'

test('should render the DGA logo', () => {
    const role = 'logo'
    const { getByRole } = render(<LogoDGA />)
    const logo = getByRole(role)
    expect(logo).toBeTruthy
    expect(logo.src).toContain(logo_dga)
})

test('should open the DGA page in a new tab when clicked', () => {
    const mockedOpen = jest.fn()
    const originalOpen = window.open
    window.open = mockedOpen

    const role = 'logo'
    const { getByRole } = render(<LogoDGA />)
    const logo = getByRole(role)
    expect(logo).toBeTruthy
    fireEvent.click(logo)
    expect(mockedOpen).toBeCalledWith(LINKS.DGA, '_blank')
    window.open = originalOpen
})
