import React from 'react';
import styled from 'styled-components';

import { DialogContent, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../../Data/data';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  max-height: 100%;
  height: 89%;
`;

const OrderContainer = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid #f7f7f7;
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
`;

export const Orders = ({orders}) => {
  return (  
      
        <OrderStyled>
        {   orders?.length === 0 ? (<OrderContent>Nada por aqui</OrderContent>) : (
            <OrderContent>
                <OrderContainer>Tu pedido:</OrderContainer>
                {orders?.map((orderr) => ( 
                    <OrderContainer>
                        <OrderItem>
                          
                            <div>1</div>
                            <div>{orderr.name}</div>
                            <div>{formatPrice(orderr.price)}</div>
                        </OrderItem>
                    </OrderContainer>
                ))}
            </OrderContent>
        )}
        <DialogFooter>
            <ConfirmButton>Ir a Pagar</ConfirmButton>
        </DialogFooter>
  </OrderStyled>

 );
};