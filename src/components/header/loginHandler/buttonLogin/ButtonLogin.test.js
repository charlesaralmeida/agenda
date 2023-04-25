import { render, screen, fireEvent } from '@testing-library/react'
import ButtonLogin from '.'
import { BUTTONS } from 'utils/constants'

test('should render the button "Conectar" when buttonType is assigned to it', () => {
    const buttonType = BUTTONS.LOGIN
    const handleLogout = jest.fn()
    const handleLogin = jest.fn()
    const buttonText = BUTTONS.LOGIN

    render(
        <ButtonLogin
            buttonType={buttonType}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
        />
    )

    expect(screen.getByText(buttonText)).toBeInTheDocument
})

test('should render the button "Desconectar" when buttonType is assigned to it', () => {
    const buttonType = BUTTONS.LOGOUT
    const handleLogout = jest.fn()
    const handleLogin = jest.fn()
    const buttonText = BUTTONS.LOGOUT

    render(
        <ButtonLogin
            buttonType={buttonType}
            handleLogout={handleLogout}
            handleLogin={handleLogin}
        />
    )

    expect(screen.getByText(buttonText)).toBeInTheDocument
})
