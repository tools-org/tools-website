import { cx } from '@emotion/css';
import { Link, useLocation, useParams } from 'umi';

import { TOOLS_CATEGORY } from '@/constants';
import { useToolsModules } from '@/hooks';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import Styles from './index.css';

const convertToolsModulesToMenuData = () => {
  const categoryKeys = Object.keys(TOOLS_CATEGORY_ENUM);
  const ToolsModules = useToolsModules();

  return categoryKeys.map((key) => {
    return {
      key,
      // @ts-ignore
      label: TOOLS_CATEGORY?.[key].title,
      children: ToolsModules.filter((module) => module.category === key).map(
        (module) => {
          return {
            key: module.key,
            label: module.title,
            icon: module.icon,
            path: module.path,
          };
        },
      ),
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
