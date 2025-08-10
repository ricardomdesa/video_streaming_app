import { Space } from "antd";
import Hls from "hls.js";
import { useEffect, useRef } from "react";
import KeyCloakService from "../../helpers/KeycloakService";

type VideoProps = {
  videoUrl: string | undefined;
};
export default function VideoPlayer({ videoUrl }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const source = `${process.env.REACT_APP_API_VIDEO_URL}/media/${videoUrl}/stream`;

  useEffect(() => {
    if (videoRef.current && Hls.isSupported()) {
      const hls = new Hls({
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        lowLatencyMode: true,
        xhrSetup: (xhr: any) => {
          xhr.setRequestHeader("Authorization", `Bearer ${KeyCloakService.GetAccessToken()}`);
        },
      });
      hls.loadSource(source);
      hls.attachMedia(videoRef.current);
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current) {
      // fallback for browsers with native HLS support
      videoRef.current.src = source;
    }
  }, [source]);

  return (
    <div>
      <Space direction="horizontal">
        <video ref={videoRef} controls width="90%" style={{ height: "auto" }} />
      </Space>
    </div>
  );
}
