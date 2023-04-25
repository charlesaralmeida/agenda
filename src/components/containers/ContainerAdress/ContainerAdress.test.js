import { render } from '@testing-library/react'
import ContainerAdress from '.'

test('should render the adress container', () => {
    const { getByRole } = render(<ContainerAdress />)
    expect(getByRole('container-adress')).toBeInTheDocument
})

test('should render the adress label', () => {
    const { getByRole } = render(<ContainerAdress />)
    expect(getByRole('container-adress-label')).toHaveTextContent('Endereço')
})

test('should render the city/uf container', () => {
    const { getByRole } = render(<ContainerAdress />)
    expect(getByRole('container-city-uf-input')).toBeInTheDocument
})

test('should render the adress/reference container', () => {
    const { getByRole } = render(<ContainerAdress />)
    expect(getByRole('container-adress-input')).toBeInTheDocument
})
