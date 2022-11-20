import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await axios.get<T>(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong - please check logs');
    }
  }
  async post<T>(url: string, body: any, config?: AxiosRequestConfig<any>) {
    try {
      const { data } = await axios.post<T>(url, body, config);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong - please check logs');
    }
  }
}
