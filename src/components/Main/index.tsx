import { Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useVideo } from "../../providers/VideoProvider";
import { ModulosData } from "../../types";
import VideoList from "../VideoList";
import VideoPlayer from "../VideoPlayer";

export default function Main() {
  const { Title } = Typography;
  const [currentVideo, setCurrentVideo] = useState<string>();
  const { modulos, getVideos } = useVideo();
  const formatVideoUrl = (
    modulos: ModulosData,
    modIdx: number,
    videoIdx: number
  ) => {
    if (!modulos) return "";
    const modulo = modulos.modulos[modIdx];
    return `${modulo.folder}/${modulo.videos[videoIdx]}`;
  };

  useEffect(() => {
    // Fetch video number from server
    getVideos();

    setCurrentVideo(formatVideoUrl(modulos, 0, 5));
  }, []);

  return (
    <Space direction="horizontal">
      <VideoList modulos={modulos} />
      <Space direction="vertical">
        <Title style={{ color: "white" }}>Golang videos</Title>

        <VideoPlayer videoUrl={currentVideo} />
      </Space>
    </Space>
  );
}
