import { Link } from 'umi';
import { TOOLS_CATEGORY_ENUM, TOOLS_CATEGORY } from '@/constants';
import * as ToolsModules from '@/tools';

import Styles from './index.module.css';

const convertToolsModulesToMenuData = () => {
  const categoryKeys = Object.keys(TOOLS_CATEGORY_ENUM);
  const ToolsModulesKeys = Object.keys(ToolsModules);

  return categoryKeys.map((key) => {
    return {
      key,
      // @ts-ignore
      label: TOOLS_CATEGORY?.[key].title,
      children: ToolsModulesKeys.map((toolKey) => {
        return {
          key: toolKey, // @ts-ignore
          label: ToolsModules[toolKey].title, // @ts-ignore
          icon: ToolsModules[toolKey].icon, // @ts-ignore
          path: ToolsModules[toolKey].path,
        };
      }),
    };
  });
};

const Sidebar = () => {
  const menus = convertToolsModulesToMenuData();

  return (
    <div className={Styles.sidebar}>
      <ul className={Styles['sidebar-menu']}>
        <Link to="/">
          <li className={Styles['sidebar-item']}>首页</li>
        </Link>
      </ul>
      {menus.map((menu) => {
        return (
          <div key={menu.key}>
            <div className={Styles['sidebar-menu-title']}>{menu.label}</div>
            <ul className={Styles['sidebar-menu']}>
              {menu.children.map((item) => {
                return (
                  <Link key={item.key} to={`/tools/${item.path}`}>
                    <li className={Styles['sidebar-item']}>
                      {item.icon} {item.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
