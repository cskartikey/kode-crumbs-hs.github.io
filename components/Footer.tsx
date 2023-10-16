import Link from "next/link";
import { Icon } from "@iconify/react";
// import Image from "next/image";
// import flagOrhpeus from "../public/static/svg/flag-orpheus-left.svg"
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { SVG } from '@iconify/tools';

// export async function getServerSideProps(): Promise<{
//   props: {
//     svgData: string;
//   };
// }> {
//   const svg = new SVG(
//     '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 6v12l10-6z" fill="currentColor"/></svg>'
//   );

//   return {
//     props: {
//       svgData: svg.toString(), // Convert the SVG to a string
//     },
//   };
// }

const Footer = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 bg-kode-crumbs-black dark:bg-kode-crumbs-orange px-4 lg:px-24 xl:px-48 max-h-[vh] lg:gap-y-28 lg:gap-x-28 xl:gap-x-96">
      <div className="pt-6 row-start-1 text-kode-crumbs-orange dark:text-kode-crumbs-black">
        <h1 className="text-3xl pb-2 xl:text-4xl">
          <span className="font-FiraSans font-bold">Kode</span>{" "}
          <span className="font-UnicaOne">Crumbs</span>
        </h1>
        <p className="font-Billy xl:text-2xl">
          Unleashing the power of code, one crumbs at a time.
        </p>
        <hr className="h-px my-2 border-0 bg-kode-crumbs-orange dark:bg-kode-crumbs-black lg:hidden" />
      </div>
      <div className="row-start-2 lg:pt-6 lg:row-start-1 lg:col-start-2 text-kode-crumbs-orange dark:text-kode-crumbs-black">
        <div>
          <h1 className="font-Billy text-lg xl:text-3xl">
            Subscribe to our newsletter!
          </h1>
          <p className="font-Billy font-light hidden lg:block xl:text-xl">
            Give reasons to sub (such as weekly content, career advice, etc.?)
          </p>
        </div>
        <div className="lg:hidden">
          <div className="relative mb-2 flex flex-wrap items-stretch w-3/4 font-Billy">
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l-md border border-solid border-kode-crumbs-orange dark:border-kode-crumbs-black bg-white px-3 py-2 text-base placeholder:text-kode-crumbs-black text-kode-crumbs-black dark:text-current"
              placeholder="Email Address"
            />
            <span
              className="flex items-center whitespace-nowrap rounded-r-md border border-l-0 dark:text-white text-kode-crumbs-black bg-kode-crumbs-orange dark:bg-kode-crumbs-black border-solid border-kode-crumbs-orange dark:border-kode-crumbs-black px-3 py-2 text-center text-base"
            >
              Subscribe
            </span>
          </div>
          <p className="font-Billy text-kode-crumbs-orange dark:text-kode-crumbs-black text-xs">
            No spam. No affiliate links. No data sharing.
          </p>
        </div>
        <hr className="h-px my-2 border-0 bg-kode-crumbs-orange dark:bg-kode-crumbs-black lg:hidden" />
      </div>
      <div className="hidden lg:block lg:row-start-2 lg:col-start-2">
        <button className="relative mb-2 flex items-stretch w-3/4 font-Billy">
          <input
            type="text"
            className="relative m-0 block w-full min-w-0 2xl:placeholder:text-xl 2xl:text-xl flex-auto rounded-l-md border border-solid border-kode-crumbs-orange dark:border-kode-crumbs-black bg-white bg-clip-padding px-3 py-2 text-sm placeholder:text-kode-crumbs-black outline-none transition duration-200 ease-in-out"
            placeholder="Email Address"
          />
          <span className="flex items-center 2xl:text-xl w-8/12 2xl:w-5/12 whitespace-nowrap rounded-r-md border border-l-0 text-kode-crumbs-black dark:text-white bg-kode-crumbs-orange dark:bg-kode-crumbs-black border-solid border-kode-crumbs-orange  dark:border-kode-crumbs-black px-3 py-2 text-center text-sm">
            Subscribe
          </span>
        </button>
        <p className="font-Billy text-kode-crumbs-orange dark:text-kode-crumbs-black text-xs">
          No spam. No affiliate links. No data sharing.
        </p>
      </div>
      <div className="row-start-3 -mt-4 mb-2 lg:mb-0 md:mt-2 lg:row-start-2 text-kode-crumbs-orange dark:text-kode-crumbs-black">
        <div className="grid grid-cols-4 grid-rows-2 w-[15vh] md:text-xl lg:text-2xl auto-cols-max gap-x-10">
          <Link href="https://github.com/kodecrumbs">
            <Icon icon="bi:github" />
          </Link>
          <Link href="https://github.com/kodecrumbs">
            <Icon icon="bi:linkedin" />
          </Link>
          <Link href="https://github.com/kodecrumbs">
            <Icon icon="bi:instagram" />
          </Link>
          <Link href="https://github.com/kodecrumbs">
            <Icon icon="bi:discord" />
          </Link>
        </div>
        <p className="-mt-2 text-xs font-Billy row-start-2 w-full col-span-6 lg:text-sm">
          Made with ♥ <span className="font-sans">| ©</span> 2023 Kode Crumbs
        </p>
      </div>
    </div>
  );
};

export default Footer;
