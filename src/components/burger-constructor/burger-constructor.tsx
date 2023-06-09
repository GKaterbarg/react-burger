import React, { ReactElement, useCallback } from 'react';
import { ConstructorFooter } from './constructor-footer';
import { ConstructorList } from './constructor-list';
import { useAppSelector } from 'store';
import { OrderDetails } from './order-details';
import { useModal } from 'ui';
import { bunSelector, burgerIngredientsSelector } from 'store/burger-constructor';
import { isTokensEmpty } from 'utils/localStorageHelper';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'const';

export const BurgerConstructor = (): ReactElement => {
  const { open } = useModal();
  const navigate = useNavigate();
  const bun = useAppSelector(bunSelector);
  const ingredients = useAppSelector(burgerIngredientsSelector);

  const handleSubmit = useCallback(async () => {
    if (isTokensEmpty()) {
      navigate(AppRoutes.Login);
      return;
    }
    if (bun && ingredients.length) {
      open({ content: <OrderDetails ids={[bun, ...ingredients].map(x => x._id)} /> });
    }
  }, [open, bun, ingredients, navigate]);

  return (
    <section className='scroll-parent pt-25 pb-10'>
      <ConstructorList
        bun={bun}
        otherIngredients={ingredients} />
      <ConstructorFooter
        bun={bun}
        otherIngredients={ingredients}
        handleSubmit={handleSubmit} />
    </section>
  );
};
