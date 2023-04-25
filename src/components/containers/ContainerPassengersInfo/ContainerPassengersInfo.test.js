import React from 'react'
import { render } from '@testing-library/react'
import ContainerPassengersInfo from '.'
import { LABELS, SUBLABELS, ICONS } from 'utils/constants'

test('should render the container-passenger-info', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    expect(getByRole('container-passenger-info')).toBeInTheDocument
})

test('should render the arrow left icon', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})

test('should render the main content', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    expect(getByRole('main-content-passenger-info')).toBeInTheDocument
})

test('should render the title', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    expect(getByRole('title-passenger-info')).toHaveTextContent(
        LABELS.PASSENGERS
    )
})

test('should render the list numbered with tooltip', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    expect(getByRole('list-numbered-with-tooltip')).toBeInTheDocument
})

test('should render the passenger info fields', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    expect(getByRole('input-passenger-info')).toBeInTheDocument
})

test('should render the arrow right icon', () => {
    const { getByRole } = render(<ContainerPassengersInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_RIGHT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_RIGHT)
})
