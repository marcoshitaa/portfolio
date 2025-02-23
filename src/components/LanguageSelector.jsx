import React, {useState} from "react";
import i18n from '../i18n';
import { FlagIcon } from "react-flag-kit";
import { useTranslation } from 'react-i18next';
import { use } from "react";

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    const languages = [
        { code: "de", name: t("languages.de"), flag: "DE" },
        { code: "en", name: t("languages.en"), flag: "GB" },
        { code: "es", name: t("languages.es"), flag: "ES" },
    ];

    const chooseLanguage = (e) => {
        i18n.changeLanguage(e);
        setSelectedLanguage(e);
        setIsOpen(false);
        console.log(e);
    };

    const renderLanguageOptions = (items) => {
        return items.map((item, index) => (
            <div onClick={() => chooseLanguage(item.code)} className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-slate-700">
                <FlagIcon code={item.flag} size={24} />
                {t("languages." + item.code)}
            </div>
        ));
      };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-transparent text-white border-none outline-none"
            >
                <FlagIcon code={languages.find(lang => lang.code == selectedLanguage)?.flag} size={24} />
                {languages.find(lang => lang.code == selectedLanguage)?.name}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 text-white rounded-lg shadow-lg">
                    <div className="py-2">
                        {renderLanguageOptions(languages)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;