import React from 'react'
import { render } from '@testing-library/react'
import ButtonBackNavigation from '.'
import { ICONS } from 'utils/constants'

test('should get a button with the correct icon', () => {
    const { getByRole } = render(<ButtonBackNavigation />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})
