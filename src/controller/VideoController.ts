import { GetModulosDTO } from "../domain/dtos/modulos";
import { GetModulosResponse } from "../domain/requests";
import { api } from "../external_interface/api";

export class VideoController {
  public static async getClasses() {
    const request = new Request("http://localhost:8081/classes", {
      method: "GET",
      headers: { "X-API-Key": "SeCrEt824" },
    });
    const response = await api(request);
    if (response.status === 200) {
      const resp = (await response.json()) as GetModulosResponse;
      return GetModulosDTO(resp);
    }
    throw new Error("Unable to fetch videos");
  }
}
