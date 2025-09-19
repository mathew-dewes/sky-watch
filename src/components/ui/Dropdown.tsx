"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function DropDown({ communities, defaultValue }: { communities: string[], defaultValue: string }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "View All"); // default label
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelect = (value: string) => {
    setSelected(value === "all" ? "View all" : value);

    const newParams = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      newParams.delete("community"); // remove filter
    } else {
      newParams.set("community", value); // set filter
    }

    router.push(`${pathname}?${newParams.toString()}`);
    setShow(false);
  };

  return (
    <div className="w-fit">
      <div className="relative inline-block">
        <button
          onClick={() => setShow(!show)}
          className="cursor-pointer text-white bg-accent-500 hover:ring-4 focus:outline-none rounded-lg pl-3 pr-8 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          {selected}
          <svg
            className="w-2.5 h-2.5 absolute right-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdown"
          className={`${show ? "block" : "hidden"} z-10 divide-y divide-gray-100 rounded-lg shadow-sm min-w-full w-full bg-lightdark-500 absolute mt-2`}
        >
          <ul className="py-2 text-sm text-gray-200">
            <li onClick={() => handleSelect("all")}>
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                View all
              </span>
            </li>
            {communities.map((community, key) => (
              <li key={key} onClick={() => handleSelect(community)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  {community}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
