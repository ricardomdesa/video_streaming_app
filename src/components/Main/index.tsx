import { Space, Typography } from "antd";
import { useEffect } from "react";
import { VideoController } from "../../controller/VideoController";
import VideoPlayer from "../VideoPlayer";

export default function Main() {
  const { Title } = Typography;

  useEffect(() => {
    // Fetch video number from server
    VideoController.getClasses().then((data) => {});
  }, []);

  return (
    <Space direction="vertical">
      <Title style={{ color: "white" }}>Go Expert</Title>
      <VideoPlayer video={51} />
    </Space>
  );
}
