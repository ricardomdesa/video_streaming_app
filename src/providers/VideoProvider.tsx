import { createContext, ReactNode, useContext, useState } from "react";
import { ModulosData } from "../types";
import { VideoController } from "../controller/VideoController";

type VideoContextType = {
  modulos: ModulosData;
  setModulos: (data: any) => void;
  getVideos: () => void;
};

const VideoContext = createContext<VideoContextType>({} as VideoContextType);

export function VideoProvider(props: { children: ReactNode }) {
  const [modulos, setModulos] = useState<ModulosData>({
    modulos: [],
  });

  async function getVideos() {
    const data = await VideoController.getClasses();
    setModulos({ modulos: data.modulos });
  }
  
  const providerValue:VideoContextType = {
    modulos,
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
