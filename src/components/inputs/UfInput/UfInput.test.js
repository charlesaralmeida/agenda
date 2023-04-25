import { render } from '@testing-library/react'
import UfInput from '.'

test('should render the uf field', () => {
    const { getByRole } = render(<UfInput />)
    expect(getByRole('uf-input')).toBeInTheDocument
    expect(getByRole('uf-input')).toHaveTextContent('UF')
})
