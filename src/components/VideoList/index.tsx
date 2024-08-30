import { CarryOutOutlined } from "@ant-design/icons";
import { Tree, type TreeDataNode } from "antd";
import { useVideo } from "../../providers/VideoProvider";
import { Modulo, ModulosData } from "../../types";

type VideoListProps = {
  modulos: ModulosData;
};

export default function VideoList({ modulos }: VideoListProps) {
  const { setSelectedVideo } = useVideo();
  const tData: TreeDataNode[] = modulos.modulos.map((mod: Modulo) => ({
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
    setSelectedVideo(selectedKeys.toString());
  };

  return (
    <div >
      <h3>Select a video:</h3>
      <Tree
        style={{minWidth: 300}}
        showLine
        showIcon
        defaultExpandedKeys={["0-1-0-0"]}
        onSelect={onSelect}
        treeData={tData}
      />
    </div>
  );
}
