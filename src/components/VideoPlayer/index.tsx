import { Space } from "antd";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

type VideoProps = {
  videoUrl: string | undefined;
};
export default function VideoPlayer({ videoUrl }: VideoProps) {
  const playerRef = useRef(null);
  const source = `${process.env.REACT_APP_API_VIDEO_URL}/media/${videoUrl}/stream`;
  return (
    <div>
      <Space direction="horizontal">
        <ReactHlsPlayer
          playerRef={playerRef}
          src={source}
          autoPlay={false}
          controls={true}
          width="90%"
          height="auto"
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
            xhrSetup: (xhr: any) => {
              xhr.setRequestHeader(
                "X-API-Key",
                `${process.env.REACT_APP_API_KEY}`
              );
            },
          }}
        />
      </Space>
    </div>
  );
}
