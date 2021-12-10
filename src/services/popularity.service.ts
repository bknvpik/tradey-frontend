import { AxiosResponse } from "axios";
import { PopularityDto } from "../components/Item/Item";
import http from "../http-common";
import { GetItemInterface } from "../interfaces/get-items.interface";

const _prefix = 'popularity';
const credentials = { withCredentials: true };

export async function getPopularity(itemId: string): Promise<AxiosResponse<PopularityDto>> {
    return await http.get(`${ _prefix }/items/${ itemId }/get-popularity`, credentials);
}

export async function isLiked(itemId: string, userId: string): Promise<AxiosResponse<boolean>> {
    return await http.get(`${ _prefix }/items/${ itemId }/users/${ userId }/is-liked`, credentials);
}

export async function like(itemId: string, userId: string): Promise<AxiosResponse<void>> {
    return await http.post(`${ _prefix }/items/add-favorite`, { item: itemId, user: userId }, credentials);
}

export async function dislike(itemId: string, userId: string): Promise<AxiosResponse<void>> {
    return await http.delete(`${ _prefix }/items/delete-favorite`, { data: { item: itemId, user: userId }, withCredentials: true });
}

export async function getUserFavoriteItems(userId: string): Promise<AxiosResponse<GetItemInterface>> {
    return await http.get(`${ _prefix }/users/${ userId }/get-favorites`, credentials);
}
