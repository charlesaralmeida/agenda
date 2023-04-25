import { render } from '@testing-library/react'
import ReferencePointInput from '.'

test('should render the reference point field', () => {
    const { getByRole } = render(<ReferencePointInput />)
    expect(getByRole('reference-point-input')).toBeInTheDocument
    expect(getByRole('reference-point-input')).toHaveTextContent(
        'Ponto de Referência'
    )
})
