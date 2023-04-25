import { render } from '@testing-library/react'
import ContainerAdressWithPlusButton from '.'

test('should render the adress container', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-adress')).toBeInTheDocument
})

test('should render the adress label', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-adress-label')).toHaveTextContent('Endereço')
})

test('should render the container-city-uf-button', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-city-uf-button')).toBeInTheDocument
})

test('should render the city/uf container', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-city-uf-input')).toBeInTheDocument
})

test('should render the container button plus', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-button-plus')).toBeInTheDocument
})

test('should render the adress/reference container', () => {
    const { getByRole } = render(<ContainerAdressWithPlusButton />)
    expect(getByRole('container-adress-input')).toBeInTheDocument
})
