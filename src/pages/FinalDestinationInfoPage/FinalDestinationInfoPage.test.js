import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FinalDestinationInfoPage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <FinalDestinationInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the ContainerFinalDestinationInfoPage', () => {
    const role = 'container-final-destination-info'
    const { getByRole } = render(
        <BrowserRouter>
            <FinalDestinationInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
