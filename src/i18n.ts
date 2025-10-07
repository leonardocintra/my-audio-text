import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    return notFound();
  }
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

function notFound(): any {
  throw new Error('Function not implemented.');
}
