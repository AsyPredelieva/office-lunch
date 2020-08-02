import React, { Component } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import { LoginContainer, InnerContainer, LoginForm } from './Login.styles'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    onChange = (ev, type) => {
        const fieldValue = {}

        fieldValue[type] = ev.target.value
        this.setState(fieldValue)
    }

    render() {
        const { username, password } = this.state

        return (
            <PageLayout>
                <LoginContainer>
                    <InnerContainer className='container'>
                        <h2>Lunch time</h2>
                        <LoginForm>
                            <div className='form-row'>
                                <Input
                                    type='text'
                                    label='Username'
                                    id='username'
                                    value={username}
                                    onChange={(e) => this.onChange(e, 'username')}
                                />
                            </div>
                            <div className='form-row'>
                                <Input
                                    type='password'
                                    label='Password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => this.onChange(e, 'password')}
                                />
                            </div>
                            <button className='cta-btn'>Log in</button>
                        </LoginForm>
                    </InnerContainer>
                </LoginContainer>
            </PageLayout>
        )
    }
}

export default Login
