import { CarryOutOutlined } from "@ant-design/icons";
import { Tree, type TreeDataNode } from "antd";
import { ModulosData } from "../../types";

type VideoListProps = {
  modulos: ModulosData;
};

export default function VideoList({ modulos }: VideoListProps) {

  const tData: TreeDataNode[] = modulos.modulos.map((mod) => ({
    title: mod.name,
    key: mod.folder,
    icon: <CarryOutOutlined />,
    children: mod.videos.map((video) => ({
      title: video,
      key: `${mod.folder}/${video}`,
      icon: <CarryOutOutlined />,
    })),
  }));

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div>
      <Tree
        showLine={true}
        showIcon={false}
        defaultExpandedKeys={["0-1-0-0"]}
        onSelect={onSelect}
        treeData={tData}
      />
    </div>
  );
}
