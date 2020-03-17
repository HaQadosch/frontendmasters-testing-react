import React, { useState } from 'react'
import PointTarget from 'react-point'
import Loadable from 'react-loadable'
import styles from './calculator.module.css'

// NOTE: Normally I wouldn't do this, but I wanted to include code
// splitting in this example because it's something you have to
// handle with Jest and many people will want to know :).
const CalculatorDisplay = Loadable({
  loader: () => import('./calculator-display').then(mod => mod.default),
  loading: () => <div style={ { height: 120 } }>Loading display...</div>,
})

class CalculatorKey extends React.Component {
  render () {
    const { onPress, className = '', ...props } = this.props

    return (
      <PointTarget onPoint={ onPress }>
        <button className={ `${ styles.calculatorKey } ${ className }` } { ...props } />
      </PointTarget>
    )
  }
}

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
}

export const Calculator: React.FC = () => {
  const [value, setValue] = useState<number | null>(null)
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [operator, setOperator] = useState(null)
  const [waitingForOperande, setWaitingForOperande] = useState<boolean>(false)

  return (<div className=""></div>)

  function clearAll () {
    setValue(null)
    setDisplayValue('0')
    setOperator(null)
    setWaitingForOperande(false)
  }

  function clearDisplay () {
    setDisplayValue('0')
  }

  function clearLastChar () {
    setDisplayValue(displayValue => displayValue.substring(0, displayValue.length - 1) || '0')
  }

  function toggleSign () {
    const newValue = Number.parseFloat(displayValue) * -1

    setDisplayValue(newValue.toString())
  }

  function inputPercent () {
    const currentValue = Number.parseFloat(displayValue)

    if (currentValue !== 0) {
      const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
      const newValue = Number.parseFloat(displayValue) / 100

      setDisplayValue(newValue.toFixed(fixedDigits.length + 2).toString())
    }
  }

  function inputDot () {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue => `${ displayValue }.`)
      setWaitingForOperande(false)
    }
  }
}

