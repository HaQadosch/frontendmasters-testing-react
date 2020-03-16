import React from 'react'

interface IItemlist {
  items: Array<string>
}

const NoItems: React.FC = () => <p>no items</p>

export const ItemList: React.FC<IItemlist> = ({ items }) => {
  if (items.length === 0) return <NoItems />

  return (
    <ul>
      {
        items.map(item => <li key={ item }>{ item }</li>)
      }
    </ul>
  )
}