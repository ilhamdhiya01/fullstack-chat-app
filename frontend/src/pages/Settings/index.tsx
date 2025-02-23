/* eslint-disable react/button-has-type */

import Preview from "../../components/module/Settings/Preview";
import ListTheme from "../../components/module/Settings/Theme";

const SettingsPage = () => (
  <div className="h-fit container mx-auto px-4 pt-20 max-w-5xl">
    <div className="space-y-6">
      {/* Theme Section */}
      <ListTheme />
      {/* Preview Section */}
      <Preview />
    </div>
  </div>
);
export default SettingsPage;
