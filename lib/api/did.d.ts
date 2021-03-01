import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface DidObject {
  id: number
  cidade: string
  estado: string
  numero: string
}

interface RelatorioDid extends Response<RelatorioDid> {
  total: number
  posicao: number
  limite: string
  relatorio: DidObject[]
}

export = Did
declare function Did(httpClient: AxiosInstance): void
declare class Did {
  constructor(httpClient: AxiosInstance)
  listar: () => Promise<Response<{ dids: DidObject[] }>>
  excluir: (id: string) => Promise<Response<null>>
  atualizar: (id: string, ramal_id?: string, ura_id?: string) => Promise<Response<null>>
  listaEstoque: () => Promise<any>
  adquirir: (id: string) => Promise<any>
  buscaChamadaRecebida: (id: string) => Promise<any>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioDid>
}
