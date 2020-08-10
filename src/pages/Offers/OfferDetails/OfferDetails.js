import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { OrderContext } from '../../../Context'
import Menu from '../../../components/Offers/Menu/Menu'
import CurrentOrder from '../../../components/Orders/CurrentOrder/CurrentOrder'
import PageLayout from '../../PageLayout'
import {
    OfferDetailsStyled,
    OfferMenuList,
    CurrentOrderStyled,
    CurrentOrderList,
    TotalPrice,
} from './OfferDetails.styles'
import { OrderDetail } from '../../../components/Offers/Menu/Menu.styles'

const OfferDetails = () => {
    const [offer, setOffer] = useState([])
    const [updatedOrder, setUpdatedOrder] = useState([])

    const [name, setName] = useState('')
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')

    const [totalSum, setTotalSum] = useState(0)
    const [isAdded, setIsAdded] = useState(true)

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

        setTotalSum(currSum)
    }, [updatedOrder])

    const removeOrderItem = (name, count, price) => {
        console.log('remove order item', name, count, price)
    }

    return (
        <PageLayout>
            <OfferDetailsStyled>
                <div className='container'>
                    <OrderContext.Provider value={{ name, count, price, removeOrderItem }}>
                        {offer ? (
                            <div>
                                <form>
                                    <h2>Today's menu in {offer.name}</h2>
                                    <OfferMenuList>
                                        {offer?.menuCategories?.map((category, index) => (
                                            <Menu
                                                key={index}
                                                category={category}
                                                handleUpdatedOrder={(currOrderItem) =>
                                                    setUpdatedOrder(currOrderItem)
                                                }
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
                                                            price={item.sum}
                                                            // removeOrderItem={removeOrderItem}
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
                    </OrderContext.Provider>
                </div>
            </OfferDetailsStyled>
        </PageLayout>
    )
}

export default OfferDetails
