import { AxiosInstance } from 'axios'

export = Bina
declare function Bina(httpClient: AxiosInstance): void
declare class Bina {
  constructor(httpClient: AxiosInstance)
  enviar: (telefone: string) => Promise<any>
  validar: (codigo: string, telefone: string) => Promise<any>
  excluir: (telefone: string) => Promise<any>
  relatorio: () => Promise<any>
}
