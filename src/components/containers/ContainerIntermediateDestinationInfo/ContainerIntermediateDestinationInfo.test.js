import React from 'react'
import { render } from '@testing-library/react'
import ContainerIntermediateDestinationInfo from '.'
import { LABELS, SUBLABELS, ICONS } from 'utils/constants'

test('should render the container-intermediate-destination-info', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('container-intermediate-destination-info'))
        .toBeInTheDocument
})

test('should render the arrow left icon', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})

test('should render the main content', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('main-content-intermediate-destination-info'))
        .toBeInTheDocument
})

test('should render the title', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('title-intermediate-destination-info')).toHaveTextContent(
        LABELS.INTERMEDIATE_DESTINATION
    )
})

test('should render the subtitle', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('sub-label')).toHaveTextContent(
        SUBLABELS.INTERMEDIATE_DESTINATION
    )
})

test('should render the list numbered with tooltip', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('list-numbered-with-tooltip')).toBeInTheDocument
})

test('should render the intermediate destination info fields', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    expect(getByRole('input-intermediate-destination-info')).toBeInTheDocument
})

test('should render the arrow right icon', () => {
    const { getByRole } = render(<ContainerIntermediateDestinationInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_RIGHT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_RIGHT)
})
