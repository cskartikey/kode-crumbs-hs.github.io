import Head from "next/head";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Kode Crumbs</title>
      </Head>
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-hero dark:bg-heroDark px-4 lg:px-24 xl:px-48 py-20 bg-no-repeat bg-cover mt-[72px] lg:mt-0">
        <div className="font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange lg:self-center w-3/4 lg:w-auto">
          Unleash Your Coding Potential{" "}
          <span className="lg:underline lg:decoration-wavy">
            with Kode Crumbs
          </span>
        </div>
        <div className="col-start-2 justify-self-end">
          <Image
            src={"/static/svg/KodeCrumbs.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="rounded-lg hidden lg:block scale-125"
          />
        </div>
      </div>
      <hr className="h-px border-0 dark:bg-gray-800 hidden lg:block" />
      {/* 2nd section */}
      <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-2 lg:py-28 lg:gap-x-12">
        <div className="lg:col-start-1 lg:justify-self-start">
          <Image
            src={"/static/svg/ideasNeutral.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="hidden lg:block scale-150"
          />
        </div>
        <Image
          src={"/static/svg/dashed-arrowDark.svg"}
          alt="zig-zag arrow"
          width={400}
          height={400}
          className="lg:self-center lg:items-center lg:justify-self-center lg:hidden lg:dark:block lg:w-4/5 hidden"
        />
        <Image
          src={"/static/svg/dashed-arrow.svg"}
          alt="zig-zag arrow"
          width={300}
          height={300}
          className="lg:self-center lg:items-center lg:justify-self-center lg:dark:hidden lg:block lg:w-4/5 hidden"
        />
        <Image
          src={"/static/svg/squigglyArrowDark.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto hidden dark:block lg:hidden lg:dark:hidden"
        />
        <Image
          src={"/static/svg/squigglyArrow.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto dark:hidden block lg:hidden"
        />
        <div className="lg:justify-self-end pl-28 row-start-2 lg:row-start-auto lg:col-start-3 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Learn, create, and share your ideas
        </div>
      </div>
      <hr className="h-px border-0 dark:bg-gray-800 hidden lg:block" />
      {/* 3rd section */}
      <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-2 lg:py-28 gap-x-12">
        <div className="lg:justify-self-start row-start-2 pr-6 lg:pr-0 lg:row-start-auto lg:col-start-1 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Connect with other highschoolers
        </div>
        <Image
          src={"/static/svg/bi-directionalDark.svg"}
          alt="bi-directional arrow"
          width={400}
          height={400}
          className="lg:self-center lg:items-center lg:justify-self-center lg:hidden lg:dark:block lg:w-4/5 hidden"
        />
        <Image
          src={"/static/svg/bi-directional.svg"}
          alt="bi-directional arrow"
          width={400}
          height={400}
          className="lg:self-center lg:items-center lg:justify-self-center lg:dark:hidden lg:block lg:w-4/5 hidden"
        />
        <div className="lg:col-start-3 justify-self-end">
          <Image
            src={"/static/svg/connectDark.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="rounded-lg lg:hidden lg:dark:block hidden scale-150"
          />
          <Image
            src={"/static/svg/connect.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="rounded-lg lg:dark:hidden lg:block hidden scale-150"
          />
        </div>
        <Image
          src={"/static/svg/zigzagDark.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto hidden dark:block lg:hidden lg:dark:hidden"
        />
        <Image
          src={"/static/svg/zigzag.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto dark:hidden block lg:hidden"
        />
      </div>
      <hr className="h-px border-0 dark:bg-gray-800 hidden lg:block" />
      {/* 4th section */}
      <div className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-2 lg:py-28 gap-x-12">
        <div className="lg:col-start-1 lg:justify-self-start ">
        <Image
            src={"/static/svg/exploreDark.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="rounded-lg lg:hidden lg:dark:block hidden scale-150"
          />
          <Image
            src={"/static/svg/explore.svg"}
            alt="Kode Crumbs logo"
            width={1000}
            height={1000}
            className="rounded-lg lg:dark:hidden lg:block hidden scale-150"
          />
        </div>
        <Image
          src={"/static/svg/tripleDark.svg"}
          alt="triple arrow"
          width={400}
          height={400}
          className="lg:self-center lg:items-center lg:justify-self-center lg:hidden lg:dark:block lg:w-4/5 hidden"
        />
        <Image
          src={"/static/svg/triple.svg"}
          alt="triple arrow"
          width={400}
          height={400}
          className="lg:self-center lg:items-center lg:justify-self-center lg:dark:hidden lg:block lg:w-4/5 hidden"
        />
        <Image
          src={"/static/svg/bi-YdirectionalDark.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto hidden dark:block lg:hidden lg:dark:hidden"
        />
        <Image
          src={"/static/svg/bi-Ydirectional.svg"}
          alt="zig-zag arrow"
          width={100}
          height={100}
          className="place-self-center row-start-1 lg:row-start-auto dark:hidden block lg:hidden"
        />
        <div className="justify-self-end row-start-2 lg:row-start-auto pl-24 lg:col-start-3 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Explore Computer Science and Technology
        </div>
      </div>
    </>
  );
}
