import { Product } from '../types';

// Contentful veya benzeri bir Headless CMS API bilgileri
const CMS_SPACE_ID = 'ng3byrxicrtp';
const CMS_ACCESS_TOKEN = 'wBYLV1iSLXTpcStRQIUNARwVSAbUISyL6tJD0Xx85Sw';
const CMS_ENDPOINT = `https://cdn.contentful.com/spaces/${CMS_SPACE_ID}/entries?access_token=${CMS_ACCESS_TOKEN}&content_type=product`;

export async function fetchProductsFromCMS(): Promise<Product[]> {
  try {
    const response = await fetch(CMS_ENDPOINT);
    const data = await response.json();

    if (!data.items) return [];

    // CMS'den gelen veriyi bizim Product tipimize dönüştürüyoruz
    return data.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.productName || item.fields.name,
      category: item.fields.category || 'Genel',
      price: item.fields.price,
      image: item.fields.mainImage?.fields?.file?.url ? `https:${item.fields.mainImage.fields.file.url}` : (item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : 'https://via.placeholder.com/800'),
      images: item.fields.gallery?.map((img: any) => img.fields.file.url ? `https:${img.fields.file.url}` : '') || [],
      description: item.fields.description,
      badge: item.fields.badge || ''
    }));
  } catch (error) {
    console.error('CMS Fetch Error:', error);
    return [];
  }
}
