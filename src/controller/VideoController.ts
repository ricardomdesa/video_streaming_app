import { GetModulosDTO } from "../domain/dtos/modulos";
import { GetModulosResponse } from "../domain/requests";
import { api } from "../external_interface/api";

export class VideoController {
  public static async getClasses() {
    const request = new Request(
      `${process.env.REACT_APP_API_VIDEO_URL}/classes`,
      {
        method: "GET",
        headers: { "X-API-Key": `${process.env.REACT_APP_API_KEY}` },
      }
    );
    const response = await api(request);
    if (response.status === 200) {
      const resp = (await response.json()) as GetModulosResponse;
      return GetModulosDTO(resp);
    }
    return { modulos: [] };
  }
}
