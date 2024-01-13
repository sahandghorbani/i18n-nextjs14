import React, {FC} from 'react';
import Link from "next/link";
import styles from "../page.module.css";
import initTranslations from "@/app/i18n";
import LanguageChanger from "@/components/LanguageChanger";
import TranslationsProvider from "@/components/TranslationsProvider";
import ExampleClientComponent from "@/components/ExampleClientComponent";

interface PageProps {}
const i18nNamespaces = ['home'];
const  Page: FC<PageProps> = async({ params: { locale } }) => {
    const { t,resources } =  await  initTranslations(locale, i18nNamespaces);
   return (
       <TranslationsProvider
           namespaces={i18nNamespaces}
           locale={locale}
           resources={resources}>
           <main className={styles.main}>
               <h2>{t('description')}</h2>
               <ExampleClientComponent />
               <LanguageChanger/>
               <Link href={`/${locale}/`}>{t('back')}</Link>
           </main>
       </TranslationsProvider>
   )
}

export default Page;
