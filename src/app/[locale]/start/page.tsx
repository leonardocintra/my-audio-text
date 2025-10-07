import { getTranslations } from 'next-intl/server';
import StartTrialForm from '@/components/StartTrialForm';

export default async function StartTrialPage() {
  const t = await getTranslations('StartTrialPage');

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
        <StartTrialForm />
      </div>
    </section>
  );
}
