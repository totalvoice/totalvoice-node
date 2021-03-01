import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface ValidaNumeroObject {
  id: number
  numero_destino: string
  data_criacao: string
  preco: number
  valido: boolean
  finalizado: boolean
}

export = ValidaNumero
declare function ValidaNumero(httpClient: AxiosInstance): void
declare class ValidaNumero {
  constructor(httpClient: AxiosInstance)
  enviar: (
    numero_destino: string,
    gravar_audio?: boolean,
    bina?: string,
    max_tentativas?: number
  ) => Promise<Response<{ id: string }>>
  buscar: (id: string) => Promise<Response<ValidaNumeroObject>>
  relatorio: (
    data_inicio: string,
    data_fim: string
  ) => Promise<RelatorioResponse<ValidaNumeroObject>>
}
