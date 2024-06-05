import { HomeOutlined } from '@ant-design/icons';
import { cx } from '@emotion/css';
import { Link, useLocation, useParams } from 'umi';

import { TOOLS_CATEGORY } from '@/constants';
import { useToolsModules } from '@/hooks';
import { TOOLS_CATEGORY_ENUM } from '@/types';

const convertToolsModulesToMenuData = () => {
  const categoryKeys = Object.keys(TOOLS_CATEGORY_ENUM);
  const ToolsModules = useToolsModules();

  console.log('TOOLS_CATEGORY', TOOLS_CATEGORY);

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
    // <Scrollbar style={{ width: 232 }}>
    <aside className={'tools-sidebar'}>
      <ul className={'tools-sidebar-menu'}>
        <Link to="/">
          <li
            className={cx(
              'tools-sidebar-item',
              location.pathname === '/' ? 'tools-sidebar-item-active' : '',
            )}
          >
            <HomeOutlined className="fett-icon" /> 首页
          </li>
        </Link>
      </ul>
      {menus.map((menu) => {
        if (menu.children.length) {
          return (
            <div key={menu.key}>
              <div className={'tools-sidebar-menu-title'}>{menu.label}</div>
              <ul className={'tools-sidebar-menu'}>
                {menu.children.map((item) => {
                  return (
                    <Link key={item.key} to={`/tools/${item.path}`}>
                      <li
                        className={cx(
                          'tools-sidebar-item',
                          tool === item.path ? 'tools-sidebar-item-active' : '',
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
        }
        return null;
      })}
    </aside>
    // </Scrollbar>
  );
};

export default Sidebar;
