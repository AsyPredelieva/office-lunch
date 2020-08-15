import React, { Component } from 'react'
import PageLayout from './pages/PageLayout'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Component Did Catch is triggered', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <PageLayout>
                    <h1>Ooops... Something went wrong!</h1>
                </PageLayout>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
