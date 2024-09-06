import { Space, Typography } from "antd";
import { useEffect } from "react";
import { useVideo } from "../../providers/VideoProvider";
import MenuComp from "../MenuComp";
import VideoPlayer from "../VideoPlayer";

export default function Main() {
  const { Title } = Typography;
  const { getVideos, selectedVideo } = useVideo();

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Space direction="horizontal">
      <Space direction="vertical">
        <MenuComp />
      </Space>
      <Space direction="vertical">
        <Title style={{ color: "white" }} level={1}>
          Golang videos
        </Title>
        <Title style={{ color: "white" }} level={3}>
          {selectedVideo}
        </Title>
        {selectedVideo && <VideoPlayer videoUrl={selectedVideo} />}
      </Space>
    </Space>
  );
}
