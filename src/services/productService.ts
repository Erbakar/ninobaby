import { Entry, Asset, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { client } from './contentfulClient';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

// --- Contentful Response Types (Internal) ---

interface CategoryFields {
  title: string;
  slug: string;
  image: Asset | { fields: { file: { url: string } } };
  isActive: boolean;
}

interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: 'category';
  fields: CategoryFields;
}

interface ProductFields {
  productName: string;
  slug: string;
  description: Document;
  price: number;
  currency: string;
  categories: Entry<CategorySkeleton>[];
  mainImage: Asset | { fields: { file: { url: string } } };
  gallery?: (Asset | { fields: { file: { url: string } } })[];
  badge?: string;
  isActive: boolean;
}

interface ProductSkeleton extends EntrySkeletonType {
  contentTypeId: 'product';
  fields: ProductFields;
}

// --- Mappers ---

/**
 * Converts Contentful image URLs to absolute URLs with https:
 */
const formatUrl = (url: string): string => (url.startsWith('//') ? `https:${url}` : url);

/**
 * Maps a Contentful Asset to a simple string URL
 */
const mapAssetToUrl = (asset: any): string => {
  const url = asset?.fields?.file?.url;
  return url ? formatUrl(url as string) : '';
};

/**
 * Maps a Contentful Category entry to our frontend Category model
 */
const mapCategory = (entry: Entry<CategorySkeleton, 'WITHOUT_LINK_RESOLUTION'> | any): Category => {
  const fields = entry.fields;
  return {
    title: (fields.title as string) || '',
    slug: (fields.slug as string) || '',
    image: mapAssetToUrl(fields.image),
    isActive: !!fields.isActive,
  };
};

/**
 * Maps a Contentful Product entry to our frontend Product model
 */
const mapProduct = (entry: Entry<ProductSkeleton, 'WITHOUT_LINK_RESOLUTION'> | any): Product => {
  const fields = entry.fields;

  return {
    productName: (fields.productName as string) || '',
    slug: (fields.slug as string) || '',
    description: fields.description as Document,
    price: Number(fields.price) || 0,
    currency: (fields.currency as string) || 'USD',
    categories: (fields.categories as any[])?.map(mapCategory) || [],
    mainImage: mapAssetToUrl(fields.mainImage),
    gallery: (fields.gallery as any[])?.map(mapAssetToUrl) || [],
    badge: fields.badge as string | undefined,
    isActive: !!fields.isActive,
  };
};

// --- Service ---

export const productService = {
  /**
   * Fetches all active products
   */
  async getAllProducts(): Promise<Product[]> {
    const response = await client.getEntries<ProductSkeleton>({
      content_type: 'product',
      include: 2,
      'fields.isActive': true,
    } as any);

    return response.items.map(mapProduct);
  },

  /**
   * Fetches a single active product by its slug
   */
  async getProductBySlug(slug: string): Promise<Product | null> {
    const response = await client.getEntries<ProductSkeleton>({
      content_type: 'product',
      include: 2,
      'fields.slug': slug,
      'fields.isActive': true,
      limit: 1,
    } as any);

    if (response.items.length === 0) {
      return null;
    }

    return mapProduct(response.items[0]);
  },

  /**
   * Fetches active products by category slug
   */
  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    const response = await client.getEntries<ProductSkeleton>({
      content_type: 'product',
      include: 2,
      'fields.isActive': true,
      'fields.categories.sys.contentType.sys.id': 'category',
      'fields.categories.fields.slug': categorySlug,
    } as any);

    return response.items.map(mapProduct);
  },
};
