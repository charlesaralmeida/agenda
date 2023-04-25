import { render } from '@testing-library/react'
import QuantityTimeInput from '.'

test('should render the container quantity-time input', () => {
    const { getByRole } = render(<QuantityTimeInput />)
    expect(getByRole('quantity-time-input')).toBeInTheDocument
})

test('should render the date-field', () => {
    const { getByRole } = render(<QuantityTimeInput />)
    expect(getByRole('date-field')).toBeInTheDocument
})
