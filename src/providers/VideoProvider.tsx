import { createContext, ReactNode, useContext, useState } from "react";
import { VideoController } from "../controller/VideoController";
import { ModulosData } from "../types";

type VideoContextType = {
  modulos: ModulosData;
  selectedVideo: string;
  setSelectedVideo: (video: string) => void;
  setModulos: (data: any) => void;
  getVideos: () => void;
};

const VideoContext = createContext<VideoContextType>({} as VideoContextType);

export function VideoProvider(props: { children: ReactNode }) {
  const [modulos, setModulos] = useState<ModulosData>({
    modulos: [],
  });
  const [selectedVideo, setSelectedVideo] = useState<string>("");

  async function getVideos() {
    const data = await VideoController.getClasses();
    setModulos({ modulos: data.modulos });
  }

  const providerValue: VideoContextType = {
    modulos,
    selectedVideo,
    setSelectedVideo,
    setModulos,
    getVideos,
  };
  return (
    <VideoContext.Provider value={providerValue}>
      {props.children}
    </VideoContext.Provider>
  );
}

export const useVideo = () => useContext(VideoContext);
