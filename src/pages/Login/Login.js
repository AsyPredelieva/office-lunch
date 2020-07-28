import React from 'react'
import PageLayout from '../PageLayout'
import { LoginContainer, InnerContainer, LoginForm } from './Login.styles'

const Login = () => {
    return (
        <PageLayout>
            <LoginContainer>
                <InnerContainer className='container'>
                    <h2>Lunch time</h2>
                    <LoginForm>
                        <div className='form-row'>
                            <div className='form-field'>
                                <label htmlFor='username'>Username</label>
                                <input type='text' id='username' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-field'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' />
                            </div>
                        </div>
                        <button className='cta-btn'>Log in</button>
                    </LoginForm>
                </InnerContainer>
            </LoginContainer>
        </PageLayout>
    )
}

export default Login
