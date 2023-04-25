import React from 'react'
import { render } from '@testing-library/react'
import TitleContainer from '.'

test('should render a label specified by props', () => {
    const text = 'Teste'
    const { getByText } = render(<TitleContainer text={text} />)

    expect(getByText(text)).toBeTruthy
})

test('should render a children element specified by props', () => {
    const text = 'Teste'
    const children = <div role="teste">Teste</div>
    const { getByRole } = render(
        <TitleContainer text={text} children={children} />
    )

    expect(getByRole('teste')).toBeTruthy
})
