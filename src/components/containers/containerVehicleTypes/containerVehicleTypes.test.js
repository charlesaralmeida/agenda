import React from 'react'
import { render } from '@testing-library/react'
import ContainerVehicleTypes from 'components/containers/containerVehicleTypes'
import { LABELS, ICONS } from 'utils/constants'

test('should render the arrow left icon', () => {
    const { getByRole } = render(<ContainerVehicleTypes />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})

test('should render the vehicle type label', () => {
    const text = LABELS.TIPO_VEICULO
    const { getByText } = render(<ContainerVehicleTypes />)

    expect(getByText(text)).toBeInTheDocument
})

test('should render the buttons container', () => {
    const role = 'list-button-with-icon-and-label'
    const { getByRole } = render(<ContainerVehicleTypes />)
    expect(getByRole(role)).toBeInTheDocument
})
