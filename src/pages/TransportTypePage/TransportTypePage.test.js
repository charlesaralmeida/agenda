import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TransportTypePage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <TransportTypePage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the container TransportTypes', () => {
    const role = 'container-transport-types'
    const { getByRole } = render(
        <BrowserRouter>
            <TransportTypePage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
