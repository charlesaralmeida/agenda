import { render } from '@testing-library/react'
import AdressInput from '.'

test('should render the adress field', () => {
    const { getByRole } = render(<AdressInput />)
    expect(getByRole('adress-input')).toBeInTheDocument
    expect(getByRole('adress-input')).toHaveTextContent('Endereço')
})
