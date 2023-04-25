import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonWithIconAndLabel from '.'
import { ICONS } from 'utils/constants'

test('should get a button with the correct icon', () => {
    const props = {
        name: ICONS.PERSON,
        size: '5em',
        color: 'rgb(0,44,82)',
        label: 'Carga',
    }

    const { getByRole } = render(
        <ButtonWithIconAndLabel
            icon={{ name: props.name, size: props.size, color: props.color }}
            label={props.label}
        />
    )

    const icon = getByRole(props.name, { hidden: true })
    expect(icon.classList.toString()).toContain(props.name)
})

test('should get a button with the correct label', () => {
    const props = {
        name: ICONS.PERSON,
        size: '5em',
        color: 'rgb(0,44,82)',
        label: 'Carga',
    }

    const { getByText } = render(
        <ButtonWithIconAndLabel
            icon={{ name: props.name, size: props.size, color: props.color }}
            label={props.label}
        />
    )

    expect(getByText(props.label)).toBeTruthy
})
