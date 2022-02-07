import React from 'react';
import styled from 'styled-components';

import { FoodGrid, Food, FoodLabel } from './FoodGrid';
import { TagsMenu, TagCard, TagImg } from './TagsMenu';
import {Foods,arraySections,formatPrice} from '../../Data/data'


const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
  z-index: 3;
`;

export const Menu = ({ setOpenFood }) => {
  return (
    <MenuStyled>
      <h2>Menu</h2>
      <TagsMenu>
        {arraySections.map((section)=> (
          <TagCard>
            <TagImg img={section.imgTag}/>
            <p>{section.section}</p>
          </TagCard>
        ))}
      </TagsMenu>
      {Object.entries(Foods).map(([sectionName, arrayFoods]) => {
        return (
          <>
            <h3>{sectionName}</h3>
            <FoodGrid>
              {arrayFoods.map((food) => (
                <Food img={food.img} onClick={() => setOpenFood(food)}>
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>
                  </FoodLabel>
                </Food>
              ))}
            </FoodGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};
