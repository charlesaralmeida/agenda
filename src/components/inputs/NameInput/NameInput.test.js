import { render } from '@testing-library/react'
import AdressInput from '.'

test('should render the name field', () => {
    const { getByRole } = render(<AdressInput />)
    expect(getByRole('name-input')).toBeInTheDocument
    expect(getByRole('name-input')).toHaveTextContent('Nome')
})
