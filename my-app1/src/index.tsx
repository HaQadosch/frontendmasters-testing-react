import React, { ErrorInfo } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from "react-redux"
import { store } from "./store/store"

class ErrorBoundary extends React.Component<{}, { hasError: boolean }, {}> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError (error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={ store }>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
