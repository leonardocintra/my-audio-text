
import { useTranslations } from 'next-intl';

export default function TermsOfUsePage() {
  const t = useTranslations('TermsOfUse');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('last_updated')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('acceptance_of_terms_title')}</h2>
      <p className="mb-4">{t('acceptance_of_terms_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('service_description_title')}</h2>
      <p className="mb-4">{t('service_description_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('free_trial_title')}</h2>
      <p className="mb-4">{t('free_trial_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('subscription_title')}</h2>
      <p className="mb-4">{t('subscription_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('payment_title')}</h2>
      <p className="mb-4">{t('payment_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('no_guarantees_title')}</h2>
      <p className="mb-4">{t('no_guarantees_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('contact_title')}</h2>
      <p className="mb-4">
        {t('contact_text')}
        <a href="mailto:leonardo.ncintra@outlook.com">leonardo.ncintra@outlook.com</a>{' '}
        {t('or_whatsapp')} <a href="https://wa.me/16999735008">16999735008</a>.
      </p>
    </div>
  );
}
