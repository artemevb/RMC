
"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import QuestionSent from '../Modal/ApplicationNewBuildings';
import photo1 from "@/public/images/investmentsDubai/First screen.png";


export default function Banner() {
    const t = useTranslations('investmentsDubai.Banner');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close modal function
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-full h-auto flex flex-col mx-auto">
            <div className='relative'>
                <Image
                    src={photo1}
                    quality={100}
                    alt="Banner Image"
                    layout="responsive"
                    className="w-full h-auto min-h-[650px] object-cover"
                />
                <div className="absolute bottom-10 2xl:bottom-14 ml-[10px] mdx:ml-[20px] xl:left-10 3xl:left-[10%] text-white max-xl:max-w-[80%]">
                    <h2
                        className="text-[35px] mdx:text-[55px] mdl:text-[60px] lg:text-[70px] xl:text-[75px]  font-medium max-w-[520px] lg:max-w-[650px] xl:max-w-[710px]"
                        style={{ lineHeight: "1.1" }}
                    >
                        {t('title')}
                    </h2>
                    <p className="text-[16px] mdx:text-[20px] mt-[8px] mdx:mt-[12px] xl:mt-[20px]">
                        {t('subtitle')}
                    </p>

                    <div className="mt-4">
                        <button
                            onClick={openModal}
                            className="bg-corporate hover:bg-hover_corporate text-white py-3 w-full max-w-[175px] mdx:max-w-[223px] text-lg font-semibold shadow-md transition duration-300"
                        >
                            {t('button-more')}
                        </button>
                    </div>
                </div>
            </div>
            <QuestionSent isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
