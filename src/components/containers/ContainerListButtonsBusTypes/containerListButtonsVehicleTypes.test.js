import React from 'react'
import { render } from '@testing-library/react'
import ContainerListButtonsVehicleTypes from '.'

test('should have 5 buttons with icon and label', () => {
    const { getAllByRole } = render(<ContainerListButtonsVehicleTypes />)

    const buttons = getAllByRole('ButtonWithIconAndLabel')

    expect(buttons.length).toBe(5)
})
