import React from "react";
import { useCart } from "react-use-cart";
import styled from 'styled-components';



export const Empty = styled.div`

background: #150f0f;
color: #fff;
font-size: 25px;
font-weight: bold;
text-align: center;
align-items: center;
`;

export const CartContainer = styled.div`
  /* width: 100vw; */
  max-width:auto;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  
`;

export const CardHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`;

export const CartPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const CartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  margin: 0 auto;
`;

export const CardCard = styled.div`
  margin: 1rem 2rem;
  line-height: 2;
  align-items: center;
  text-align: left;
  
 
`;
export const CartTable = styled.table`
table-layout:auto;
width:100%;


`;
export const CartTableBody = styled.tbody`

text-align: center;

`;
export const CartTableRow = styled.tr`
position:relative;
margin:5px;

`;
export const CartTableHeading = styled.th`
margin: 5px;
padding:5px;
`;
export const CartTableData = styled.td`
margin:2px;
flex:1
`;

export const CartBuy = styled.div``;
export const CartImg = styled.img`
width:150px;
heigth:100px;
@media screen and (max-width: 650px){
  width:80px;
  heigth:70px;
} `;
export const AddSubButton = styled.button`
background:#10dce3;
color:#fff;
padding:5px 10px;
border: none;
text-align: center;
margin-right:5px;
`;




const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  const buy = () => {
    alert("Order Placed");
  };
  if (isEmpty) return<CartContainer><CardHeading>Checkout</CardHeading><Empty> Your cart isEmpty </Empty></CartContainer> ;
  return (
    <CartContainer>
      <CardHeading>Checkout</CardHeading>
      <CartWrapper>
        <CardCard>
          <h5>
            {" "}
            Types Of Pizza ({totalUniqueItems}) Total Pizzas ({totalItems}):
          </h5>
          <CartTable >
            <CartTableBody>
              {items.map((item, index) => {
                return (
                  
                  <>
                    <CartTableRow>

                      <CartTableHeading>Product</CartTableHeading>
                      <CartTableHeading>Price</CartTableHeading>
                      <CartTableHeading>Quantity</CartTableHeading>
                    </CartTableRow>
                    <CartTableRow key={index}>
                    

                      <CartTableData>{item.name}</CartTableData>

                      <CartTableData>₹ {item.price}</CartTableData>

                      <CartTableData>{item.quantity}</CartTableData>
                      <CartTableData>
                        <CartImg src={item.img_url} style={{}} />
                      </CartTableData>


                    </CartTableRow>

                    <CartTableRow>
                        <CartTableData>
                        <AddSubButton
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                            // className=" btn-info ms-2"
                          >
                            {" "}
                            +{" "}
                          </AddSubButton> 
                          <AddSubButton
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                                // className=" btn-info ms-2 "
                              >
                                {" "}
                                -{" "}
                              </AddSubButton>  
                           
                        </CartTableData>
                        <cartTableData>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="btn btn-danger ms-2"
                            >
                              {" "}
                              Remove{" "}
                            </button>
                        </cartTableData>
                        
                        
                        
                    </CartTableRow>
                    

                  
                  </>




                );
              })}
            </CartTableBody>
          </CartTable>


          <CartPrice> Total price: ₹ {cartTotal} </CartPrice>
          <CartBuy >
            <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
              Clear Cart
            </button>
            <button onClick={buy} className="btn btn-success ms-2">
              Buy Now{" "}
            </button>
          </CartBuy>

        </CardCard>

      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
