import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PassengersPage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <PassengersPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the PassengersPage', () => {
    const role = 'container-passenger-info'
    const { getByRole } = render(
        <BrowserRouter>
            <PassengersPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
