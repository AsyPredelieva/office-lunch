import React from 'react'
import PageLayout from '../PageLayout'
import { RegisterContainer, InnerContainer, GridFull } from './Register.styles'

const Register = () => {
    return (
        <PageLayout>
            <RegisterContainer>
                <InnerContainer className='container'>
                    <h2>Register</h2>
                    <form className='grid-container'>
                        <div className='grid-half'>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='Name'>Username</label>
                                    <input type='text' id='name' />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='last-name'>Last Name</label>
                                    <input type='text' id='last-name' />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='department'>Department</label>
                                    <input type='text' id='department' />
                                </div>
                            </div>
                        </div>
                        <div className='grid-half'>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='text' id='email' />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' id='password' />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='re-password'>Repeat password:</label>
                                    <input type='password' id='re-password' />
                                </div>
                            </div>
                        </div>
                        <GridFull className='grid-full'>
                            <button className='cta-btn'>Submit</button>
                        </GridFull>
                    </form>
                </InnerContainer>
            </RegisterContainer>
        </PageLayout>
    )
}

export default Register
