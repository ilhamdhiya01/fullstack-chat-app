import classNames from "classnames";

import ChatContent from "../../components/module/Home/Chat";
import Welcome from "../../components/module/Home/Chat/Welcome";
import Sidebar from "../../components/module/Home/Sidebar";
import useMessageStore from "../../stores/message/useMessageStore";

const HomePage = () => {
  const { userSelected, showSidebar } = useMessageStore();
  return (
    <div className="h-screen bg-base-300">
      <div className="flex items-center h-full pt-[65px] overflow-x-hidden">
        <Sidebar />
        <div
          className={classNames(
            "flex-1 flex flex-col justify-between h-full relative transition-transform duration-300",
            {
              "translate-x-0": !showSidebar,
              "translate-x-full md:translate-x-0": showSidebar,
            },
          )}
        >
          {userSelected ? <ChatContent /> : <Welcome />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
