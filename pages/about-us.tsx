import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="grid grid-cols-1 bg-white dark:bg-kode-crumbs-black px-4 lg:px-24 xl:px-48 py-10 bg-no-repeat bg-cover mt-[72px] lg:mt-0">
        <div className="inline-flex flex-row items-center">
          <h1 className="font-Billy text-4xl lg:text-5xl 2xl:text-6xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
            About Us
          </h1>
          <Image
            src={"/static/svg/about-us-arrowDark.svg"}
            alt="about-us-arrow"
            width={200}
            height={200}
            className="pt-8 lg:hidden lg:dark:block dark:block hidden w-1/4 lg:w-1/6 xl:w-auto pl-2"
          />
          <Image
            src={"/static/svg/about-us-arrow.svg"}
            alt="about-us-arrow"
            width={200}
            height={200}
            className="pt-8 lg:dark:hidden lg:block w-1/4 lg:w-1/6 xl:w-auto pl-2"
          />
        </div>
        <p className="dark:text-kode-crumbs-orange text-kode-crumbs-black font-Billy text-base lg:text-xl 2xl:text-2xl font-light">
          Kode Crumbs is a place where high school students with a passion for
          technology come together to learn, create, and share their ideas. We
          provide a platform for students to explore their interests in computer
          science and technology, whether it &apos s programming, web
          development, game design, or anything else. Our community is
          supportive, collaborative, and inclusive, and we welcome students of
          all backgrounds and skill levels.{" "}
          <Link
            href="/join"
            className="dark:text-link-dark-mode text-link-light-mode underline font-normal"
          >
            Join us today and be part of the future of technology!
          </Link>
        </p>
        <div className="grid lg:grid-cols-3 py-10 gap-y-10 lg:gap-x-10">
          <h1 className="font-Billy text-4xl lg:text-5xl 2xl:text-6xl col-span-2 text-kode-crumbs-black dark:text-kode-crumbs-orange">
            Meet the team!
          </h1>
          <div className="flex flex-col items-center col-start-1 lg:col-start-1 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Kartikey"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Kartikey Singh Chauhan
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Founder + Full Stack Developer
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={"mailto:skartikey314@gmai.com"}>
                <Icon icon={"ic:round-email"} className="text-3xl 2xl:text-4xl" />
              </Link>
              <Link href={"https://linkedin.com/in/cskartikey"}>
                <Icon icon={"bi:linkedin"}/>
              </Link>
              <Link href={"https://github.com/cskartikey"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center col-start-1 lg:col-start-2 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Kunwar"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Kunwar Utkarsh
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Co-Founder + Graphic Desinger
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={"mailto:kunwar15utkarsh@gmail.com"}>
                <Icon icon={"ic:round-email"} className="text-4xl" />
              </Link>
              <Link href={"https://www.linkedin.com/in/k-utkarsh-21072b273"}>
                <Icon icon={"bi:linkedin"} className="" />
              </Link>
              <Link href={"https://github.com/mk-utkarsh"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center col-start-1 lg:col-start-3 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Shreya"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Shreya Mauyra
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Co-Founder + Marketing Manager
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={"mailto:"}>
                <Icon icon={"ic:round-email"} className="text-4xl" />
              </Link>
              <Link href={"https://www.linkedin.com/in/shreya-maurya-322b33272"}>
                <Icon icon={"bi:linkedin"}/>
              </Link>
              <Link href={"https://www.githum.com/mauryashreya"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center col-start-1 lg:col-start-1 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Malaycia"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Malaycia Ashely
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Lead UI Designer
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={""}>
                <Icon icon={"ic:round-email"} className="text-4xl" />
              </Link>
              <Link href={"https://linkedin.com/in/malycia-a-338524282"}>
                <Icon icon={"bi:linkedin"}/>
              </Link>
              <Link href={"https://github.com/FireBreather65"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center col-start-1 lg:col-start-2 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Rakrita"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Rakrita Rao
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Social Media Manager
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={"mailto:rakritarao26aug2006@gmail.com"}>
                <Icon icon={"ic:round-email"} className="text-4xl" />
              </Link>
              <Link href={"https://linkedin.com/in/rakrita-rao-4294b4279"}>
                <Icon icon={"bi:linkedin"} className="" />
              </Link>
              <Link href={"https://github.com/rakritarao"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center col-start-1 lg:col-start-3 gap-y-2">
            <Image
              src={"/static/img/KodeCrumbs.png"}
              alt="portrait of Chitransh"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-Billy font-normal text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Chitransh Verma
            </p>
            <p className="font-Billy font-light text-lg 2xl:text-xl text-kode-crumbs-black dark:text-kode-crumbs-orange">
              Full Stack Developer
            </p>
            <div className="flex flex-row gap-x-4 text-2xl 2xl:text-3xl text-kode-crumbs-black dark:text-kode-crumbs-orange items-center ">
              <Link href={"mailto:vermachitransh12@gmail.com"}>
                <Icon icon={"ic:round-email"} className="text-4xl" />
              </Link>
              <Link href={"https://linkedin.com/in/thearcane"}>
                <Icon icon={"bi:linkedin"}/>
              </Link>
              <Link href={"https://github.com/AnonymousXC"}>
                <Icon icon={"bi:github"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
