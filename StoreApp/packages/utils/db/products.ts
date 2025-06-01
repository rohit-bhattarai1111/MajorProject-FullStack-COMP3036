/**
 * @file db/products.ts
 * @description Mock product data for the cricket store
 */

import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Gray-Nicolls Powerbow Cricket Bat',
    description: 'Premium English willow cricket bat with perfect weight distribution and sweet spot.',
    price: 299.99,
    image: '/images/cricket-bat.jpg',
    category: 'Bats',
    stock: 15,
    brand: 'Gray-Nicolls'
  },
  {
    id: '2',
    name: 'Kookaburra Cricket Ball',
    description: 'Professional grade cricket ball with excellent durability and consistent performance.',
    price: 24.99,
    image: '/images/cricket-ball.jpg',
    category: 'Balls',
    stock: 50,
    brand: 'Kookaburra'
  },
  {
    id: '3',
    name: 'SS Cricket Helmet',
    description: 'Lightweight and comfortable cricket helmet with superior protection and ventilation.',
    price: 89.99,
    image: '/images/cricket-helmet.jpg',
    category: 'Helmets',
    stock: 25,
    brand: 'SS'
  },
  {
    id: '4',
    name: 'New Balance Cricket Shoes',
    description: 'Professional cricket shoes with excellent grip and comfort for long matches.',
    price: 149.99,
    image: '/images/cricket-shoes.jpg',
    category: 'Footwear',
    stock: 30,
    brand: 'New Balance'
  },
  {
    id: '5',
    name: 'Gunn & Moore Cricket Pads',
    description: 'High-quality cricket pads with perfect fit and maximum protection.',
    price: 79.99,
    image: '/images/cricket-pads.jpg',
    category: 'Pads',
    stock: 20,
    brand: 'Gunn & Moore'
  },
  {
    id: '6',
    name: 'Gray-Nicolls Cricket Gloves',
    description: 'Premium cricket gloves with excellent grip and comfort.',
    price: 69.99,
    image: '/images/cricket-gloves.jpg',
    category: 'Gloves',
    stock: 0,
    brand: 'Gray-Nicolls'
  },
  {
    id: '7',
    name: 'Kookaburra Elbow Guard',
    description: 'Professional grade elbow guard for maximum protection.',
    price: 39.99,
    image: '/images/elbow-guard.jpg',
    category: 'Elbow Guards',
    stock: 15,
    brand: 'Kookaburra'
  },
  {
    id: '8',
    name: 'SS Thigh Guard',
    description: 'Comfortable and protective thigh guard for cricket players.',
    price: 29.99,
    image: '/images/thigh-guard.jpg',
    category: 'Thigh Guards',
    stock: 20,
    brand: 'SS'
  },
  {
    id: '9',
    name: 'Gray-Nicolls Abdominal Guard',
    description: 'Essential protection for cricket players.',
    price: 19.99,
    image: '/images/abdominal-guard.jpg',
    category: 'Abdominal Guards',
    stock: 40,
    brand: 'Gray-Nicolls'
  }
]; 