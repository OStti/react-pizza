import styled from 'styled-components';

export const Constructor = styled.form``;

export const PizzaImage = styled.div`
  position: relative;
  max-width: 266px;
  margin: 0 auto 1.5rem auto;
`;

export const BottomBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background: #fff;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  padding: 0.75rem 1rem;
`;

export const BottomBarContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
`;

export const FoodCategories = styled.div`
  margin-bottom: 5rem;
`;

export const ComboIngredients = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;
  max-width: 224px;
`;

export const SideBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`;
