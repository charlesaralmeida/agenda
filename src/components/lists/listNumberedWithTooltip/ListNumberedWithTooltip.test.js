import React from 'react'
import { render } from '@testing-library/react'
import ListNumberedWithTooltip from '.'
import { ICONS, COLORS } from 'utils/constants'

const list = [
    'Rua 10 de Abril, 1268 - Artur Nogueira - SP - tempo: 1:30 horas',
    'Rua Josué de Castro, 140 - Campinas - SP - tempo: 2 dias',
]

test('should render the container list numbered with tooltip', () => {
    const { getByRole } = render(<ListNumberedWithTooltip list={list} />)
    expect(getByRole('ContainerListNumberedWithTooltip')).toBeInTheDocument
})

test('should render a whole list numbered', () => {
    const { getByText } = render(<ListNumberedWithTooltip list={list} />)

    list.forEach((item, index) => {
        index = index + 1
        let label = '(' + index + '...)'
        expect(getByText(label)).toBeInTheDocument
    })
})

test('should render a whole list numbered with tooltip on each item of the list', () => {
    const { getByText } = render(<ListNumberedWithTooltip list={list} />)

    list.forEach((item, index) => {
        expect(getByText(item)).toBeInTheDocument
    })
})

test('should render a whole list with x icons on each item of the list', () => {
    const iconModel = {
        name: ICONS.CIRCLE_X_MARK,
        size: '1.2em',
        color: COLORS.RED,
    }

    const { getAllByRole } = render(<ListNumberedWithTooltip list={list} />)

    const icon = getAllByRole(iconModel.name, { hidden: true })
    icon.forEach((item) => {
        expect(item.classList.toString()).toContain(iconModel.name)
    })
})
