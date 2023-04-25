import { render } from '@testing-library/react'
import CityInput from '.'

test('should render the city field', () => {
    const { getByRole } = render(<CityInput />)
    expect(getByRole('city-input')).toBeInTheDocument
    expect(getByRole('city-input')).toHaveTextContent('Cidade')
})
