import React from 'react'
import { render } from '@testing-library/react'
import Label from '.'

test('should render a label specified by props', () => {
    const text = 'Teste'
    const { getByText } = render(<Label text={text} />)

    expect(getByText(text)).toBeTruthy
})
