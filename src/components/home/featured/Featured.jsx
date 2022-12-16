import React from 'react'
import "./feat.css"
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
const Featured = (props) => {
    const mrktContract = props.mrktContract;
    const nftContract = props.nftContract;
    const [royaltyReceiver, setRoyaltyReceiver] = useState(0)
    const [royaltyPercent, setRoyaltyPercent] = useState(0)
    const [featuredItems, setFeaturedItems] = useState(0)
    const [getContractName, setContractName] = useState("")

    const buyMarketItem = async (item) => {
        const order = await mrktContract.purchaseItem(Number(item.itemID), {value: item.totalPrice })
        return order
    }
}

export default Featured
