
import { Document } from '@contentful/rich-text-types';
import { Category } from './Category';

export interface Product {
  productName: string;
  slug: string;
  description: Document;
  price: number;
  currency: string;
  categories: Category[];
  mainImage: string;
  gallery: string[];
  badge?: string;
  isActive: boolean;
}

