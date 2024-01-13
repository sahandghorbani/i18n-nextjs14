import initTranslations from '../i18n';
import styles from './page.module.css';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import TranslationsProvider from '@/components/TranslationsProvider';
import Link from "next/link";
import LanguageChanger from "@/components/LanguageChanger";
import React from "react";

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <main className={styles.main}>
                <h1>{t('header')}</h1>
                <ExampleClientComponent />
                <LanguageChanger/>
            <Link href={`/${locale}/about-us`}>{t('aboutUs')}</Link>

            </main>
        </TranslationsProvider>
    );
}