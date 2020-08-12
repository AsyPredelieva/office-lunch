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

    // Validation
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

    const validateUsername = () => {
        if (username.length < 2 || username.length > 20) {
            setUsernameError('Username should be between 2 and 20 symbols.')
            return false
        }
        return true
    }

    const validatePassword = () => {
        if (!password.match(/^[a-z0-9_-]{3,16}$/g)) {
            setPasswordError('Passoword should be between 3 and 16 symbols.')
            return false
        }
        setIsDisabled(false)
        return true
    }

    const handleUsernameBlur = () => {
        const isValidUsername = validateUsername()

        isValidUsername && setUsernameError('')
    }

    const handlePasswordBlur = () => {
        const isValidPassword = validatePassword()

        isValidPassword && setPasswordError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

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
                                onBlur={handleUsernameBlur}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {usernameError && <p className='error'>{usernameError}</p>}
                        </div>
                        <div className='form-row'>
                            <Input
                                type='password'
                                label='Password'
                                id='password'
                                value={password}
                                onBlur={handlePasswordBlur}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <p className='error'>{passwordError}</p>}
                        </div>
                        <Button title='Log in' type='submit' disabled={isDisabled} />
                    </LoginForm>
                </InnerContainer>
            </LoginContainer>
        </PageLayout>
    )
}

export default Login
