import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonFowardNavigation from '.'
import { ICONS } from 'utils/constants'

test('should get a button with the correct icon', () => {
    const { getByRole } = render(<ButtonFowardNavigation />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_RIGHT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_RIGHT)
})
