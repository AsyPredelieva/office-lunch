import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Menu from '../../../components/Offers/Menu/Menu'
import CurrentOrder from '../../../components/Orders/CurrentOrder/CurrentOrder'
import PageLayout from '../../PageLayout'
import { getOffers } from '../../../services/getOffers'
import Loader from '../../../components/common/Loader/Loader'
import { OfferDetailsStyled, OfferMenuList } from './OfferDetails.styles'

const OfferDetails = () => {
    const [offer, setOffer] = useState([])
    const [updatedOrder, setUpdatedOrder] = useState([])
    const [totalSum, setTotalSum] = useState(0)
    const retailerName = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await getOffers()
                .then((data) => data.filter((offer) => offer.name === retailerName.id))
                .then((res) => setOffer(res[0]))
        }

        fetchData()
    }, [retailerName])

    console.log('Offers ', offer)

    // calc order Total sum
    useEffect(() => {
        const currSum = updatedOrder.reduce((acc, curr) => acc + curr.sum, 0)

        setTotalSum(currSum.toFixed(2))
    }, [updatedOrder])

    return (
        <PageLayout>
            <OfferDetailsStyled>
                <div className='container'>
                    <h2>Today's menu in {offer.name}</h2>
                    {offer.length !== 0 ? (
                        <form>
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
                        <Loader />
                    )}
                </div>
            </OfferDetailsStyled>
        </PageLayout>
    )
}

export default OfferDetails
