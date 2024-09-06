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
      const name = splitBarra[1].replaceAll("_", " ");
      setVideoName(name);
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
