import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { useOpenFood } from './hooks/useOpenFood';
import { Orders } from './components/Orders/Orders';
import { useOrders } from './hooks/useOrders';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Orders orders={orders.Orders} />
      <Banner>
        <h2>Las comidas mas piolas del oeste</h2>
        <p>Pedi online rapido y facil</p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
}
export default App;
