/* eslint-disable react/button-has-type */

import classNames from "classnames";

import useThemeStore from "../../../../stores/theme/useThemeStore";

interface ThemeItemProps {
  theme: Theme;
}
const ThemeItem = ({ theme }: ThemeItemProps) => {
  const { theme: currentTheme, setTheme } = useThemeStore();

  return (
    <button
      className={classNames(
        "group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors",
        {
          "bg-base-200": currentTheme === theme,
          "hover:bg-base-200/50": currentTheme !== theme,
        },
      )}
      onClick={() => setTheme(theme)}
    >
      <div
        className="h-fit w-full rounded-sm md:rounded-md overflow-hidden p-[2px] md:p-[5px]"
        data-theme={theme}
      >
        <div className="inset-0 grid grid-cols-4 gap-[3px]">
          <div className="rounded-sm bg-primary aspect-square" />
          <div className="rounded-sm bg-secondary aspect-square" />
          <div className="rounded-sm bg-accent aspect-square" />
          <div className="rounded-sm bg-neutral aspect-square" />
        </div>
      </div>
      <span className="text-[11px] font-medium truncate w-full text-center">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
    </button>
  );
};

export default ThemeItem;
