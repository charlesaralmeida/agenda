import { render } from '@testing-library/react'
import Divider from '.'

test('should render a horizontal line with a class named "line" ', () => {
    const { getByRole } = render(<Divider />)
    const hr = getByRole('hr')
    expect(hr.classList).toContain('line')
})
