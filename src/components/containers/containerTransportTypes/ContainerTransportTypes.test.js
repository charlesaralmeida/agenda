import React from 'react'
import { render } from '@testing-library/react'
import ContainerTransportTypes from 'components/containers/containerTransportTypes'
import { LABELS } from 'utils/constants'

test('should render the transport type label', () => {
    const text = LABELS.TIPO_TRANSPORTE
    const { getByText } = render(<ContainerTransportTypes />)

    expect(getByText(text)).toBeInTheDocument
})

test('should render the buttons container', () => {
    const role = 'list-button-with-icon-and-label'
    const { getByRole } = render(<ContainerTransportTypes />)
    expect(getByRole(role)).toBeInTheDocument
})
