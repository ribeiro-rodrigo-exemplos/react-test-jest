import React from 'react'
import Link from './Link'
import { render, fireEvent } from '@testing-library/react'

it('Link changes the class when hovered', () => {

    const { container, getByText } = render(<Link page="http://www.facebook.com">Facebook</Link>)

    //console.log(component)

    expect(getByText("Facebook")).toBeInTheDocument()
    //qexpect(container.firstChild).toMatchInlineSnapshot('')

    expect(container.firstChild.classList.contains('normal')).toBe(true)

    fireEvent.mouseEnter(container.firstChild)

    expect(container.firstChild.classList.contains('hovered')).toBe(true)

    fireEvent.mouseLeave(container.firstChild)

    expect(container.firstChild.classList.contains('normal')).toBe(true)

    expect(container).toMatchSnapshot()

})