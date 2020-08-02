import React, { Component } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { LoginContainer, InnerContainer, LoginForm } from './Login.styles'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e, type) => {
        const fieldValue = {}

        fieldValue[type] = e.target.value
        this.setState(fieldValue)
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { username, password } = this.state

        // TODO validation

        try {
            const promise = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            // set cookie
            const authToken = promise.headers.get('Authorization')

            document.cookie = `x-auth-token=${authToken}`

            const response = await promise.json()

            if (response.username && authToken) {
                this.props.history.push('/')
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { username, password } = this.state

        return (
            <PageLayout>
                <LoginContainer>
                    <InnerContainer className='container'>
                        <h2>Lunch time</h2>
                        <LoginForm onSubmit={this.handleSubmit}>
                            <div className='form-row'>
                                <Input
                                    type='text'
                                    label='Username'
                                    id='username'
                                    value={username}
                                    onChange={(e) => this.handleChange(e, 'username')}
                                />
                            </div>
                            <div className='form-row'>
                                <Input
                                    type='password'
                                    label='Password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => this.handleChange(e, 'password')}
                                />
                            </div>
                            <Button title='Log in' type='submit' />
                        </LoginForm>
                    </InnerContainer>
                </LoginContainer>
            </PageLayout>
        )
    }
}

export default Login
