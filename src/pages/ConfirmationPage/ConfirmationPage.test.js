import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import VehicleTypePage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <VehicleTypePage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the container Vehicle Type', () => {
    const role = 'container-vehicle-types'
    const { getByRole } = render(
        <BrowserRouter>
            <VehicleTypePage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
