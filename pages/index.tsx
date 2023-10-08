
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
export default function Page() {
  const [chevron, setChevron] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const toggleDropdown = () => {
    setChevron(!chevron);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target as Node)
    ) {
      setChevron(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Kode Crumbs</title>
      </Head>

    </>
  );
}
