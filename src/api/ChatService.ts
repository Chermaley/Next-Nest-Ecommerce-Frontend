import { AxiosResponse } from "axios";
import { $api } from "./api";
import { Consultation, ConsultationType } from "./models";
import config from "../../config/config";

export default class ChatService {
  static async getClosedConsultations({accessToken}: {
    accessToken: string;
  }): Promise<AxiosResponse<Consultation[]>> {
    return $api.get<Consultation[]>(`/chat/closedConsultations/`, {
      headers: {
        Authorization: `${config.accessTokenPrefix} ${accessToken}`,
      },
    });
  }

  static async getOpenConsultation({accessToken}: {
    accessToken: string;
    type: ConsultationType
  }): Promise<AxiosResponse<Consultation[]>> {
    return $api.get<Consultation[]>(`/chat/openConsultation/`, {
      headers: {
        Authorization: `${config.accessTokenPrefix} ${accessToken}`,
      },
    });
  }
}
