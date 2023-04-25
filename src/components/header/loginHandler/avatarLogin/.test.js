import { getByAltText, render, screen } from '@testing-library/react'
import AvatarLogin from '.'
import photo from 'img/photo-login-dummie.png'

test('should render an avatar image', () => {
    const altText = 'user_picture'
    const full_name = 'Mister Tester'
    const email = 'mt@mt.com'

    render(<AvatarLogin image={photo} full_name={full_name} email={email} />)
    const img = screen.getByAltText(altText)

    expect(img.src).toContain(photo)
})

test('the avatar image should have a tooltip with the full name and email', () => {
    const altText = 'user_picture'
    const full_name = 'Mister Tester'
    const email = 'mt@mt.com'

    render(<AvatarLogin image={photo} full_name={full_name} email={email} />)
    const img = screen.getByAltText(altText)
    expect(screen.getByText(full_name)).toBeInTheDocument
    expect(screen.getByText(email)).toBeInTheDocument
})
