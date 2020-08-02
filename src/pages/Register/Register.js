import React, { Component } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { RegisterContainer, InnerContainer, GridFull } from './Register.styles'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            lastName: '',
            department: '',
            email: '',
            password: '',
            rePassword: '',
        }
    }

    onChange = (ev, type) => {
        const fieldValue = {}

        fieldValue[type] = ev.target.value
        this.setState(fieldValue)
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { username, lastName, department, email, password, rePassword } = this.state

        try {
            const promise = await fetch('http://localhost:9999/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    lastName,
                    department,
                    email,
                    password,
                    rePassword,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

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
        const { username, lastName, department, email, password, rePassword } = this.state

        return (
            <PageLayout>
                <RegisterContainer>
                    <InnerContainer className='container'>
                        <h2>Register</h2>
                        <form className='grid-container' onSubmit={this.handleSubmit}>
                            <div className='grid-half'>
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
                                        type='text'
                                        label='Last Name'
                                        id='lastName'
                                        value={lastName}
                                        onChange={(e) => this.onChange(e, 'lastName')}
                                    />
                                </div>
                                <div className='form-row'>
                                    <Input
                                        type='text'
                                        label='Department'
                                        id='department'
                                        value={department}
                                        onChange={(e) => this.onChange(e, 'department')}
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
                                        onChange={(e) => this.onChange(e, 'email')}
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
                                <div className='form-row'>
                                    <Input
                                        type='password'
                                        label='Repeat Password'
                                        id='rePassword'
                                        value={rePassword}
                                        onChange={(e) => this.onChange(e, 'rePassword')}
                                    />
                                </div>
                            </div>
                            <GridFull className='grid-full'>
                                <Button title='Submit' />
                            </GridFull>
                        </form>
                    </InnerContainer>
                </RegisterContainer>
            </PageLayout>
        )
    }
}

export default Register
