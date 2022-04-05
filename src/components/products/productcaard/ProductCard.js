import React from 'react';

import {ProductCardStyles, Card, CardDiv} from './styles'

import ProductPlaceHolder from 'assets/images/steve-sticks-1.jpg'
import ProductPlaceHolder1 from 'assets/images/steve-sticks-2.jpg'
import ProductPlaceHolder2 from 'assets/images/steve-sticks-3.jpg'



function ProductCard ({children, ...props})  {
  return (
        <ProductCardStyles  {...props}>
          <Card>
            <img src={ProductPlaceHolder} alt="Bauer Hockey"/>
            <CardDiv>
              <h2>Bauer Vapor 30</h2>
              <p>Left handed. 75 Flex. Kane Curve. Lightly used</p>
              <h3>199.99</h3>
            </CardDiv>
          </Card>
          <Card>
            <img src={ProductPlaceHolder1} alt="Bauer Hockey Stick"/>
            <CardDiv>
              <h2>Bauer Nexus</h2>
              <p>Left handed. 75 Flex. Kane Curve. Used for 2 seasons. Its too small for me now</p>
              <h3>29.99</h3>
            </CardDiv>
          </Card>
          <Card>
            <img src={ProductPlaceHolder2} alt="Bauer Hockey Stick"/>
            <CardDiv>
              <h2>Bauer Supreme S30</h2>
              <p>Right handed. 110 Flex. Makar Curve. Never used</p>
              <h3>299.99</h3>
            </CardDiv>
          </Card>
        </ProductCardStyles>
  )
}

export default ProductCard