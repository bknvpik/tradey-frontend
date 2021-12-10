import { Axios, AxiosResponse } from "axios";
import http from "../http-common";
import { GetItemInterface } from "../interfaces/get-items.interface";

const _prefix = 'items';
const credentials = { withCredentials: true };

export async function getItem(itemId: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(`${ _prefix }/${ itemId }`, credentials);
}

export async function getItems(url: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(url, credentials);
}

export async function getUserItems(userId: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(`${ _prefix }/users/${ userId }`, credentials);
}

export async function checkOwner(itemId: string, userId: string): Promise<AxiosResponse<boolean>> {
    return await http.get(`${ _prefix }/${ itemId }/users/${ userId }/check-owner`, credentials);
}