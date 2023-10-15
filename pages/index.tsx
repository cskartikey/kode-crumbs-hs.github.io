import Head from "next/head";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Kode Crumbs</title>
      </Head>
      {/* Hero */}
      <div className="grid grid-cols-2 bg-hero dark:bg-heroDark px-4 lg:px-24 xl:px-48 py-20 bg-no-repeat bg-cover">
        <div className="font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Unleash Your Coding Potential{" "}
          <span className="underline decoration-wavy">with Kode Crumbs</span>
        </div>
        <div className="col-start-2 justify-self-end">
          <Image
            src={"/static/img/KodeCrumbs.png"}
            alt="Kode Crumbs logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <hr className="h-px  border-0 dark:bg-gray-800" />
      {/* 2nd section */}
      <div className="grid grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-20 gap-x-12">
        <div className="col-start-1 justify-self-start">
          <Image
            src={"/static/img/KodeCrumbs.png"}
            alt="Kode Crumbs logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <Image
          src={"/static/svg/dashed-arrowDark.svg"}
          alt="zig-zag arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center hidden dark:block w-full"
        />
        <Image
          src={"/static/svg/dashed-arrow.svg"}
          alt="zig-zag arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center dark:hidden w-full"
        />
        <div className="justify-self-end col-start-3 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Learn, create, and share your ideas
        </div>
      </div>
      <hr className="h-px  border-0 dark:bg-gray-800" />
      {/* 3rd section */}
      <div className="grid grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-20 gap-x-12">
        <div className="justify-self-start col-start-1 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Connect with other highschoolers
        </div>
        <Image
          src={"/static/svg/bi-directionalDark.svg"}
          alt="bi-directional arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center hidden dark:block w-full"
        />
        <Image
          src={"/static/svg/bi-directional.svg"}
          alt="bi-directional arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center dark:hidden w-full"
        />
        <div className="col-start-3 justify-self-end">
          <Image
            src={"/static/img/KodeCrumbs.png"}
            alt="Kode Crumbs logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <hr className="h-px  border-0 dark:bg-gray-800" />
      {/* 4th section */}
      <div className="grid grid-cols-3 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-20 gap-x-12">
        <div className="col-start-1 justify-self-start">
          <Image
            src={"/static/img/KodeCrumbs.png"}
            alt="Kode Crumbs logo"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <Image
          src={"/static/svg/tripleDark.svg"}
          alt="triple arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center hidden dark:block w-full"
        />
        <Image
          src={"/static/svg/triple.svg"}
          alt="triple arrow"
          width={400}
          height={400}
          className="self-center items-center justify-self-center dark:hidden w-full"
        />
        <div className="justify-self-end col-start-3 font-Billy text-4xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange self-center">
          Explore Computer Science and Technology
        </div>
      </div>
    </>
  );
}
