import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button} from 'ui/buttons';
import {ProductCardStyles, Card, CardDiv} from './styles'


function ProductCard ({children, product, ...props})  {
  const navigator = useNavigate()
  const  {productName, productPrice, imageUrl, productDescription} = {...product}
  return (
        <ProductCardStyles  {...props}>
          <Card>
            <img src={imageUrl} alt="Hockey Stick"/>
            <CardDiv>
              <h2>{productName}</h2>
              <p>{productDescription}</p>
              <h3>{productPrice}</h3>
              <div>
                <Button width="5 rem" height='2rem' margin="1rem 1.5rem 0 0" bc='#19CBFF' color='white' onClick={()=> navigator('edit')}>Edit</Button>
                <Button width="5 rem" bc='#F44336' color='white'>Delete</Button>
              </div>
            </CardDiv>
          </Card>
        </ProductCardStyles>
  )
}

export default ProductCard