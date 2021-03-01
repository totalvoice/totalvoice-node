import { AxiosInstance } from 'axios'
import { Response } from '../totalvoice'

interface CompostoObject {
  id: number
  numero_destino: string
  data_criacao: string
  data_inicio: string
  tipo: string
  status: string
  duracao_segundos: number
  duracao: number
  duracao_cobrada_segundos: number
  duracao_cobrada: number
  duracao_falada_segundos: number
  duracao_falada: number
  preco: number
  resposta_usuario: boolean
  resposta: string
  url_gravacao: string
  tags: string
  motivo_desconexao: string
}

export = Composto
declare function Composto(httpClient: AxiosInstance): void
declare class Composto {
  constructor(httpClient: AxiosInstance)
  enviar: (
    numero_destino: string,
    dados: any[],
    bina: string,
    tags: string,
    gravar_audio: boolean
  ) => Promise<Response<CompostoObject>>
  buscar: (id: string) => Promise<Response<CompostoObject>>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<CompostoObject>>
}
