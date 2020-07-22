import styled from 'styled-components'
import loginBackground from '../../assets/login-bckgr.png'

export const LoginContainer = styled.main`
    width: 100%;
    background: url(${loginBackground}) right top 40px no-repeat;
    background-size: contain;
`

export const InnerContainer = styled.div`
    margin: 40px auto;
`

export const LoginForm = styled.form`
    width: 465px;
    max-width: 100%;
    margin: 0 auto;
`
