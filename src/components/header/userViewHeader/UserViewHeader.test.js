import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import UserViewHeader from '.'

test('should render the DGA logo', () => {
    const role = 'logo'
    const { getByRole } = render(
        <BrowserRouter>
            <UserViewHeader />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the user menu navigation', () => {
    const role = 'user-menu-navigation'
    const { getByRole } = render(
        <BrowserRouter>
            <UserViewHeader />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the Login Handler', () => {
    const role = 'login-handler'
    const { getByRole } = render(
        <BrowserRouter>
            <UserViewHeader />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the divider', () => {
    const role = 'divider'
    const { getByRole } = render(
        <BrowserRouter>
            <UserViewHeader />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
