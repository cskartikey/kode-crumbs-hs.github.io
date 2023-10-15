import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <nav className="fixed w-full bg-kode-crumbs-black dark:bg-kode-crumbs-orange top-0 left-0 right-0 z-10 lg:relative">
      <div className="flex flex-col lg:flex-row px-4 lg:px-24 xl:px-48 py-4 2xl:py-6 lg:items-center justify-between lg:inset-0">
        <Link
          href={"/"}
          className="flex gap-x-2 lg:gap-x-3 text-4xl xl:text-5xl dark:text-kode-crumbs-black text-kode-crumbs-orange"
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
        
        <div className={`fixed flex flex-col max-w-[300px] min-w-[225px] top-0 h-full justify-center dark:bg-kode-crumbs-orange bg-kode-crumbs-black  ${isExpanded ? "left-0" : "-left-[100%]"} transition-all duration-300 z-20`}>
          <ul className="flex flex-col gap-y-9 pl-4 items-baseline flex-start dark:text-kode-crumbs-black text-kode-crumbs-orange font-Billy text-3xl lg:text-2xl w-full">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
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
          </ul>
          <Link href={"/about-us"} className="dark:bg-kode-crumbs-black py-2 px-4 mt-4 rounded-none text-white w-full font-Billy text-3xl lg:text-2xl bg-kode-crumbs-orange">Join</Link>
        </div>

        {/* Overlay */}
        <div className={`fixed top-[72px] left-0 w-full h-full bg-kode-crumbs-black dark:bg-kode-crumbs-orange -z-50 ${isExpanded ? "opacity-25" : "opacity-0"} transition-all duration-300`}>

        </div>

        <ul className="hidden lg:flex gap-x-6 2xl:gap-x-14 dark:text-kode-crumbs-black text-kode-crumbs-orange font-Billy text-lg xl:text-xl 2xl:text-2xl">
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
