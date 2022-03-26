import { ProductCard } from "components/productcaard";
import React from "react";

import {PanelStlyes, PanelBody, PanelHeader} from './styles'

function AllProducts({title, ...props}) {
    return (
        <PanelStlyes>
            <PanelHeader>
            <h2>{title || "Display Panel"}</h2>
            </PanelHeader>
            <PanelBody>
                <ProductCard></ProductCard>
            </PanelBody>
        </PanelStlyes>
    )
}

export default AllProducts;