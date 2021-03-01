import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

interface ErrorResult {
  message: string
  code: number
  data: any
}

export function defaultResolve(data: AxiosResponse): any;
export function defaultReject(error: AxiosError): ErrorResult;
