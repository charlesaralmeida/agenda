import { render } from '@testing-library/react'
import LoginHandler from '.'

test('should render an avatar image', () => {
    const altText = 'user_picture'

    const { getByAltText } = render(<LoginHandler />)

    expect(getByAltText(altText)).toBeInTheDocument
})

test('should render a button', () => {
    const role = 'logout'

    const { getByRole } = render(<LoginHandler />)

    expect(getByRole(role)).toBeInTheDocument
})
