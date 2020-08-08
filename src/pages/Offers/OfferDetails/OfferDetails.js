import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import Menu from '../../../components/Offers/Menu/Menu'
import { OrderDetail } from '../../../components/Offers/Menu/Menu.styles'
import CurrentOrder from '../../../components/Orders/CurrentOrder/CurrentOrder'
import PageLayout from '../../PageLayout'
import {
    OfferDetailsStyled,
    OfferMenuList,
    CurrentOrderStyled,
    CurrentOrderList,
    TotalPrice,
} from './OfferDetails.styles'
import OfferItem from '../../../components/Offers/OfferItem/OfferItem'

const OfferDetails = () => {
    const [offer, setOffer] = useState([])
    const [count, setCount] = useState(0)
    const [orderItem, setOrderItem] = useState({})
    const [updatedOrder, setUpdatedOrder] = useState([])
    const [totalSum, setTotalSum] = useState(0)
    const [isAdded, setIsAdded] = useState(true)
    const retailerName = useParams()
    const history = useHistory()

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

    const addOrderItem = (name, count, price) => {
        const currOrder = { name, count, price }

        setOrderItem(currOrder)
        setUpdatedOrder((orderItems) => [...orderItems, currOrder])
        // setCount('')
    }

    return (
        <PageLayout>
            <OfferDetailsStyled>
                <div className='container'>
                    {offer ? (
                        <div>
                            <form>
                                <h2>Today's menu in {offer.name}</h2>
                                <OfferMenuList>
                                    {offer?.menuCategories?.map((category, index) => (
                                        <Menu
                                            category={category}
                                            count={count}
                                            setCount={setCount}
                                            addOrderItem={addOrderItem}
                                            key={index}
                                        />
                                    ))}
                                </OfferMenuList>
                                {updatedOrder.length > 0 && (
                                    <>
                                        <CurrentOrderStyled>
                                            <h3>I'll take for lunch:</h3>
                                            <CurrentOrderList>
                                                {updatedOrder?.map((item, index) => (
                                                    <CurrentOrder
                                                        key={index}
                                                        name={item.name}
                                                        count={item.count}
                                                        price={item.price}
                                                        // removeCurrItem={removeCurrItem}
                                                    />
                                                ))}
                                            </CurrentOrderList>
                                            <TotalPrice>
                                                <strong>Total sum:</strong>
                                                <strong>{totalSum} lv</strong>
                                            </TotalPrice>
                                            <button className='cta-btn'>Order</button>
                                        </CurrentOrderStyled>
                                    </>
                                )}
                            </form>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </OfferDetailsStyled>
        </PageLayout>
    )
}

export default OfferDetails
