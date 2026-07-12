import { defineStore } from 'pinia';
import type { Product } from '../ProductType';
import type { ProductState } from './ProductState';
import { generateProduct } from '../GenerateProduct';

const BasePath = '/products/games';

const products: Product[] = [
  generateProduct('super-tic-tac-toe', 
    'Super Tic Tac Toe',
    `${BasePath}/super-tic-tac-toe`,
    'https://apps.apple.com/us/app/super-ttt-tic-tac-toe/id6747300434',
    'https://play.google.com/store/apps/details?id=com.yellduck.superttt'),
  generateProduct('block-line-up',
    'Block Line Up',
    `${BasePath}/block-line-up`,
    'https://apps.apple.com/us/app/block-line-up/id6446652739',
    'https://play.google.com/store/apps/details?id=com.YellDuck.BlockBash'),
  generateProduct('cosmic-dash',
    'Cosmic Dash',
    `${BasePath}/cosmic-dash`,
    'https://apps.apple.com/us/app/cosmic-dash/id6788219875',
    'https://play.google.com/store/apps/details?id=com.yellowduckgames.cosmicdash'),
];

export const useGamesStore = defineStore({
  id: 'games',
  state: (): ProductState => ({
    title: 'Games',
    products,
  }),

  actions: {},
});