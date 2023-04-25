import { fireEvent, render, within } from '@testing-library/react'
import PassengerTypeSelect from '.'

test('should render the passenger type select container', () => {
    const { getByRole } = render(<PassengerTypeSelect />)
    expect(getByRole('passenger-type-input')).toBeInTheDocument
})

test('should render the passenger type select', () => {
    const { getByRole } = render(<PassengerTypeSelect />)
    expect(getByRole('passenger-type-input')).toHaveTextContent('Vínculo')
})

const testListBoxItem = (item) => {
    const { getByRole } = render(<PassengerTypeSelect />)
    fireEvent.mouseDown(getByRole('button'))
    const listbox = within(getByRole('listbox'))
    expect(listbox.getByText(item)).toHaveTextContent(item)
}

test('should render the Servidor Unicamp item', () => {
    testListBoxItem('Servidor Unicamp')
})

test('should render the Servidor Funcamp item', () => {
    testListBoxItem('Servidor Funcamp')
})

test('should render the Aluno item', () => {
    testListBoxItem('Aluno')
})
