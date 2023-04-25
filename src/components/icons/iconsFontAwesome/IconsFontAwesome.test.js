import React from 'react'
import { render, screen } from '@testing-library/react'
import IconsFontAwesome from '.'
import { ICONS, WRAPERS } from 'utils/constants'

const testIcon = (name) => {
    const { getByRole } = render(
        <IconsFontAwesome name={name} size="5em" color="rgb(0, 44, 82)" />
    )

    const icon = getByRole(name, { hidden: true })
    expect(icon.classList.toString()).toContain(name)
}

test('should get a person icon', () => {
    const name = ICONS.PERSON
    testIcon(name)
})

test('should get a cube icon', async () => {
    const name = ICONS.CUBE
    testIcon(name)
})

test('should get a file icon', async () => {
    const name = ICONS.FILE_LINES
    testIcon(name)
})

test('should get a plane icon', async () => {
    const name = ICONS.PLANE
    testIcon(name)
})

test('should get a car icon', async () => {
    const name = ICONS.CAR
    testIcon(name)
})

test('should get a truck field icon', async () => {
    const name = ICONS.KOMBI
    testIcon(name)
})

test('should get a truck icon', async () => {
    const name = ICONS.FURGAO
    testIcon(name)
})

test('should get a van icon', async () => {
    const name = ICONS.VAN
    testIcon(name)
})

test('should get a bus icon', async () => {
    const name = ICONS.BUS
    testIcon(name)
})

test('should get a arrow left', async () => {
    const name = ICONS.CIRCLE_ARROW_LEFT
    testIcon(name)
})

test('should get a arrow right', async () => {
    const name = ICONS.CIRCLE_ARROW_RIGHT
    testIcon(name)
})

test('should get a x mark circle', async () => {
    const name = ICONS.CIRCLE_X_MARK
    testIcon(name)
})

test('size should be set by props', async () => {
    const size = '5em'
    const color = 'rgb(0, 44, 82)'
    const name = ICONS.PERSON
    const { getByRole } = render(
        <IconsFontAwesome name={name} size="5em" color="rgb(0, 44, 82)" />
    )

    const icon = getByRole(name, { hidden: true })
    expect(icon.parentElement.style.fontSize).toEqual(size)
})

test('color should be set by props', async () => {
    const size = '5em'
    const color = 'rgb(0, 44, 82)'
    const name = ICONS.PERSON
    const { getByRole } = render(
        <IconsFontAwesome name={name} size={size} color={color} />
    )

    const icon = getByRole(name, { hidden: true })
    expect(icon.parentElement.style.color).toEqual(color)
})
