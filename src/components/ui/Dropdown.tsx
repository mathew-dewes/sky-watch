"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { slugify } from "../helpers/format";

export default function DropDown({ options, defaultValue, type }: { options: string[], defaultValue: string, type: "community" | "filter" }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelect = (value: string) => {
    if (type == "community") {
      if (value !== "all") {
        setSelected("View All");
      } else {
        setSelected(value);
      }

    }


    const newParams = new URLSearchParams(searchParams.toString());


    if (type === "filter") {
        const slug = slugify(value);
            setSelected(value);
      if (slug === "most-recent") {
        newParams.delete("sort"); 
      } else {
        newParams.set("sort", slug);
      }
    }

    if (type === "community") {
      if (value === "View All") {
        setSelected("View All");
        newParams.delete("community");
      } else {
              setSelected(value);
        newParams.set("community", value);
      }
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
        <div
          id="dropdown"
          className={`${show ? "block" : "hidden"} z-10 divide-y divide-gray-100 rounded-lg shadow-sm min-w-full w-full bg-lightdark-500 absolute mt-2`}
        >
          <ul className="py-2 text-sm text-gray-200">
            {type === "community" && <li onClick={() => handleSelect("View All")}>
              <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                View all
              </span>
            </li>}
            {options.map((option, key) => (
              <li key={key} onClick={() => handleSelect(option)}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  {option}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
