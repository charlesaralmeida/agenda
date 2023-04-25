import React from 'react'
import { render } from '@testing-library/react'
import ListButtonWithIconAndLabel from '.'
import { ICONS, COLORS } from 'utils/constants'

test('should render a certain list of ButtonsWithIconAndLabel', () => {
    const sizeIcons = '3em'
    const list = [
        {
            icon: {
                name: ICONS.PERSON,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: 'Passageiro',
        },
        {
            icon: { name: ICONS.CUBE, size: sizeIcons, color: COLORS.PRIMARY },
            label: 'Carga',
        },
    ]

    const { getAllByRole } = render(<ListButtonWithIconAndLabel list={list} />)
    const buttons = getAllByRole('ButtonWithIconAndLabel')
    expect(buttons.length).toBe(list.length)
})
