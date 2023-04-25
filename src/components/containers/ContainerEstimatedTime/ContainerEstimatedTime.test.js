import { render } from '@testing-library/react'
import ContainerEstimatedTime from '.'

test('should render the container estimated date-time', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('container-estimated-date-time')).toBeInTheDocument
})

test('should render the container adress label', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('container-adress-label')).toBeInTheDocument
})

test('should render the correct label to the container adress label', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('container-adress-label')).toHaveTextContent(
        'Tempo estimado de permanência'
    )
})

test('should render the container estimated date-time input', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('container-estimated-date-time-input')).toBeInTheDocument
})

test('should render the container quantity-time-input', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('container-quantity-time-input')).toBeInTheDocument
})

test('should render the hour-or-day-select-container', () => {
    const { getByRole } = render(<ContainerEstimatedTime />)
    expect(getByRole('hour-or-day-select-container')).toBeInTheDocument
})
