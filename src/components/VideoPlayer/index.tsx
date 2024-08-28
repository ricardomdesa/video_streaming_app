import { Space } from "antd";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

type VideoProps = {
  videoUrl: string | undefined;
}
export default function VideoPlayer({videoUrl}: VideoProps) {
  const playerRef = useRef(null);
  const source = `http://localhost:8081/media/${videoUrl}/stream`
  return (
    <div>
      <Space direction="horizontal">
        <ReactHlsPlayer
          playerRef={playerRef}
          src={source}
          autoPlay={false}
          controls={true}
          width="70%"
          height="auto"
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
          }}
        />
      </Space>
    </div>
  );
}
