import Styles from "./index.module.css";


const Sidebar = (props: any) => {
  // console.log("props", props);

  return (
    <div className={Styles.sidebar}>
      <ul className={Styles["sidebar-menu"]}>
        <li className={Styles["sidebar-item"]}>首页</li>
      </ul>
    </div>
  );
};

export default Sidebar;
