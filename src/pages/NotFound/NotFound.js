import React from 'react'
import PageLayout from '../PageLayout'
import { ContainerStyled } from './NotFound.styles'

const NotFound = () => {
    return (
        <PageLayout>
            <ContainerStyled className='container'>
                <h2>Page not found</h2>
            </ContainerStyled>
        </PageLayout>
    )
}

export default NotFound
