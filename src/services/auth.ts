import { AxiosResponse } from "axios";
import http from "../http-common";

export async function checkAuth(): Promise<AxiosResponse<unknown, any>> {
    return await http.get('check-auth', { withCredentials: true });
}