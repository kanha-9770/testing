
"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import lookup from "country-code-lookup";

interface Country {
  name: string;
  language: string;
  flag: string;
  code: string;
}

const CountryLayout: React.FC = () => {
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "India",
    language: "हिंदी",
    flag: "https://flagcdn.com/in.svg", // Default flag URL for India
    code: "in",
  });

  const router = useRouter();
  const pathname = usePathname() || "";

  const countries: Country[] = [
    {
      name: "Saudi Arabia",
      language: "العربية",
      flag: "https://flagcdn.com/sa.svg",
      code: "sa",
    },
    {
      name: "Egypt",
      language: "العربية",
      flag: "https://flagcdn.com/eg.svg",
      code: "eg",
    },
    {
      name: "Bangladesh",
      language: "বাংলা",
      flag: "https://flagcdn.com/bd.svg",
      code: "bd",
    },
    {
      name: "Brazil",
      language: "Português",
      flag: "https://flagcdn.com/br.svg",
      code: "br",
    },
    {
      name: "Portugal",
      language: "Português",
      flag: "https://flagcdn.com/pt.svg",
      code: "pt",
    },
    {
      name: "China",
      language: "中文",
      flag: "https://flagcdn.com/cn.svg",
      code: "cn",
    },
    {
      name: "Hong Kong",
      language: "中文",
      flag: "https://flagcdn.com/hk.svg",
      code: "hk",
    },
    {
      name: "Germany",
      language: "Deutsch",
      flag: "https://flagcdn.com/de.svg",
      code: "de",
    },
    {
      name: "Switzerland",
      language: "Deutsch",
      flag: "https://flagcdn.com/ch.svg",
      code: "ch",
    },
    {
      name: "Austria",
      language: "Deutsch",
      flag: "https://flagcdn.com/at.svg",
      code: "at",
    },
    {
      name: "Australia",
      language: "English-au",
      flag: "https://flagcdn.com/au.svg",
      code: "au",
    },
    {
      name: "Canada",
      language: "English-ca",
      flag: "https://flagcdn.com/ca.svg",
      code: "ca",
    },
    {
      name: "United Kingdom",
      language: "English-gb",
      flag: "https://flagcdn.com/gb.svg",
      code: "gb",
    },
    {
      name: "United States",
      language: "English-us",
      flag: "https://flagcdn.com/us.svg",
      code: "us",
    },
    {
      name: "Spain",
      language: "español",
      flag: "https://flagcdn.com/es.svg",
      code: "es",
    },
    {
      name: "Mexico",
      language: "español",
      flag: "https://flagcdn.com/mx.svg",
      code: "mx",
    },
    {
      name: "Argentina",
      language: "español",
      flag: "https://flagcdn.com/ar.svg",
      code: "ar",
    },
    {
      name: "Chile",
      language: "español",
      flag: "https://flagcdn.com/cl.svg",
      code: "cl",
    },
    {
      name: "Colombia",
      language: "español",
      flag: "https://flagcdn.com/co.svg",
      code: "co",
    },
    {
      name: "European Union",
      language: "français",
      flag: "https://flagcdn.com/eu.svg",
      code: "eu",
    },
    {
      name: "France",
      language: "français",
      flag: "https://flagcdn.com/fr.svg",
      code: "fr",
    },
    {
      name: "Belgium",
      language: "Français",
      flag: "https://flagcdn.com/be.svg",
      code: "be",
    },
    {
      name: "Luxembourg",
      language: "Français",
      flag: "https://flagcdn.com/lu.svg",
      code: "lu",
    },
    {
      name: "India",
      language: "हिंदी",
      flag: "https://flagcdn.com/in.svg",
      code: "in",
    },
    {
      name: "Italy",
      language: "italiano",
      flag: "https://flagcdn.com/it.svg",
      code: "it",
    },
    {
      name: "Japan",
      language: "日本語",
      flag: "https://flagcdn.com/jp.svg",
      code: "jp",
    },
    {
      name: "Belarus",
      language: "Pусский",
      flag: "https://flagcdn.com/by.svg",
      code: "by",
    },
    {
      name: "Russia",
      language: "русский",
      flag: "https://flagcdn.com/ru.svg",
      code: "ru",
    },
    {
      name: "Ukraine",
      language: "Pусский",
      flag: "https://flagcdn.com/ua.svg",
      code: "ua",
    },
    {
      name: "South Africa",
      language: "isiZulu",
      flag: "https://flagcdn.com/za.svg",
      code: "za",
    },
  ];
  // Filter countries by search term
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle flag dropdown visibility
  const handleFlagOpen = () => {
    setIsFlagOpen(!isFlagOpen);
  };

  // Function to handle country selection
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsFlagOpen(false);
    setSearchTerm("");

    // Extract the current path without the country code
    const currentPath = pathname.split("/").slice(2).join("/") || ""; // Default to "contact" if no path

    // Update the route to include the new country code
    router.push(`/${country.code}/${currentPath}`);
  };

  // Automatically update the country based on URL
  useEffect(() => {
    if (pathname) {
      const countryCode = pathname.split("/")[1]?.toLowerCase();
      if (countryCode) {
        const countryData = lookup.byIso(countryCode.toUpperCase());

        if (countryData) {
          setSelectedCountry({
            name: countryData.country,
            language: selectedCountry.language, // Customize language as needed
            flag: `https://flagcdn.com/${countryCode}.svg`,
            code: countryCode,
          });
        }
      }
    }
  }, [pathname]);

  // Close flag dropdown when clicking outside
  const countryRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      countryRef.current &&
      !countryRef.current.contains(event.target as Node)
    ) {
      setIsFlagOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div ref={countryRef} className="relative inline-block text-left">
      <div className="flex justify-center items-center space-x-4">
        <button
          type="button"
          className="inline-flex  w-full rounded-md text-sm font-medium invert-0 focus:outline-none"
          aria-expanded={isFlagOpen}
          aria-haspopup="true"
          onClick={handleFlagOpen}
        >
          <div className="h-[1.25rem] w-[1.25rem] flex items-center rounded-full justify-center overflow-hidden">
            <Image
              width={100}
              height={100}
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex ml-2 font-light flex-col space-y-0">
            <p className="font-poppins invert-0 hidden lg:flex text-16 m-0 p-0 leading-tight">
              {selectedCountry.code.toUpperCase()}
            </p>
            <p className="flex lg:hidden font-poppins invert-0 text-xs m-0 p-0 leading-tight">
              {selectedCountry.name}
            </p>
            <p className="flex lg:hidden font-poppins invert-0 text-sm m-0 p-0 leading-tight">
              {selectedCountry.language}
            </p>
          </div>
        </button>
      </div>
      {isFlagOpen && (
        <div
          className="absolute right-[-6.5rem] mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5"
          aria-orientation="vertical"
        >
          <div className="relative p-4">
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
              <FiSearch className="invert-0" />
            </div>
            <input
              type="text"
              className="w-full font-poppins text-14 px-2 py-1 pl-2 border rounded-full focus:outline-none focus:ring"
              placeholder="Country or Language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="max-h-60 grid grid-cols-2 overflow-y-auto scrollbar-custom">
            {filteredCountries.slice(0, visibleCount).map((country, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-0 text-sm invert-0 flex items-center"
                onClick={() => handleCountrySelect(country)}
              >
                <p className="px-1 w-24 hover:bg-gray-200 hover:rounded-3xl ">
                  {" "}
                  {country.language}
                </p>
              </button>
            ))}
            {visibleCount < filteredCountries.length && (
              <p
                className="text-[#dc0e2a] cursor-pointer pl-4 p-2"
                onClick={handleShowMore}
              >
                more...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryLayout;
