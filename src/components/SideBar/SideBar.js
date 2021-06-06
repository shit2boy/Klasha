import styles from "./styles.module.css";
const SideBar = ({ showSideBar, onShowMenu }) => {
  return (
    <>
      <div
        className={`${showSideBar} ? ${styles.miniSidebar} : ${styles.sidebar}`}
      >
        <div className={styles.logo}>
          <img src="./klashaAssets/logo.svg" alt="klasha_logo" width="100px" />
        </div>
        <div className={styles.sideMenu_items}>
          <div>
            <span
              className={styles.hideMenuBar}
              onClick={() => {
                onShowMenu();
              }}
            >
              &times;
            </span>{" "}
            <h5 className={styles.menu_head}>Main Pages</h5>
          </div>
          <ul>
            <li className={`${styles.list_item}  ${styles.active}`}>
              <img
                src="./klashaAssets/Category.svg"
                alt="dashboard category_icon"
              />{" "}
              <span>Dashboard</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Wallet.svg"
                alt="dashboard balances icon"
              />
              <small>Balances</small>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/user.svg"
                alt="dashboard customer icon"
              />
              <span>Customers</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Activity.svg"
                alt="dashboard analytics icon"
              />
              <span>Analytics</span>
            </li>
          </ul>
          <div>
            <h5 className={styles.menu_head}>General</h5>
          </div>
          <ul>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Filter.svg"
                alt="dashboard setting_icon"
              />{" "}
              <span>Settings</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Starteam.svg"
                alt="dashboard team icon"
              />
              <span>Team</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Callcontact.svg"
                alt="dashboard contact icon"
              />
              <span>Contact</span>
            </li>
            <li className={styles.list_item}>
              <img
                src="./klashaAssets/Logoutlogout.svg"
                alt="dashboard logout icon"
              />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
