"use client";
// import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import build1_ from "@/public/images/main/about_company/Chartline.png";
import build2_ from "@/public/images/main/about_company/ll2.png";
import build3_ from "@/public/images/main/about_company/uprv.png";

interface LocalProps {
    locale: string;
}

export default function Banner({ locale }: LocalProps) {
    const t = useTranslations('Main.AboutUs');
    // const [activeTab, setActiveTab] = useState('buy');

    // const tabs = [
    //     {
    //         id: 'buy',
    //         label: t('tabs.buy.label'),
    //         content: t('tabs.buy.content')
    //     },
    //     {
    //         id: 'rent',
    //         label: t('tabs.rent.label'),
    //         content: t('tabs.rent.content')
    //     },
    //     {
    //         id: 'manage',
    //         label: t('tabs.manage.label'),
    //         content: t('tabs.manage.content')
    //     },
    // ];

    return (
        <div className="w-full h-full flex flex-col mx-auto max-w-[1440px]">
            <div className='mx-[10px]'>
                <div className='lh w-full flex flex-col'>
                    <h2 className="text-[30px] mdx:text-[35px] mdl:text-[40px] slg:text-[45px] xl:text-[50px] font-medium text-gray-800">{t('title')}</h2>
                    <div className='w-full grid xl:grid-cols-3 mt-[40px] mdx:mt-[60px] gap-[21px]'>
                        {/* Card 1 */}
                        <Link href={`/${locale}/property-search`} passHref>
                            <div className="w-full min-h-[454px] mdx:h-[529px] xl:h-[569px] bg-[#EDF3F5] overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                                <div className="w-full pt-[33px] px-[33px] flex-grow">
                                    <h4 className="font-medium text-[28px] text-[#333333] mdx:text-[30px] mdx:font-semibold xl:text-[35px] mb-[12px] max-w-[569px]">
                                        {t('tabs.buy.label')}
                                    </h4>
                                    <p className="text-[#858585] max-w-[569px] text-[16px] mdx:text-[20px]">{t('tabs.buy.content')}</p>
                                </div>
                                <Image
                                    src={build2_}
                                    quality={100}
                                    width={1500}
                                    height={1500}
                                    alt={t('imageAlt')}
                                    className="w-[80%] mdx:w-[70%] max-xl:h-[60%] xl:w-full h-full object-cover mdx:object-contain xl:object-cover max-w-[370px] max-h-[300px] mt-auto "
                                />
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link href={`/${locale}/property-search`} passHref>
                            <div className="w-full min-h-[454px] mdx:h-[529px] xl:h-[569px] bg-[#EDF3F5] overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                                <div className="w-full p-[33px] flex-grow">
                                    <h4 className="font-medium text-[28px] text-[#333333] mdx:text-[30px] mdx:font-semibold xl:text-[35px] mb-[12px] max-w-[569px]">
                                        {t('tabs.rent.label')}
                                    </h4>
                                    <p className="text-[#858585] max-w-[569px] text-[16px] mdx:text-[20px]">{t('tabs.rent.content')}</p>
                                </div>
                                <Image
                                    src={build1_}
                                    quality={100}
                                    width={1500}
                                    height={1500}
                                    alt={t('imageAlt')}
                                    className=" max-xl:h-[50%] w-full h-full object-cover mdx:object-contain xl:object-cover ml-auto max-h-[262px] xl:max-w-[414px] mt-auto"
                                />
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link href={`/${locale}/property-search`} passHref>
                            <div className="w-full min-h-[454px] mdx:h-[529px] xl:h-[569px] bg-[#EDF3F5] overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                                <div className="w-full p-[33px] flex-grow">
                                    <h4 className="font-medium text-[28px] text-[#333333] mdx:text-[30px] mdx:font-semibold xl:text-[35px] mb-[12px] max-w-[569px]">
                                        {t('tabs.manage.label')}
                                    </h4>
                                    <p className="text-[#858585] max-w-[569px] text-[16px] mdx:text-[20px]">{t('tabs.manage.content')}</p>
                                </div>
                                <div className=''>
                                    <Image
                                        src={build3_}
                                        quality={100}
                                        width={1500}
                                        height={1500}
                                        alt={t('imageAlt')}
                                        className="w-full h-full object-cover max-w-[270px] mt-auto ml-auto transform transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* Старый формат с переключением при помощи активных кнопок */}
                    {/* <div className="w-full mx-auto xl:mt-0 mt-6 max-w-[1000px] xl:max-w-[710px]">
                        <div className="flex justify-between items-center border-b text-[16px] mdx:text-[20px] border-gray-300">
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${activeTab === tab.id ? 'text-corporate border-b border-corporate' : 'text-gray-400'
                                        } cursor-pointer pb-[25px]`}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                        <div className="py-4 text-gray-600 text-[16px] mdx:text-[20px]">
                            {tabs.find((tab) => tab.id === activeTab)?.content.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div> */}
                    <div className="flex items-center justify-center xl:mt-[35px] mdx:mt-[35px] mt-[30px] w-full">
                        <Link href={`/${locale}/about`} className='bg-corporate hover:bg-hover_corporate text-white py-[12px] px-4 w-[223px] flex justify-center font-semibold text-[17px] transition-all duration-300'>
                            {t("button-more")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
