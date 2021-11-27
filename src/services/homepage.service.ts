import { AxiosResponse } from "axios";
import http from "../http-common";
import { GetItemInterface } from "../interfaces/get-items.interface";

export async function getMostPopular(endpoint: string, credentials: boolean): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(endpoint, { withCredentials: credentials });
}

