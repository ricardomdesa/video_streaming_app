import { api } from "../external_interface/api";

type Video = {
  Name: string;
  ID: number;
};

type Classes = {
  classes: Video[];
};

export class VideoController {
  public static async getClasses() {
    const request = new Request("http://localhost:8080/classes", {
      method: "GET",
      headers: { "X-API-Key": "SeCrEt824" },
    });
    const response = await api(request);
    if (response.status === 200) {
      const data = await response.json();
      return Promise.resolve(data);
    }
  }
}
