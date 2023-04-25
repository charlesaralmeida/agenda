import { render, screen } from '@testing-library/react'
import TooltipLogin from '.'

test('should render tooltip with full name and email', () => {
    const full_name = 'Mister Tester'
    const email = 'mt@mt.com'

    const { getByText } = render(
        <TooltipLogin full_name={full_name} email={email} />
    )

    expect(getByText(full_name)).toBeInTheDocument
    expect(getByText(email)).toBeInTheDocument
})
