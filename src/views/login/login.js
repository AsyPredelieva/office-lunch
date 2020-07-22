import React from 'react'
import PageLayout from '../page-layout'
import { LoginContainer, InnerContainer, LoginForm } from './login.styles'

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
                                <input
                                    type='text'
                                    id='username'
                                    // v-model.trim="username"
                                    // @blur="$v.username.$touch"
                                />
                            </div>
                            <template v-if='$v.username.$error'>
                                <p
                                    className='error'
                                    // v-if="!$v.username.required"
                                >
                                    Please enter your name.
                                </p>
                                <p
                                    className='error'
                                    // v-else-if="!$v.username.minLength"
                                >
                                    Min length of your name should be more than 2 symbols
                                </p>
                            </template>
                        </div>
                        <div className='form-row'>
                            <div className='form-field'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    // v-model="password"
                                    // @blur="$v.password.$touch"
                                />
                            </div>
                            <template v-if='$v.password.$error'>
                                <p className='error' v-if='!$v.password.required'>
                                    Please enter your password.
                                </p>
                                <p
                                    className='error'
                                    // v-else-if="!$v.password.minLength || !$v.password.maxLength"
                                >
                                    Passoword should be between 3 and 16 symbols.
                                </p>
                            </template>
                        </div>
                        <button className='cta-btn'>Log in</button>
                    </LoginForm>
                </InnerContainer>
            </LoginContainer>
        </PageLayout>
    )
}

export default Login
