import React from 'react'
import { AppDispatch } from './store/store'
import { useDispatch, useSelector } from "react-redux"
import { RootState, increment, decrement } from './store/rootReducer';

interface ICounter {

}

export const Counter: React.FC<ICounter> = () => {
  const dispatch: AppDispatch = useDispatch()
  const { count } = useSelector(({ counter }: RootState) => counter)

  return (
    <>
      <p>{ count }</p>
      <p>sync</p>
      <button onClick={ handleOnClick_Inc }><span role='img' aria-label='increment'>👍🏻</span></button>
      <button onClick={ handleOnClick_Dec }><span role='img' aria-label='decrement'>👎🏻</span></button>
      <p>async</p>
      <button onClick={ handleOnClick_IncAsync }><span role='img' aria-label='incrementAsync'>👍🏻⏳</span></button>
    </>
  )

  function handleOnClick_Inc (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(increment())
  }

  function handleOnClick_IncAsync (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch({ type: 'saga/incrementAsync' })
  }

  function handleOnClick_Dec (_: React.MouseEvent<HTMLButtonElement>): void {
    dispatch(decrement())
  }
}