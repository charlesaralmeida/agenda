import React from 'react'
import { render } from '@testing-library/react'
import ContainerFinalDestinationInfo from '.'
import { LABELS, SUBLABELS, ICONS } from 'utils/constants'

test('should render the container-final-destination-info', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    expect(getByRole('container-final-destination-info')).toBeInTheDocument
})

test('should render the arrow left icon', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})

test('should render the main content', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    expect(getByRole('main-content-final-destination-info')).toBeInTheDocument
})

test('should render the title', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    expect(getByRole('title-final-destination-info')).toHaveTextContent(
        LABELS.FINAL_DESTINATION
    )
})

test('should render the subtitle', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    expect(getByRole('sub-label')).toHaveTextContent(
        SUBLABELS.FINAL_DESTINATION
    )
})

test('should render the final destination info fields', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    expect(getByRole('input-final-destination-info')).toBeInTheDocument
})

test('should render the arrow right icon', () => {
    const { getByRole } = render(<ContainerFinalDestinationInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_RIGHT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_RIGHT)
})
