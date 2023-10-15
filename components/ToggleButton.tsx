import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="fixed right-4 bottom-10 z-10 text-4xl 2xl:text-5xl text-kode-crumbs-orange bg-kode-crumbs-black dark:text-kode-crumbs-black dark:bg-kode-crumbs-orange rounded-full px-2 py-2 shadow-lg"
    >
      <Icon
        icon="material-symbols:dark-mode-rounded"
        className="dark:hidden block"
      />
      <Icon icon="material-symbols:light-mode" className="hidden dark:block" />
    </button>
  );
};

export default ToggleButton;
