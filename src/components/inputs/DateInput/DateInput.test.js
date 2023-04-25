import { render } from '@testing-library/react'
import DateInput from '.'

test('should render the date field', () => {
    const { getByRole } = render(<DateInput />)
    expect(getByRole('date-field')).toBeInTheDocument
})

test('should render the date label', () => {
    const { getByLabelText } = render(<DateInput />)
    expect(getByLabelText('Data')).toBeInTheDocument
})
