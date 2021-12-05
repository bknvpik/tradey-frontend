import { AxiosResponse } from "axios";
import http from "../http-common";

const _prefix = 'popularity';
const credentials = { withCredentials: true };

export async function getLikes(itemId: string): Promise<AxiosResponse<number>> {
    return await http.get(`${ _prefix }/item/${ itemId }/get-likes`, credentials);
}

export async function isLiked(itemId: string, userId: string): Promise<AxiosResponse<boolean>> {
    return await http.get(`${ _prefix }/item/${ itemId }/user/${ userId }/is-liked`, credentials);
}

export async function like(itemId: string, userId: string): Promise<AxiosResponse<void>> {
    return await http.post(`${ _prefix }/add-favorite`, { item: itemId, user: userId }, credentials);
}

export async function dislike(itemId: string, userId: string): Promise<AxiosResponse<void>> {
    return await http.delete(`${ _prefix }/delete-favorite`, { data: { item: itemId, user: userId }, withCredentials: true });
}

export async function getUserFavoriteItems(userId: string): Promise<AxiosResponse<any>> {
    return await http.get(`${ _prefix }/user/${ userId }/get-favorites`, credentials);
}