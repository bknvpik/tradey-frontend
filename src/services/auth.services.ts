import { AxiosError, AxiosResponse } from "axios";
import { Type } from "typescript";
import http from "../http-common";
import { SignInDto } from "../pages/SignInPage/dtos/sign-in.dto";
import { SignUpDto } from "../pages/SignUpPage/dtos/sign-up.dto";

export async function checkAuth(endpoint: string, credentials: boolean): Promise<AxiosResponse<{username: string, sub: string}>> {
    return await http.get<{username: string, sub: string}>(endpoint, { withCredentials: credentials });
}
export async function signInUp(endpoint: string, data: SignInDto | SignUpDto, credentials: boolean): Promise<AxiosResponse<{message: string}>> {
    return await http.post<{message: string}>(endpoint, data, { withCredentials: credentials });
}