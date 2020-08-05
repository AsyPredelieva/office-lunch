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
                                    onChange={(e) => setUsername(e.target.value)}
                                />
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <div className='form-row'>
                                <Input
                                    type='password'
                                    label='Repeat Password'
                                    id='rePassword'
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <GridFull className='grid-full'>
                            <Button title='Submit' type='submit' />
                        </GridFull>
                    </form>
                </InnerContainer>
            </RegisterContainer>
        </PageLayout>
    )
}

export default Register
