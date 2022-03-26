import React from 'react';

import {ProductPreviewStyles, ProductDescription,ProductImage,ProductName,ProductPrice} from './styles'

function ProductPreview ({children,productName,productPrice,productImage,productDescription, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage.previewImage} alt="Hockey Stick" width={320} height="184"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>$ {productPrice}</ProductPrice>
          <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductPreview