import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MenuNavigation from '.'
import { LINKS } from 'utils/constants'
import { createMemoryHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'

const testLink = (role, adressLink) => {
    const { getByRole } = render(
        <BrowserRouter>
            <MenuNavigation />
        </BrowserRouter>
    )
    const roleFinder = getByRole(role)
    expect(roleFinder).toBeTruthy
    expect(roleFinder).toHaveAttribute('href', adressLink)
}

test('should render the Inicio link with the correct adress', () => {
    const role = 'linkInicio'
    const adressLink = LINKS.USER.INICIO
    testLink(role, adressLink)
})

test('should render the Agendar link with the correct adress', () => {
    const role = 'linkAgendar'
    const adressLink = LINKS.USER.AGENDAR
    testLink(role, adressLink)
})

test('should render the Localizar link with the correct adress', () => {
    const role = 'linkLocalizar'
    const adressLink = LINKS.USER.LOCALIZAR
    testLink(role, adressLink)
})

test('should render the AJUDA link with the correct adress', () => {
    const role = 'linkAjuda'
    const adressLink = LINKS.USER.AJUDA
    testLink(role, adressLink)
})

const testBrowserPathChange = (role, adressLink) => {
    const { getByRole } = render(
        <BrowserRouter>
            <MenuNavigation />
        </BrowserRouter>
    )
    const roleFinder = getByRole(role)
    fireEvent.click(roleFinder)
    expect(window.location.pathname).toBe(adressLink)
}

test('should change the browser path to the correct adress', () => {
    const role = 'linkInicio'
    const adressLink = LINKS.USER.INICIO
    testBrowserPathChange(role, adressLink)
})

test('should change the browser path to the Inicio adress', () => {
    const role = 'linkInicio'
    const adressLink = LINKS.USER.INICIO
    testBrowserPathChange(role, adressLink)
})

test('should change the browser path to the Agendar adress', () => {
    const role = 'linkAgendar'
    const adressLink = LINKS.USER.AGENDAR
    testBrowserPathChange(role, adressLink)
})

test('should change the browser path to the Localizar adress', () => {
    const role = 'linkLocalizar'
    const adressLink = LINKS.USER.LOCALIZAR
    testBrowserPathChange(role, adressLink)
})

test('should change the browser path to the Ajuda adress', () => {
    const role = 'linkAjuda'
    const adressLink = LINKS.USER.AJUDA
    testBrowserPathChange(role, adressLink)
})
