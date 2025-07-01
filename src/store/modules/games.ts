import { defineStore } from 'pinia';
import type { Product } from '../ProductType';
import type { ProductState } from './ProductState';
import { generateProduct } from '../GenerateProduct';

const BasePath = '/products/games';

const products: Product[] = [
  generateProduct('super-tic-tac-toe', 
    'Super Tic Tac Toe',
    `${BasePath}/super-tic-tac-toe`,
    'about:blank',
    'about:blank'),
];

export const useGamesStore = defineStore({
  id: 'games',
  state: (): ProductState => ({
    title: 'Games',
    products,
  }),

  actions: {},
});