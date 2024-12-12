
import { useState } from "react";

export default function ToRentOutForm() {
    const [propertyType, setPropertyType] = useState<string>("");
    const [area, setArea] = useState<string>("");
    const [numberOfRoom, setNumberOfRoom] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!propertyType || !area || !numberOfRoom || !phoneNumber || !address) {
            setErrorMessage("Пожалуйста, заполните все поля.");
            return;
        }

        const phoneRegex = /^\+?\d{10,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setErrorMessage("Пожалуйста, введите корректный номер телефона.");
            return;
        }

        setErrorMessage(null);
        setIsSubmitting(true);

        const formattedArea = `${area}m²`;
        const formattedPropertyType =
            propertyType.charAt(0).toUpperCase() + propertyType.slice(1);

        const payload = {
            propertyType: formattedPropertyType,
            numberOfRoom: numberOfRoom,
            area: formattedArea,
            phoneNumber: phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`,
            address: address,
        };

        try {
            const response = await fetch(
                "https://rmc.mrjtrade.uz/api/application/to-rent/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Ошибка при отправке заявки.");
            }

            setPropertyType("");
            setArea("");
            setNumberOfRoom("");
            setPhoneNumber("");
            setAddress("");
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message || "Что-то пошло не так.");
            } else {
                console.error("Что-то пошло не так.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNumberOfRoom = (room: string) => {
        setNumberOfRoom(room);
    };

    return (
        <div className="w-full h-full bg-[#fff] max-h-[382px] mb-[76px] hidden slg:block max-xl:px-[12px]">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="px-6 py-[35px] h-full 2xl:max-h-[316px]">
                <div className="grid grid-cols-2 gap-x-[20px] 2xl:gap-x-[33px] h-full max-h-[258px] xl:max-h-[270px] 2xl:grid-cols-3">
                    {/* Тип недвижимости */}
                    <div className="relative h-full max-h-[81px] 2xl:order-1">
                        <label htmlFor="type" className="block text-[16px] font-medium text-gray-700">
                            Тип недвижимости
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="mt-1 block w-full bg-white border  h-full max-h-[51px] text-gray-400 appearance-none pr-10 pl-2"
                        >
                            <option value="" disabled>
                                Не выбрано
                            </option>
                            <option value="apartment">Квартира</option>
                            <option value="room">Комната</option>
                            <option value="house">Дом</option>
                            <option value="townhouse">Таунхаус</option>
                            <option value="land">Земельный участок</option>
                            <option value="dacha">Дача</option>
                            <option value="commercial">Коммерческое помещение</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 mt-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Площадь */}
                    <div className='h-full max-h-[81px] 2xl:order-4 max-w-[438px] 3xl:-ml-[165px]'>
                        <label htmlFor="area" className="text-[16px] block font-medium text-gray-700">
                            Площадь, м²
                        </label>
                        <div className="mt-1 flex h-full max-h-[50px]">
                            <input
                                type="number"
                                name="area"
                                placeholder="Введите площадь"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full border px-2 py-1 text-[#333333]"
                                min="0"
                            />
                        </div>
                    </div>

                    {/* Комнатность */}
                    <div className='h-full max-h-[81px] 2xl:order-3 max-w-[276px]'>
                        <label htmlFor="rooms" className="block text-[16px] font-medium text-gray-700">
                            Комнатность
                        </label>
                        <div className="mt-1 flex h-full max-h-[50px]">
                            {["Студия", "1", "2", "3", "4+"].map((room) => (
                                <button
                                    key={room}
                                    type="button"
                                    className={`flex-1 border py-1 text-[18px] text-[#333] ${room === "Студия" ? "px-[11px]" : ""} ${numberOfRoom === room ? "bg-gray-200" : "bg-white"
                                        }`}
                                    onClick={() => handleNumberOfRoom(room)}
                                >
                                    {room}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Номер телефона */}
                    <div className=' h-full max-h-[81px] 2xl:order-4 max-w-[438px]'>
                        <label htmlFor="phoneNumber" className="text-[16px] block font-medium text-gray-700 ">
                            Номер телефона
                        </label>
                        <div className="mt-1 flex h-full max-h-[50px]">
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Укажите ваш номер телефона"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full border px-2 py-1 text-[#333333]"
                            />
                        </div>
                    </div>

                    {/* Адрес */}
                    <div className=' h-full max-h-[81px] 2xl:order-6'>
                        <label htmlFor="address" className="block text-[16px] font-medium text-gray-700">
                            Адрес
                        </label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Город, адрес, ориентир, район, улица"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="mt-1 block w-full border px-2 py-1 h-full max-h-[51px] text-[#333333]"
                        />
                    </div>
                </div>
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                <div className="mt-4 flex gap-[16px] items-center justify-end">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`bg-corporate text-white px-[27px] py-[12px] font-medium hover:bg-hover_corporate max-w-[223px] xl:max-w-[255px] w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </button>
                </div>
            </form>
        </div>
    );
}
