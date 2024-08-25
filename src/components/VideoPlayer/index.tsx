import { Space } from "antd";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

export default function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <Space>
      <ReactHlsPlayer
        playerRef={playerRef}
        src="http://localhost:8000/media/51/stream"
        autoPlay={true}
        controls={true}
        width="100%"
        height="auto"
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
      />
    </Space>
  );
}
