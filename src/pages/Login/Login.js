import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { LoginContainer, InnerContainer, LoginForm } from './Login.styles'
import authenticate from '../../services/authServices'
import UserContext from '../../Context'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // TODO validation

        await authenticate(
            'http://localhost:9999/api/user/login',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            },
            (err) => console.log('Error:', e)
        )
    }

    return (
        <PageLayout>
            <LoginContainer>
                <InnerContainer className='container'>
                    <h2>Lunch time</h2>
                    <LoginForm onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <Input
                                type='text'
                                label='Username'
                                id='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='form-row'>
                            <Input
                                type='password'
                                label='Password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button title='Log in' type='submit' />
                    </LoginForm>
                </InnerContainer>
            </LoginContainer>
        </PageLayout>
    )
}

export default Login
