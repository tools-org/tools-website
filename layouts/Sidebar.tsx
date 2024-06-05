import { HomeOutlined } from '@ant-design/icons';
import { cx } from '@emotion/css';
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import { Link, useLocation, useParams } from 'umi';
import Link from "@/components/Link"

// import ScrollBar from '@/components/ScrollBar';
import { TOOLS_CATEGORY } from '@/constants';
// import { useToolsModules } from '@/hooks';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import {moduleConfig} from "@/components/ToolModule/config"

const convertToolsModulesToMenuData = (modules:any) => {
  const categoryKeys = Object.keys(TOOLS_CATEGORY_ENUM);
const ToolsModules = Object.values(modules)
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
  // const ToolsModules = useToolsModules();
  const menus = convertToolsModulesToMenuData(moduleConfig);
  // const { tool } = useParams();
  // const location = useLocation();
  return (
    <aside className={'tools-sidebar'}>
      {/* @ts-ignore  */}
      {/* <Scrollbars
        style={{ height: '100%' }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      > */}
        <div className={'tools-sidebar-content'}>
          <ul className={'tools-sidebar-menu'}>
            <Link to="/">
              <li
                className={cx(
                  'tools-sidebar-item',
                  // location.pathname === '/' ? 'tools-sidebar-item-active' : '',
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
                              // tool === item.path
                              //   ? 'tools-sidebar-item-active'
                              //   : '',
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
        </div>
      {/* </Scrollbars> */}
    </aside>
  );
};

export default Sidebar;
