import { AxiosRequestConfig } from 'axios';

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, body: any, config?: AxiosRequestConfig);
}
