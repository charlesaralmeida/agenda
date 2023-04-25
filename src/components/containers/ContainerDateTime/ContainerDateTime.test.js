import { render } from '@testing-library/react'
import ContainerDateTime from '.'

test('should render the date-time container', () => {
    const { getByRole } = render(<ContainerDateTime />)
    expect(getByRole('container-date-time')).toBeInTheDocument
})

test('should render the date input', () => {
    const { getByRole } = render(<ContainerDateTime />)
    expect(getByRole('date-input-container')).toBeInTheDocument
})

test('should render the time input', () => {
    const { getByRole } = render(<ContainerDateTime />)
    expect(getByRole('time-input-container')).toBeInTheDocument
})
