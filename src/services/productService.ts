
import { Entry, Asset, EntrySkeletonType } from 'contentful';
import { client } from './contentfulClient';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

// --- Contentful Response Types (Internal) ---

interface CategoryFields {
  title: string;
  slug: string;
  image: Asset;
  isActive: boolean;
}

interface ProductFields {
  productName: string;
  slug: string;
  description: any; // Rich Text Document
  price: number;
  currency: string;
  categories: Entry<CategoryFields>[];
  mainImage: Asset;
  gallery?: Asset[];
  badge?: string;
  isActive: boolean;
}

// --- Mappers ---

const formatUrl = (url: string): string => url.startsWith('//') ? `https:${url}` : url;

const mapAssetToUrl = (asset: Asset): string => {
  return asset.fields?.file?.url ? formatUrl(asset.fields.file.url as string) : '';
};

const mapCategory = (entry: Entry<CategoryFields>): Category => ({
  title: entry.fields.title,
  slug: entry.fields.slug,
  image: entry.fields.image ? mapAssetToUrl(entry.fields.image) : '',
  isActive: entry.fields.isActive,
});

const mapProduct = (entry: Entry<ProductFields>): Product => ({
  productName: entry.fields.productName,
  slug: entry.fields.slug,
  description: entry.fields.description,
  price: entry.fields.price,
  currency: entry.fields.currency,
  categories: entry.fields.categories?.map(mapCategory) || [],
  mainImage: entry.fields.mainImage ? mapAssetToUrl(entry.fields.mainImage) : '',
  gallery: entry.fields.gallery?.map(mapAssetToUrl) || [],
  badge: entry.fields.badge,
  isActive: entry.fields.isActive,
});

// --- Service ---

export const productService = {
  /**
   * Fetches all active products
   */
  async getAllProducts(): Promise<Product[]> {
    const response = await client.getEntries<ProductFields>({
      content_type: 'product',
      include: 2,
      'fields.isActive': true,
    });

    return response.items.map(mapProduct);
  },

  /**
   * Fetches active products by category slug
   */
  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    // First find the category to get its ID or use links
    const response = await client.getEntries<ProductFields>({
      content_type: 'product',
      include: 2,
      'fields.isActive': true,
      'fields.categories.sys.contentType.sys.id': 'category',
      'fields.categories.fields.slug': categorySlug,
    });

    return response.items.map(mapProduct);
  }
};

