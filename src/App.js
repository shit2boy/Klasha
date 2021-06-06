import MainBoard from "./components/MainBoard";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [minisidebar, setminiSidebar] = useState(false);
  const toggleNav = () => {
    console.log("lok");
    setminiSidebar(!minisidebar);
  };

  return (
    <div>
      <SideBar
        showSideBar={minisidebar ? minisidebar : "hide"}
        onShowMenu={toggleNav}
      />

      {/* {!minisidebar && <SideBar showSideBar="hide" onShowMenu={toggleNav} />} */}
      <MainBoard onShowMenu={toggleNav} />
    </div>
  );
};

export default App;
