import React from 'react'
import './App.css'
import { Calculator } from './Calculator'

export const App: React.FC = () => {
  return (
    <article className="App">
      <Calculator />
      <div style={ { marginTop: 30, textAlign: 'center' } }>
        { 'Calculator component ' }
        <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a> by
      <br />
        <a href="https://twitter.com/mjackson">Michael Jackson</a> { 'of ' }
        <a href="https://reacttraining.com/">React Training</a>
      </div>
    </article>
  );
}
