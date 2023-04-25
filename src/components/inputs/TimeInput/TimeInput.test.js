import { render } from '@testing-library/react'
import TimeInput from '.'

test('should render the time field', () => {
    const { getByRole } = render(<TimeInput />)
    expect(getByRole('date-field')).toBeInTheDocument
})

test('should render the time label', () => {
    const { getByLabelText } = render(<TimeInput />)
    expect(getByLabelText('Horário')).toBeInTheDocument
})
