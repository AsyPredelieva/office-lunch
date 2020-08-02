import React, { Component } from 'react'
import PageLayout from '../PageLayout'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Button'
import { RegisterContainer, InnerContainer, GridFull } from './Register.styles'
import authenticate from '../../services/authServices'
import UserContext from '../../Context'

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

    static contextType = UserContext

    onChange = (ev, type) => {
        const fieldValue = {}

        fieldValue[type] = ev.target.value
        this.setState(fieldValue)
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { username, lastName, department, email, password, rePassword } = this.state

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
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (err) => console.log('Error: ', err)
        )
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
                                <Button title='Submit' type='submit' />
                            </GridFull>
                        </form>
                    </InnerContainer>
                </RegisterContainer>
            </PageLayout>
        )
    }
}

export default Register
