
import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'ng3byrxicrtp';
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'wBYLV1iSLXTpcStRQIUNARwVSAbUISyL6tJD0Xx85Sw';

if (!spaceId || !accessToken) {
  console.warn('Contentful credentials missing. Please check your .env file.');
}

export const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

