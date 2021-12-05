import { AxiosResponse } from "axios";
import http from "../http-common";
import { GetItemInterface } from "../interfaces/get-items.interface";

const _prefix = 'items';
const credentials = { withCredentials: true };

export async function getItems(url: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(url, credentials);
}

export async function getUserItems(userId: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(`${ _prefix }/user/${ userId }`, credentials);
}