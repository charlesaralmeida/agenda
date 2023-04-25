import React from 'react'
import { render } from '@testing-library/react'
import ContainerEmptyRightNavigation from '.'

test('should render the empty container right navigation', () => {
    const { getByRole } = render(<ContainerEmptyRightNavigation />)
    expect(getByRole('container-empty-right-navigation')).toBeInTheDocument
})
