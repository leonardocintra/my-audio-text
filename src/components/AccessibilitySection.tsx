import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeartHandshake } from 'lucide-react';

export default async function AccessibilitySection() {
  const t = await getTranslations('AccessibilitySection');
  const image = PlaceHolderImages.find(p => p.id === 'accessibility-empowerment');

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative order-last lg:order-first">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                width={600}
                height={400}
                className="rounded-xl shadow-xl aspect-video w-full object-cover"
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 text-primary">
              <HeartHandshake className="h-6 w-6" />
              <p className="font-semibold font-headline">{t('tagline')}</p>
            </div>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('title')}</h2>
            <p className="mt-6 text-lg text-muted-foreground">{t('description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
