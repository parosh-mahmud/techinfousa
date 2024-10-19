import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "SEO Optimization", href: "/services/seo-optimization" },
      ],
    },
    {
      name: "Training",
      submenu: [
        { name: "Workshops", href: "/training/workshops" },
        { name: "Webinars", href: "/training/webinars" },
      ],
    },
    {
      name: "Consulting",
      submenu: [
        { name: "Business Strategy", href: "/consulting/business-strategy" },
        { name: "Technology", href: "/consulting/technology" },
      ],
    },
    {
      name: "Careers",
      submenu: [
        { name: "Job Openings", href: "/careers/job-openings" },
        { name: "Internships", href: "/careers/internships" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div
        className={`w-full fixed top-0 z-50 h-20 ${
          isScrolled ? "bg-white shadow-md dark:bg-gray-900" : ""
        }`}
      >
        <nav className="container flex items-center justify-between h-full p-4 mx-auto lg:justify-between xl:px-0">
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <a className="flex items-center space-x-2">
                      <img
                        src="/logos/techinfologo.png"
                        alt="Logo"
                        className="w-25 h-20"
                      />
                    </a>
                  </Link>
                  <div className="flex items-center lg:hidden">
                    <Disclosure.Button
                      className="p-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                      aria-label="Toggle Menu"
                    >
                      {open ? (
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
                <Disclosure.Panel className="lg:hidden">
                  <div className="flex flex-col mt-4 space-y-2">
                    {navigation.map((item, index) => (
                      <div key={index}>
                        {item.submenu ? (
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                  <span>{item.name}</span>
                                  <ChevronDownIcon
                                    className={`w-5 h-5 transition-transform duration-200 ${
                                      open ? "transform rotate-180" : ""
                                    }`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-2 pb-4">
                                  {item.submenu.map((subitem, idx) => (
                                    <Link key={idx} href={subitem.href}>
                                      <a className="block py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                        {subitem.name}
                                      </a>
                                    </Link>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ) : (
                          <Link href={item.href}>
                            <a className="px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                              {item.name}
                            </a>
                          </Link>
                        )}
                      </div>
                    ))}
                    <Link href="/">
                      <a className="px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">
                        Sign In
                      </a>
                    </Link>
                    <div className="mt-3">
                      <ThemeChanger />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex items-center space-x-6">
              {navigation.map((menu, index) => (
                <li key={index} className="relative group">
                  {menu.submenu ? (
                    <>
                      <button className="flex items-center text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:outline-none">
                        {menu.name}
                        <ChevronDownIcon className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 z-10 hidden pt-2 group-hover:block">
                        <div className="w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
                          {menu.submenu.map((subitem, idx) => (
                            <Link key={idx} href={subitem.href}>
                              <a className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                {subitem.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={menu.href}>
                      <a className="text-lg font-normal text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:outline-none">
                        {menu.name}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center space-x-3">
            <Link href="/">
              <a className="px-6 py-2 text-white bg-indigo-600 rounded-md">
                Sign In
              </a>
            </Link>
            <ThemeChanger />
          </div>
        </nav>
      </div>
      <main className="mt-20">{/* Main content goes here */}</main>
    </>
  );
}
