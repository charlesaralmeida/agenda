import React from 'react'
import { render } from '@testing-library/react'
import ContainerBoardingInfo from '.'
import { LABELS, ICONS } from 'utils/constants'

test('should render the arrow left icon', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_LEFT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_LEFT)
})

test('should render the container boarding info', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    expect(getByRole('container-boarding-info')).toBeInTheDocument
})

test('should render the main content', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    expect(getByRole('main-content-boarding-info')).toBeInTheDocument
})

test('should render the title', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    expect(getByRole('title-boarding-info')).toHaveTextContent(LABELS.EMBARQUE)
})

test('should render the boarding info fields', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    expect(getByRole('input-boarding-info')).toBeInTheDocument
})

test('should render the arrow right icon', () => {
    const { getByRole } = render(<ContainerBoardingInfo />)
    const icon = getByRole(ICONS.CIRCLE_ARROW_RIGHT, { hidden: true })
    expect(icon.classList.toString()).toContain(ICONS.CIRCLE_ARROW_RIGHT)
})
