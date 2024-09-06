import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useVideo } from "../../providers/VideoProvider";

type MenuItem = Required<MenuProps>["items"][number];

const MenuComp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);
  const { modulos, setSelectedVideo } = useVideo();

  useEffect(() => {
    const menuItem: MenuItem[] = modulos.modulos.map((item) => ({
      key: item.folder,
      label: item.name,
      icon: <h3>{getModNumber(item.name)}</h3>,
      children: item.videos.map((video) => ({
        key: `${item.folder}/${video}`,
        label: video,
      })),
    }));
    setItems(menuItem);
  }, [modulos]);

  const getModNumber = (name: string) => name.split("-")[0];

  const onSelect = (item: any) => {
    setSelectedVideo(item.key.toString());
  };

  return (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={onSelect}
      />
  );
};

export default MenuComp;
