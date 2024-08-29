import { ModulosData } from "../../types";
import { GetModulosResponse } from "../requests";

export function GetModulosDTO(data: GetModulosResponse): ModulosData{
    return {
        modulos: data.modulos.map((item) => ({
            name: item.name,
            folder: item.folder,
            videos: item.videos.map((video) => video),
        })),
    };
}