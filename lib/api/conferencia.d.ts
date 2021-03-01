import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface ChamadaConferenciaObject {
  id: number
  conferencia_id: number
  url_gravacao: string
  numero: number
  data_criacao: string
  cli: number
  duracao: string
  duracao_cobrada: string
  status: string
  preco: number
  data_inicio: string
}

interface ConferenciaObject {
  id: number
  data_criacao: string
  data_termino: string
  chamadas: ChamadaConferenciaObject[]
}

export = Conferencia
declare function Conferencia(httpClient: AxiosInstance): void
declare class Conferencia {
  constructor(httpClient: AxiosInstance)
  criar: () => Promise<Response<ConferenciaObject>>
  buscar: (id: string) => Promise<Response<ConferenciaObject>>
  addNumero: (id: string, numero: string, bina: string, gravar_audio: any) => Promise<any>
  excluir: (id: string) => Promise<any>
}
