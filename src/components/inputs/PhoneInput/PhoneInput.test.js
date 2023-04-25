import { render } from '@testing-library/react'
import PhoneInput from '.'

test('should render the phone field', () => {
    const { getByRole } = render(<PhoneInput />)
    expect(getByRole('phone-input')).toBeInTheDocument
    expect(getByRole('phone-input')).toHaveTextContent('Telefone')
})
