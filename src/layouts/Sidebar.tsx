import { TOOLS_CATEGORY, TOOLS_CATEGORY_ENUM } from '@/constants';
import * as ToolsModules from '@/tools';
import { cx } from '@emotion/css';
import { Link, useLocation, useParams } from 'umi';

import Styles from './index.css';

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
  const { tool } = useParams();
  const location = useLocation();
  return (
    <aside className={Styles['tools-sidebar']}>
      <ul className={Styles['tools-sidebar-menu']}>
        <Link to="/">
          <li
            className={cx(
              Styles['tools-sidebar-item'],
              location.pathname === '/'
                ? Styles['tools-sidebar-item-active']
                : '',
            )}
          >
            首页
          </li>
        </Link>
      </ul>
      {menus.map((menu) => {
        return (
          <div key={menu.key}>
            <div className={Styles['tools-sidebar-menu-title']}>
              {menu.label}
            </div>
            <ul className={Styles['tools-sidebar-menu']}>
              {menu.children.map((item) => {
                return (
                  <Link key={item.key} to={`/tools/${item.path}`}>
                    <li
                      className={cx(
                        Styles['tools-sidebar-item'],
                        tool === item.path
                          ? Styles['tools-sidebar-item-active']
                          : '',
                      )}
                    >
                      {item.icon} {item.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
