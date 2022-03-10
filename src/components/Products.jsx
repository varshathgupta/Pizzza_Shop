import React from 'react';
import styled from 'styled-components';
import CartData from '../data'
import ItemCard from './ItemCard';


export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  
  margin: 0 auto;
`;
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;


function Products() {
  
  return (
    <ProductsContainer>
      <ProductsHeading>Choose Your Favorite Pizza</ProductsHeading>
      <ProductWrapper>
        {CartData.map((item, index) => {
          return(
         <ItemCard
         img={item.img_url}
         price={item.price}
         title={item.name}
         dec={item.description}
         rating={item.rating}
         button={item.button}
         item={item}
         key={index}
         />
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;