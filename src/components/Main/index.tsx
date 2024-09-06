import { Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useVideo } from "../../providers/VideoProvider";
import VideoPlayer from "../VideoPlayer";

export default function Main() {
  const { Title } = Typography;
  const { getVideos, selectedVideo } = useVideo();

  const [videoName, setVideoName] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const splitBarra = selectedVideo.split("/");
    if (splitBarra.length > 1) {
      setVideoName(`${splitBarra[1]}`);
    }
  }, [selectedVideo]);

  return (
    <Space direction="horizontal">
      <Space direction="vertical">
        {videoName && (
          <Title style={{ color: "white" }} level={3}>
            {videoName}
          </Title>
        )}
        {selectedVideo && <VideoPlayer videoUrl={selectedVideo} />}
      </Space>
    </Space>
  );
}
