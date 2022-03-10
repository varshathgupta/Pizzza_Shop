import React from "react";
import { useCart} from "react-use-cart"
import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating'

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  
   width: 350px;
  height:700px;
`;

export const ProductImg = styled.img`
  height: 280px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h1`
  font-weight: bold;
  font-size: 22px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-size:15px
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export default function ItemCard(props) {
    const {addItem }= useCart();
  return (
    <ProductCard key={props.index}>
    <ProductImg src={props.img} alt={props.alt} />
    <ProductInfo>
      <ProductTitle>{props.title}</ProductTitle>
      <ProductDesc>{props.dec}</ProductDesc>
      <Rating initialValue={props.rating} />
      <ProductPrice>₹{props.price}</ProductPrice>
       <ProductButton onClick={() => addItem(props.item)} >{props.button}</ProductButton>
    </ProductInfo>
  </ProductCard>
  )
}
