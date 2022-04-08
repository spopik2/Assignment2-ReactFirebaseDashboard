import React, {useState, useEffect} from "react";
import {ref, get} from 'firebase/database'

import { ProductCard } from "components/products/productcaard";
import {db} from 'libs/firebase'
import {PanelStlyes, PanelBody, PanelHeader} from './styles'

function AllProducts({title, ...props}) {
    const [productData, setProductData] = useState(null)
    
    useEffect(()=>{
    
        async function getProductData(){
            const productRef = ref(db, 'products')
            const productSnapShot = await get(productRef)
            setProductData(Object.values(productSnapShot.val()))

        }
        getProductData()
    },[])

    return (
        <PanelStlyes>
            <PanelHeader>
            <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>
                    {
                        productData ? productData.map(product=><ProductCard key={product.uid} product={product}/>) : <p>There are no sticks in our inventory</p>
                    }
            </PanelBody>
        </PanelStlyes>
    )
}

export default AllProducts;