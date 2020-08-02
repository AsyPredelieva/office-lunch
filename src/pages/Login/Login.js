import React, { Component } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { LoginContainer, InnerContainer, LoginForm } from './Login.styles'
import authenticate from '../../services/authServices'
import UserContext from '../../Context'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    static contextType = UserContext

    handleChange = (e, type) => {
        const fieldValue = {}

        fieldValue[type] = e.target.value
        this.setState(fieldValue)
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { username, password } = this.state

        // TODO validation

        await authenticate(
            'http://localhost:9999/api/user/login',
            { username, password },
            (user) => {
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (err) => console.log('Error:', e)
        )
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
