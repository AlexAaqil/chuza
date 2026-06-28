export interface Product {
    id: string;
    name: string;
    price: number;
    image: ImageMetadata;
    is_featured: boolean;
    is_active: boolean;
    brand: string;
    category: string;
    date_of_purchase: string;
}

import clogsBrown from '../assets/images/shoes/clogs-brown.webp';
import airmax90 from '../assets/images/shoes/airmax-90.webp';
import clarksWallabees from '../assets/images/shoes/clarks-wallabees.webp';
import nikeAirmaxSndr from '../assets/images/shoes/nike-airmax-sndr.webp';
import jordan11Retro from '../assets/images/shoes/Jordan11RetroGamma.jpg';

export const ShoesConfig = {
    shoes: [
        {
            id: 'clogs-brown',
            name: 'Brown Clogs',
            price: 1200,
            image: clogsBrown,
            is_featured: true,
            is_active: true,
            brand: 'clogs',
            category: 'unisex',
            date_of_purchase: "20260630"
        },
        {
            id: 'clarks-wallabees',
            name: 'Clarks Wallabees',
            price: 1850,
            image: clarksWallabees,
            is_featured: true,
            is_active: true,
            brand: 'clarks',
            category: 'men',
            date_of_purchase: "20260627"
        },
        {
            id: 'airmax90',
            name: 'Airmax 90',
            price: 1500,
            image: airmax90,
            is_featured: true,
            is_active: true,
            brand: 'nike',
            category: 'men',
            date_of_purchase: "20260625"
        },
        {
            id: 'airmaxsndr',
            name: 'Nike Airmax SNDR',
            price: 2000,
            image: nikeAirmaxSndr,
            is_featured: true,
            is_active: true,
            brand: 'nike',
            category: 'men',
            date_of_purchase: "20260625"
        },
        {
            id: 'jordan11',
            name: 'Air Jordan 11 Retro "Gamma"',
            price: 3000,
            image: jordan11Retro,
            is_featured: true,
            is_active: true,
            brand: 'air-jordan',
            category: 'men',
            date_of_purchase: "20260630"
        }
    ] as Product[]
} as const;