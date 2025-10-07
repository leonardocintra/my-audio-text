import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Github, Twitter, Linkedin, MessageSquareText } from 'lucide-react';

export default async function Footer() {
  const t = await getTranslations('Footer');
  const tHero = await getTranslations('HeroSection');
  const tHeader = await getTranslations('Header');

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
             <Link href="/" className="flex items-center gap-2 font-headline font-bold text-xl text-primary-foreground">
              <MessageSquareText className="h-7 w-7 text-primary" />
              {tHeader('productName')}
            </Link>
            <p className="text-sm text-muted-foreground">{t('description')}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Github /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Linkedin /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-primary-foreground tracking-wider uppercase font-headline">{t('links.title')}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('links.terms')}</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('links.privacy')}</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">{t('links.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 flex flex-col items-start md:items-end text-left md:text-right">
            <h3 className="font-semibold text-primary-foreground tracking-wider uppercase font-headline">{t('cta_title')}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{t('cta_subtitle')}</p>
            <Button asChild className="mt-4 font-bold">
              <Link href="/start">{tHero('cta')}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {t('copyright')} {t('developedBy')} <Link href="https://leonardocintra.com.br" target="_blank" className="underline hover:text-primary-foreground">Leonardo Cintra</Link>.</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
