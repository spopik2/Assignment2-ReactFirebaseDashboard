import React from 'react';
 
import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription} from './styles'


function ProductPreview ({children, productName, productPrice, productImage, productDescription,  ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
           <ProductImage>
              <img src={productImage.previewImage}  alt="Hockey Sticks" width="320" height="320"/>
           </ProductImage>
           <ProductName>{productName}</ProductName>
           <ProductPrice>$ {productPrice}</ProductPrice>
           <ProductDescription>
            {productDescription}
           </ProductDescription>
                

        </ProductPreviewStyles>
  )
}

export default ProductPreview