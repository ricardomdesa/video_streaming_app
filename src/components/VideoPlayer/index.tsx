import { Space } from "antd";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

type VideoProps = {
  video: number | undefined;
}
export default function VideoPlayer({video}: VideoProps) {
  const playerRef = useRef(null);
  console.log(video);
  const source = `http://localhost:8080/media/${video}/stream`
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
