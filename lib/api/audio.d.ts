import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface AudioObject {
  id: string
  numero_destino: string
  data_criacao: string
  tipo: string
  status: string
  duracao_segundos: string
  duracao: string
  duracao_cobrada_segundos: string
  duracao_cobrada: string
  duracao_falada_segundos: string
  duracao_falada: string
  preco: number
  url_audio: string
  resposta_usuario: boolean
  resposta: string
  motivo_desconexao: string
  url_gravacao: string
}
export = Audio
declare function Audio(httpClient: AxiosInstance): void
declare class Audio {
  constructor(httpClient: AxiosInstance)
  enviar: (
    numero_destino: string,
    url_audio: string,
    resposta_usuario: any,
    bina: string,
    gravar_audio: boolean
  ) => Promise<Response<{ id: string }>>
  buscar: (id: string) => Promise<Response<AudioObject>>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<AudioObject>>
}
