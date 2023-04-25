import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import IntermediateDestinationInfoPage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <IntermediateDestinationInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the ContainerIntermediateDestinationInfoPage', () => {
    const role = 'container-intermediate-destination-info'
    const { getByRole } = render(
        <BrowserRouter>
            <IntermediateDestinationInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
