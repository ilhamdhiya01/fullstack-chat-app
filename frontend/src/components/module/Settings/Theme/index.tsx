/* eslint-disable react/button-has-type */
import { THEMES } from "../../../../constants/theme";

import ThemeItem from "./ThemeItem";

const ListTheme = () => (
  <>
    <div className="flex flex-col gap-1">
      <h2 className="text-lg font-semibold">Theme</h2>
      <p className="text-sm text-base-content/70">
        Choose a theme for your chat interface
      </p>
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
      {THEMES.map((theme) => (
        <ThemeItem key={theme} theme={theme} />
      ))}
    </div>
  </>
);

export default ListTheme;
