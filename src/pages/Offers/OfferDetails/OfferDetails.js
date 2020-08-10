import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import Menu from '../../../components/Offers/Menu/Menu'
import CurrentOrder from '../../../components/Orders/CurrentOrder/CurrentOrder'
import PageLayout from '../../PageLayout'
import { OfferDetailsStyled, OfferMenuList } from './OfferDetails.styles'

const OfferDetails = () => {
    const [offer, setOffer] = useState([])
    const [updatedOrder, setUpdatedOrder] = useState([])

    const [totalSum, setTotalSum] = useState(0)

    const retailerName = useParams()
    const history = useHistory()

    // get offer details
    const getOffer = async () => {
        const response = await fetch('http://localhost:9999/api/offers')

        if (!response.ok) {
            history.push('/')
        } else {
            const data = await response.json()
            const currOffer = await data.filter((offer) => offer.name === retailerName.id)

            setOffer(currOffer[0])
        }
    }

    useEffect(() => {
        getOffer()
    }, [])

    // calc order Total sum
    useEffect(() => {
        const currSum = updatedOrder.reduce((acc, curr) => acc + curr.sum, 0)

        setTotalSum(currSum.toFixed(2))
    }, [updatedOrder])

    return (
        <PageLayout>
            <OfferDetailsStyled>
                <div className='container'>
                    {offer ? (
                        <form>
                            <h2>Today's menu in {offer.name}</h2>
                            <OfferMenuList>
                                {offer?.menuCategories?.map((category, index) => (
                                    <Menu
                                        key={index}
                                        category={category}
                                        handleOrder={(currOrderItem) =>
                                            setUpdatedOrder(currOrderItem)
                                        }
                                    />
                                ))}
                            </OfferMenuList>
                            {updatedOrder.length > 0 && (
                                <CurrentOrder
                                    updatedOrder={updatedOrder}
                                    totalSum={totalSum}
                                    handleOrder={(currOrderItem) => setUpdatedOrder(currOrderItem)}
                                />
                            )}
                        </form>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </OfferDetailsStyled>
        </PageLayout>
    )
}

export default OfferDetails
