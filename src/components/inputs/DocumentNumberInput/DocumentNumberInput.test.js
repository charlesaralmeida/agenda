import { render } from '@testing-library/react'
import DocumentNumberInput from '.'

test('should render the document field', () => {
    const { getByRole } = render(<DocumentNumberInput />)
    expect(getByRole('document-input')).toBeInTheDocument
})

test('should render the document field label', () => {
    const { getByRole } = render(<DocumentNumberInput />)
    expect(getByRole('document-input')).toHaveTextContent('Matrícula')
})
