import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <nav className="w-full bg-kode-crumbs-black dark:bg-kode-crumbs-orange top-0 left-0 right-0 z-10">
      <div className="flex flex-col lg:flex-row px-4 lg:px-48 py-4 lg:items-center justify-between lg:inset-0">
        <Link
          href={"/"}
          className="flex gap-x-2 lg:gap-x-3 text-4xl lg:text-5xl dark:text-kode-crumbs-black text-kode-crumbs-orange"
        >
          <span className="font-FiraSans font-bold">Kode</span>{" "}
          <span className="font-UnicaOne">Crumbs</span>
        </Link>
        <button
          className="fixed right-2 lg:hidden text-3xl"
          onClick={() => setExpanded(!isExpanded)}
        >
          <Icon icon="quill:hamburger" />
        </button>
        {/* <div className="">
        <ul className="flex flex-col gap-y-28 py-14 items-baseline bg-white h-screen flex-start dark:text-kode-crumbs-black font-Billy text-3xl lg:text-2xl">
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/about-us"} className="bg-kode-crumbs-black py-2 px-4 rounded-md text-white">Join</Link>
          </li>
        </ul>

        </div> */}

        <ul className="hidden lg:flex gap-x-14 dark:text-kode-crumbs-black text-kode-crumbs-orange font-Billy text-xl ">
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/projets"}>Projects</Link>
          </li>
          <li>
            <Link href={"/faqs"}>FAQs</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link
              href={"/join"}
              className="dark:bg-kode-crumbs-black bg-kode-crumbs-orange py-2 px-4 rounded-md dark:text-white text-kode-crumbs-black "
            >
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
