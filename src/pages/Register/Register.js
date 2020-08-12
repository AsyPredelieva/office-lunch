import React, { useState, useContext } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { RegisterContainer, InnerContainer, GridFull } from './Register.styles'
import authenticate from '../../services/authServices'
import UserContext from '../../Context'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [lastName, setLastName] = useState('')
    const [department, setDepartment] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    // validate register fields
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [rePasswordError, setRePasswordError] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

    const validateUsername = () => {
        if (username.length < 2 || username.length > 20) {
            setUsernameError('Username should be between 2 and 20 symbols.')
            return false
        }
        return true
    }

    const validateEmail = () => {
        if (
            !email.match(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
        ) {
            setEmailError('Please enter correct e-mail.')
            return false
        }
        return true
    }

    const validatePassword = () => {
        if (!password.match(/^[a-z0-9_-]{3,16}$/g)) {
            setPasswordError('Passoword should be between 3 and 16 symbols.')
            return false
        }
        return true
    }

    const validateRePassword = () => {
        if (password !== rePassword) {
            setRePasswordError('Passoword should match.')
            return false
        }
        setIsDisabled(false)
        return true
    }

    const handleUsernameBlur = () => {
        const isValidUsername = validateUsername()

        isValidUsername && setUsernameError('')
    }

    const handleEmailBlur = () => {
        const isValidEmail = validateEmail()

        isValidEmail && setEmailError('')
    }

    const handlePasswordBlur = () => {
        const isValidPassword = validatePassword()

        isValidPassword && setPasswordError('')
    }

    const handleRePasswordBlur = () => {
        const isValidRePassword = validateRePassword()

        isValidRePassword && setRePasswordError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await authenticate(
            'http://localhost:9999/api/user/register',
            {
                username,
                lastName,
                department,
                email,
                password,
                rePassword,
            },
            (user) => {
                context.logIn(user)
                history.push('/')
            },
            (err) => console.log('Error: ', err)
        )
    }

    return (
        <PageLayout>
            <RegisterContainer>
                <InnerContainer className='container'>
                    <h2>Register</h2>
                    <form className='grid-container' onSubmit={handleSubmit}>
                        <div className='grid-half'>
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
                                    type='text'
                                    label='Last Name'
                                    id='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-row'>
                                <Input
                                    type='text'
                                    label='Department'
                                    id='department'
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='grid-half'>
                            <div className='form-row'>
                                <Input
                                    type='email'
                                    label='Email'
                                    id='email'
                                    value={email}
                                    onBlur={handleEmailBlur}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <p className='error'>{emailError}</p>}
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
                            <div className='form-row'>
                                <Input
                                    type='password'
                                    label='Repeat Password'
                                    id='rePassword'
                                    value={rePassword}
                                    onBlur={handleRePasswordBlur}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                                {rePasswordError && <p className='error'>{rePasswordError}</p>}
                            </div>
                        </div>
                        <GridFull className='grid-full'>
                            <Button title='Submit' type='submit' disabled={isDisabled} />
                        </GridFull>
                    </form>
                </InnerContainer>
            </RegisterContainer>
        </PageLayout>
    )
}

export default Register
