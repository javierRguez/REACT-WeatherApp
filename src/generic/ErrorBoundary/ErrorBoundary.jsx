import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  // this.setState(getDerivedStateFromError(error))
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorInfo', errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <h1>Hubo un error</h1> : children
  }
}

export default ErrorBoundary
