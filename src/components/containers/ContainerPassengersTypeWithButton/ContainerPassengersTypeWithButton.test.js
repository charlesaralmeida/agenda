import { render } from '@testing-library/react'
import ContainerPassengersTypeWithButton from '.'

test('should render the container passengers with button', () => {
    const { getByRole } = render(<ContainerPassengersTypeWithButton />)
    expect(getByRole('container-passengers-with-button')).toBeInTheDocument
})

test('should render the container type with button', () => {
    const { getByRole } = render(<ContainerPassengersTypeWithButton />)
    expect(getByRole('container-type-with-button')).toBeInTheDocument
})

test('should render the container type with button select', () => {
    const { getByRole } = render(<ContainerPassengersTypeWithButton />)
    expect(getByRole('container-type-with-button-select')).toBeInTheDocument
})

test('should render the container button plus', () => {
    const { getByRole } = render(<ContainerPassengersTypeWithButton />)
    expect(getByRole('container-button-plus')).toBeInTheDocument
})

test('should render the container passenger data input', () => {
    const { getByRole } = render(<ContainerPassengersTypeWithButton />)
    expect(getByRole('container-passenger-data-input')).toBeInTheDocument
})
