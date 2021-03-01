import { AxiosInstance } from 'axios'

export = Status
declare function Status(httpClient: AxiosInstance): void
declare class Status {
  constructor(httpClient: AxiosInstance)
  verificar: () => Promise<any>
  consultar: (nome: string) => Promise<any>
}
