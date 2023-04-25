import { render } from '@testing-library/react'
import HourOrDaySelect from '.'

test('should render the hour-or-day-select', () => {
    const { getByRole } = render(<HourOrDaySelect />)
    expect(getByRole('hour-or-day-select')).toBeInTheDocument
})
