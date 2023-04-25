import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BoardingInfoPage from '.'

test('should render the user view header', () => {
    const role = 'user-view-header'
    const { getByRole } = render(
        <BrowserRouter>
            <BoardingInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})

test('should render the ContainerBoardingInfo', () => {
    const role = 'container-boarding-info'
    const { getByRole } = render(
        <BrowserRouter>
            <BoardingInfoPage />
        </BrowserRouter>
    )

    expect(getByRole(role)).toBeInTheDocument
})
