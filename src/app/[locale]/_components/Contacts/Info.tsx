import { useTranslations } from 'next-intl';

export default function Scheme() {
    const t = useTranslations('Contacts');

    return (
        <div className="w-full max-w-[1440px] 5xl:max-w-[2000px] mx-auto px-2 flex flex-col gap-10">
            <div className="text-[30px] mdx:text-[45px] xl:text-[55px] font-medium hr max-w-[612px] leading-[38px] mdx:leading-[50px] xl:leading-[70px]">
                <h1 className='text-corporate'>{t('title-1')}</h1>{t('title-2')}
            </div>
            <div className='w-full flex flex-col 2xl:flex-row gap-[16px]'>

                <div className='slg:flex slg:flex-row slg:gap-[16px] w-full'>
                    <div className='border p-[24px] flex flex-col items-start justify-between w-full max-slg:mb-[16px]'>
                        <div className='pb-[20px]'>
                            <p className='text-[#B3B3B3] text-[14px] mdx:text-[18px] xl:text-[20px]'> {t('telephone')}</p>
                            <a href="tel:+998785558787" className='whitespace-nowrap text-[22px] mdx:text-[28px] xl:text-[30px] hover:text-[#868585]'>+998 (78) 555 87 87</a>
                            <br />
                            <a href="tel:971543980707" className=' text-[22px] mdx:text-[28px] xl:text-[30px] hover:text-[#868585]'>+971 052 949 07 07</a>
                        </div>
                        <hr className='w-full' />
                        <div className='pt-[20px]'>
                            <p className='text-[#B3B3B3] text-[14px] mdx:text-[18px] xl:text-[20px]'>E-mail</p>
                            <a href="mailto:rmcrmc603@gmail.com" className='text-[22px] mdx:text-[28px] xl:text-[30px] hover:text-[#868585]'>rmcrmc603@gmail.com</a>
                        </div>

                    </div>

                    <div className='border p-[24px] flex flex-col items-start justify-between w-full 2xl:hidden'>
                        <div >
                            <p className='text-[#B3B3B3] text-[14px] mdx:text-[18px] xl:text-[20px]'>{t('time-work')}</p>
                            <p className='text-[22px] mdx:text-[28px] xl:text-[30px] mt-[4px]'>09:00 - 18:00
                                <br />{t('work-day')}</p>
                        </div>
                    </div>
                </div>

                <div className='border p-[24px] flex flex-col items-start justify-between w-full'>
                    <div >
                        <p className='text-[#B3B3B3] text-[14px] mdx:text-[18px] xl:text-[20px]'>{t('addres')}</p>
                        <a
                            href="https://maps.app.goo.gl/xM3Qos8HBt3dS32A8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[22px] mdx:text-[28px] xl:text-[30px] lh mt-[4px] 2xl:leading-[36px]  hover:text-[#868585]'>
                            {t('addres-2')}
                        </a>
                    </div>
                </div>
                <div className='border p-[24px] flex-col items-start justify-between w-full hidden 2xl:block'>
                    <div >
                        <p className='text-[#B3B3B3] text-[14px] mdx:text-[18px] xl:text-[20px]'>{t('time-work')}</p>
                        <p className='text-[22px] mdx:text-[28px] xl:text-[30px] mt-[4px]'>09:00 - 18:00
                            <br />{t('work-day')}</p>
                    </div>
                </div>

            </div>
            <div className="h-[300px] mdx:h-[350px] xl:h-[550px] w-full ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.138010676033!2d55.30632747605594!3d25.2659424289116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433661ee2cfb%3A0x41cafba46e7b8d75!2sDeira%20Twin%20Towers!5e0!3m2!1sru!2s!4v1730711236842!5m2!1sru!2s" width="100%"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="relative top-0 left-0 w-full h-full border-none"
                    frameBorder="0"></iframe>
            </div>
        </div >
    )
}
