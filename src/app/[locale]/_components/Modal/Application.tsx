"use client";

import React, { useState, ChangeEvent, FormEvent, MouseEvent, useEffect } from "react";
import Image from "next/image";
import close from "@/public/svg/close-gray.svg";
import arrow from "@/public/svg/arrow-bottom-gray.svg";
import axios, { AxiosResponse } from "axios";
import { useTranslations } from "next-intl";
import SuccessModal from "./SuccessModal"; // Import the SuccessModal component

// Define the shape of the component's props
interface QuestionSentProps {
    isOpen: boolean;
    onClose: () => void;
}

// Define the shape of the form values
interface FormValues {
    name: string;
    companyName: string;
    phone: string;
    message: string;
}

// Define the shape of validation results
interface ValidationResult {
    isValid: boolean;
    message: string;
}

const QuestionSent: React.FC<QuestionSentProps> = ({ isOpen, onClose }) => {
    const t = useTranslations("Modal");

    // Handler to close the modal
    const handleClose = () => {
        onClose();
    };
    


    // Function to handle newline characters \n in text
    const formatText = (text: string): JSX.Element[] => {
        return text.split("\n").map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    // Handler to close the modal when clicking outside of it
    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // State to manage form values
    const [values, setValues] = useState<FormValues>({
        name: "",
        companyName: "",
        phone: "",
        message: "",
    });

    // State to track which input is focused
    const [focusedInput, setFocusedInput] = useState<keyof FormValues | null>(null);

    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
    // State to manage selected service from dropdown
    const [selectedService, setSelectedService] = useState<string>(t("text-3"));

    // Services translated using next-intl
    const services: string[] = [t("services-1"), t("services-2"), t("services-3")];

    // State to track touched fields
    const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});

    // Handler for input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSuccessModalClose = () => {
        setIsSuccessModalOpen(false);
        handleClose(); // This will close the QuestionSent modal as well
    };
    // Handler for input blur to mark field as touched
    const handleInputBlur = (field: keyof FormValues) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        setFocusedInput(null);
    };

    // Function to validate input fields
    const validateInput = (name: keyof FormValues, value: string): ValidationResult => {
        if (name === "name" || name === "companyName") {
            return value.trim().length >= 3
                ? { isValid: true, message: t("correct") }
                : { isValid: false, message: t("enter_full_name") };
        } else if (name === "phone") {
            const phoneRegex =
                /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/;
            return phoneRegex.test(value)
                ? { isValid: true, message: t("correct") }
                : { isValid: false, message: t("enter_valid_phone_number") };
        }
        return { isValid: true, message: "" };
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    // Handler for selecting a service from the dropdown
    const handleSelectService = (service: string) => {
        setSelectedService(service);
        setIsDropdownOpen(false);
    };

    // Handler for form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, companyName, phone } = values;

        // Validate all fields before submission
        const nameValidation = validateInput("name", name);
        const companyValidation = validateInput("companyName", companyName);
        const phoneValidation = validateInput("phone", phone);

        // Mark all fields as touched
        setTouched({
            name: true,
            companyName: true,
            phone: true,
            message: true,
        });

        if (!nameValidation.isValid || !companyValidation.isValid || !phoneValidation.isValid) {
            // Optionally, set validation errors or provide feedback to the user
            return;
        }

        try {
            // Updated API endpoint
            const response: AxiosResponse = await axios.post(
                "https://rmc.mrjtrade.uz/api/application/investment/create",
                {
                    fullName: values.name, // Mapped 'name' to 'fullName'
                    companyName: values.companyName,
                    phoneNum: values.phone, // Mapped 'phone' to 'phoneNum'
                    service: selectedService, // Included selected service from dropdown
                    message: values.message,
                }
            );
            if (response.status === 200 || response.status === 201) { // Assuming 201 for creation
                setIsSuccessModalOpen(true); // Open SuccessModal on successful form submission
            } else {
                console.error("Error:", response.statusText);
                // Optionally, handle different status codes
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            // Optionally, provide user feedback on error
        }
    };

    // Reset form when the modal is opened or closed
    useEffect(() => {
        if (!isOpen) {
            setValues({ name: "", companyName: "", phone: "", message: "" });
            setSelectedService(t("text-3"));
            setIsDropdownOpen(false);
            setTouched({});
        }
    }, [isOpen, t]);

    if (!isOpen) return null; // Render nothing if the modal is not open

    return (
        <div>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]"
                onClick={handleBackdropClick}
                aria-modal="true"
                role="dialog"
            >
                <div className="bg-white p-4 mdx:p-[30px] shadow-md w-[90%] max-w-[466px] relative flex flex-col items-center justify-center">
                    <div className="flex justify-between items-start w-full">
                        <h2 className="lh text-[30px] font-semibold mdx:text-[35px] max-mdx:max-w-[168px]">
                            {formatText(t("type-of-service"))}
                        </h2>
                        <button
                            onClick={handleClose}
                            className="w-6 h-6 mdx:w-7 mdx:h-7 absolute right-[15px] top-[15px] cursor-pointer focus:outline-none"
                            aria-label="Close modal"
                        >
                            <Image
                                src={close}
                                width={30}
                                height={30}
                                quality={100}
                                alt="close"
                                className="object-contain"
                            />
                        </button>
                    </div>

                    <form
                        className="flex flex-col gap-[20px] w-full xl:gap-[30px] mt-[30px] mdx:mt-[50px]"
                        onSubmit={handleSubmit}
                    >
                        {(["name", "companyName", "phone"] as Array<keyof FormValues>).map((field) => {
                            const validation = validateInput(field, values[field]);
                            return (
                                <div className="relative" key={field}>
                                    <input
                                        type={field === "phone" ? "tel" : "text"}
                                        name={field}
                                        id={field}
                                        value={values[field]}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedInput(field)}
                                        onBlur={() => handleInputBlur(field)}
                                        className={`block w-full px-3 py-2  placeholder-transparent focus:outline-none border-b-2 transition-colors ${focusedInput === field
                                            ? validation.isValid
                                                ? "border-corporate" // Green border on focus and valid input
                                                : "border-[#FF0000]" // Red border on focus and invalid input
                                            : touched[field]
                                                ? validation.isValid
                                                    ? "border-[#EEEEEE]" // Neutral border if field is touched and valid
                                                    : "border-[#FF0000]" // Red border if field is touched and invalid
                                                : "border-[#EEEEEE]" // Neutral border if field is untouched
                                            }`}

                                        placeholder={
                                            field === "name" ? t("full-name") : field === "companyName" ? t("company-name") : t("telephone-number")
                                        }
                                        aria-invalid={!validation.isValid}
                                        aria-describedby={`${field}-error`}
                                    />
                                    <label
                                        htmlFor={field}
                                        className={`absolute transition-all text-[16px] mdx:text-[18px] ${focusedInput === field || values[field].length > 0
                                            ? "-top-4 text-xs"
                                            : "top-1 text-[16px] mdx:text-[18px]"
                                            }  cursor-text`}
                                        onClick={() => {
                                            const input = document.getElementById(field) as HTMLInputElement;
                                            input.focus();
                                        }}
                                    >
                                        {field === "name" ? t("full-name") : field === "companyName" ? t("company-name") : t("telephone-number")}
                                    </label>
                                    {!validation.isValid && touched[field] && (
                                        <span
                                            id={`${field}-error`}
                                            className="text-red-500 text-sm mt-1 block"
                                        >
                                            {validation.message}
                                        </span>
                                    )}
                                </div>
                            );
                        })}

                        <div className="relative border-b-[2px] border-[#E1E1E1] border-opacity-[0.8]">

                            <button
                                type="button"
                                className="w-full text-[16px] mdx:text-[18px] text-left border-[#E1E1E1] pb-[10px] flex justify-between items-center focus:outline-none"
                                onClick={toggleDropdown}
                                aria-haspopup="listbox"
                                aria-expanded={isDropdownOpen}
                            >
                                <span>{selectedService}</span>
                                <Image
                                    quality={100}
                                    src={arrow}
                                    alt="arrow"
                                    width={20}
                                    height={20}
                                    className={`transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                />
                            </button>

                            {/* Dropdown List */}
                            {isDropdownOpen && (
                                <ul
                                    className="absolute bg-white w-full mt-1 z-10 max-h-60 overflow-auto"
                                    role="listbox"
                                >
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="p-3 border-b cursor-pointer hover:bg-[#FCF7F4] hover:text-corporate"
                                            onClick={() => handleSelectService(service)}
                                            role="option"
                                            aria-selected={selectedService === service}
                                        >
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <textarea // Changed input to textarea for better UX with multiline messages
                                name="message"
                                id="message"
                                value={values.message}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedInput("message")}
                                onBlur={() => handleInputBlur("message")}
                                className="block w-full py-2 placeholder-transparent focus:outline-none border-b-2 border-[#EEEEEE] transition-colors resize-none"
                                placeholder={t("message")}
                                rows={1} // Adjust rows as needed
                                aria-describedby="message-error"
                            />
                            <label
                                htmlFor="message"
                                className={`absolute transition-all text-[18px] mdx:text-[18px] ${focusedInput === "message" || values.message.length > 0
                                    ? "-top-4 text-xs"
                                    : "top-1 text-[16px] mdx:text-[18px]"
                                    }  cursor-text`}
                                onClick={() => {
                                    const textarea = document.getElementById("message") as HTMLTextAreaElement;
                                    textarea.focus();
                                }}
                            >
                                {t("message")}
                            </label>
                            {/* Optionally, you can add validation for the message field here */}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="py-[13px] w-full mdx:px-12 text-[14px] text-white font-bold  focus:outline-none xl:text-[16px] bg-CORPORATE hover:bg-[#EAC7B4] transition-colors mdx:max-w-[223px]"
                            >
                                {t("send")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SuccessModal isOpen={isSuccessModalOpen} onClose={handleSuccessModalClose} />
        </div>
    );
};

export default QuestionSent;
