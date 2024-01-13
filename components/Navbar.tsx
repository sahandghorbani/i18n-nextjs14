'use client'
import React, {FC} from 'react';
import Link from "next/link";
import initTranslations from "@/app/i18n";
import {useRouter, usePathname} from "next/navigation";

interface NavbarProps {
    locale:any
}

const Navbar: FC<NavbarProps> = async ({locale}) => {
    const changeLocale =( locale:any) => {
        document.cookie = `NEXT_LOCALE=${locale}`;
    };
    const { t , i18n} = await initTranslations(locale, ['home']);
    const router = useRouter();
    const pathname = usePathname()
    const otherLocales =i18n.options.supportedLngs
    return (
        <>
            {otherLocales.map((locale, localeIndex) => {
                return (
                    <Link
                        key={localeIndex}
                        href={{ pathname }}
                        locale={locale}
                        onClick={() => changeLocale(locale)}
                    >
                        {locale}
                    </Link>
                );
            })}
        </>
    );
}

export default Navbar;
