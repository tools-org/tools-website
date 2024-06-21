"use client";
import { useEffect, useState, useMemo } from "react";
import { HomeOutlined } from "@ant-design/icons";
import cx from "clsx";
import { Scrollbars } from "react-custom-scrollbars-2";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { TOOLS_CATEGORY } from "@/constants";
import { TOOLS_CATEGORY_ENUM } from "@/types";
import { moduleConfig } from "@/components/ToolModule/config";

const convertToolsModulesToMenuData = (modules: any) => {
  const categoryKeys = Object.keys(TOOLS_CATEGORY_ENUM);
  const ToolsModules = Object.values(modules);
  return categoryKeys.map((key) => {
    return {
      key,
      // @ts-ignore
      label: TOOLS_CATEGORY?.[key].title,
      children: ToolsModules.filter(
        (module: any) => module.category === key
      ).map((module: any) => {
        return {
          key: module.key,
          label: module.title,
          icon: module.icon,
          path: module.path,
        };
      }),
    };
  });
};

const Sidebar = () => {
  const [isClient, setClient] = useState(false);
  const pathname = usePathname();
  const menus = convertToolsModulesToMenuData(moduleConfig);

  useEffect(() => {
    setClient(true);
  }, []);

  const renderMenus = useMemo(
    () => (
      <div className={"tools-sidebar-content"}>
        <ul className={"tools-sidebar-menu"}>
          <Link href="/">
            <li
              className={cx(
                "tools-sidebar-item",
                pathname === "/" ? "tools-sidebar-item-active" : ""
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
                <div className={"tools-sidebar-menu-title"}>{menu.label}</div>
                <ul className={"tools-sidebar-menu"}>
                  {menu.children.map((item) => {
                    const path = `/tools/${item.path}`;
                    return (
                      <Link key={item.key} href={path}>
                        <li
                          className={cx(
                            "tools-sidebar-item",
                            pathname.endsWith(item.path)
                              ? "tools-sidebar-item-active"
                              : ""
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
    ),

    [pathname, menus]
  );

  return (
    <aside className={"tools-sidebar"}>
      {/* @ts-ignore  */}
      {isClient ? (
        <Scrollbars
          style={{ height: "100%" }}
          autoHide
          autoHideTimeout={500}
          autoHideDuration={300}
        >
          {renderMenus}
        </Scrollbars>
      ) : (
        renderMenus
      )}
    </aside>
  );
};

export default Sidebar;
