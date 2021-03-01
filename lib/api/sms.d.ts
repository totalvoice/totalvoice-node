import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface SMSObject {
  id: number
  numero_destino: string
  data_criacao: string
  mensagem: string
  preco: number
  status: 'enviada' | 'erro' | 'entregue' | 'aguardando'
  data_status: string
  resposta_usuario: boolean
  tags: string
  respostas: {
    id: number
    sms_id: number
    resposta: string
    data_resposta: string
  }
}

export = Sms
declare function Sms(httpClient: AxiosInstance): void
declare class Sms {
  constructor(httpClient: AxiosInstance)
  enviar: (
    numero_destino: string,
    mensagem: string,
    resposta_usuario?: boolean,
    multi_sms?: boolean,
    data_criacao?: string
  ) => Promise<Response<{ id: number }>>
  buscar: (id: string) => Promise<Response<SMSObject>>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<SMSObject>>
}
