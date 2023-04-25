import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonPlus from '.'
import { ICONS } from 'utils/constants'

test('should get a button with the correct icon', () => {
    const { getByRole } = render(<ButtonPlus />)
    const icon = getByRole(ICONS.CIRCLE_PLUS, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_PLUS)
})
