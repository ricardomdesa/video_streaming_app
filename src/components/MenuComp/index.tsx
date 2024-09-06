import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useVideo } from "../../providers/VideoProvider";

type MenuItem = Required<MenuProps>["items"][number];

const MenuComp: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const { modulos, setSelectedVideo } = useVideo();

  useEffect(() => {
    const menuItem: MenuItem[] = modulos.modulos.map((item) => ({
      key: item.folder,
      label: item.name.replaceAll("_", " "),
      icon: <h3>{getModNumber(item.name)}</h3>,
      children: item.videos.map((video) => ({
        key: `${item.folder}/${video}`,
        label: video.replaceAll("_", " "),
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
      inlineCollapsed={false}
      items={items}
      onClick={onSelect}
    />
  );
};

export default MenuComp;
