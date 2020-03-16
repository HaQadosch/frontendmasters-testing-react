import React from 'react'
import { render } from '@testing-library/react'
import { ItemList } from '../UI/Itemlist'

describe('<ItemList /> ', () => {
  it('should render no items when given an empty list', () => {
    const { getByText } = render(<ItemList items={ [] } />)
    const component = getByText(/no items/i)
    expect(component).toBeInTheDocument()
  })

  it('should render the items listed ', () => {
    const { getByText, container } = render(<ItemList items={ ['apple', 'banana', 'orange'] } />)
    const list = container.querySelectorAll('ul li')
    expect(list).toHaveLength(3)

    const apple = getByText(/apple/i)
    const banana = getByText(/banana/i)
    const orange = getByText(/orange/i)
  })

  it.todo('should do more')
})