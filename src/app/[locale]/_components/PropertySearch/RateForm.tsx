
export default function BuyForm() {

    return (
        <div className="w-full h-full bg-[#fff] max-h-[452px] mb-[76px] hidden slg:block max-xl:px-[12px]">
            
            <div className="px-6 py-[35px] h-full 2xl:max-h-[316px]">
                <div className="grid grid-cols-2 gap-x-[20px] 2xl:gap-x-[33px] h-full max-h-[258px] xl:max-h-[270px] 2xl:grid-cols-3">
                    <div className="relative h-full max-h-[81px] 2xl:order-1">
                        <label htmlFor="type" className="block text-[16px] font-medium text-gray-700">
                            Тип недвижимости
                        </label>
                        <select
                            id="seller"
                            name="seller"
                            className="mt-1 block w-full bg-white border  h-full max-h-[51px] text-gray-400 appearance-none pr-10 pl-2"
                        >
                            <option value="" disabled selected>Выбрать</option>
                            {/* Add more options here */}
                        </select>
                        {/* Custom arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 mt-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>


                    <div className=' h-full max-h-[81px] 2xl:order-3'>
                        <label htmlFor="area" className="text-[16px] block font-medium text-gray-700 ">
                            Площадь, м²
                        </label>
                        <div className="mt-1 flex h-full max-h-[50px]">
                            <input
                                type="number"
                                name="areaFrom"
                                placeholder="От"
                                className="w-full border  px-2 py-1 text-[#333333]"
                            />
                            <input
                                type="number"
                                name="areaTo"
                                placeholder="До"
                                className="w-full border  px-2 py-1 text-[#333333]"
                            />
                        </div>
                    </div>

                    <div className=' h-full max-h-[81px] 2xl:order-4 max-w-[276px]'>
                        <label htmlFor="rooms" className="block text-[16px] font-medium text-gray-700">
                            Комнатность
                        </label>
                        <div className="mt-1 flex h-full max-h-[50px]">
                            <button className="flex-1 border  py-1 text-[18px] text-[#333] px-[11px]">Студия</button>
                            <button className="flex-1 border  py-1 text-[18px] text-[#333]">1</button>
                            <button className="flex-1 border  py-1 text-[18px] text-[#333]">2</button>
                            <button className="flex-1 border  py-1 text-[18px] text-[#333]">3</button>
                            <button className="flex-1 border  py-1 text-[18px] text-[#333]">4+</button>
                        </div>
                    </div>
                    


                    <div className=' h-full max-h-[81px] 2xl:order-2'>
                        <label htmlFor="address" className="block text-[16px] font-medium text-gray-700">
                            Адрес
                        </label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Город, адрес, ориентир, район, улица"
                            className="mt-1 block w-full border  px-2 py-1 h-full max-h-[51px] text-[#333333]"
                        />
                    </div>
                </div>
                <div className="mt-4 flex gap-[16px] items-center justify-end ">
                    <button className="bg-corporate text-white px-[27px] py-[12px] font-medium hover:bg-hover_corporate max-w-[223px] xl:max-w-[255px] w-full transition-all duration-300">
                        Отправить заявку
                    </button>
                </div>
            </div>
        </div>
    );
}