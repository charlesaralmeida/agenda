import { openPage } from './index'
import { LINKS } from './constants'

describe('Function openPage', () => {
    test('openPage(url) should be an alias to window.open(url, "_blank")', async () => {
        const mockedOpen = jest.fn()
        const originalOpen = window.open
        window.open = mockedOpen

        const url = 'testUrl'
        const testOpenPage = openPage(url)

        testOpenPage()
        expect(window.open).toBeCalledWith(url, '_blank')
        window.open = originalOpen
    })
})
