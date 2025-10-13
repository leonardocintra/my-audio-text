
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('last_updated')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('introduction_title')}</h2>
      <p className="mb-4">{t('introduction_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('data_collection_title')}</h2>
      <p className="mb-4">{t('data_collection_text_1')}</p>
      <p className="mb-4">{t('data_collection_text_2')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('data_usage_title')}</h2>
      <p className="mb-4">{t('data_usage_text_1')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('data_security_title')}</h2>
      <p className="mb-4">{t('data_security_text_1')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('free_trial_title')}</h2>
      <p className="mb-4">{t('free_trial_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('subscription_title')}</h2>
      <p className="mb-4">{t('subscription_text')}</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">{t('contact_title')}</h2>
      <p className="mb-4">
        {t('contact_text')}
        <a href="mailto:leonardo.ncintra@outlook.com">leonardo.ncintra@outlook.com</a>{' '}
        {t('or_whatsapp')} <a href="https://wa.me/16999735008">16999735008</a>.
      </p>
    </div>
  );
}
