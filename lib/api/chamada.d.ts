import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface DestinoObject {
  data_inicio: string
  numero: string
  tipo: 'ramal' | 'movel' | 'fixo'
  status: 'atendida' | 'sem resposta' | 'ocupado' | 'congestionado' | 'falha' | 'cancelada' | string
  duracao_segundos: number
  duracao: number
  duracao_cobrada_segundos: number
  duracao_cobrada: number
  duracao_falada_segundos: number
  duracao_falada: number
  preco: number
  motivo_desconexao: string
}

export interface ChamadaObject {
  id: string
  data_criacao: string
  ativa: boolean
  url_gravacao: string
  cliente_id: string
  conta_id: string
  ramal_id_origem: string
  tags: string
  detecta_caixa: string
  status_geral: string
  origem: DestinoObject
  destino: DestinoObject
}

export = Chamada

declare function Chamada(httpClient: AxiosInstance): void
declare class Chamada {
  constructor(httpClient: AxiosInstance)
  ligar: (
    numero_origem: string,
    numero_destino: string,
    opcoes?: {
      data_criacao?: string
      gravar_audio?: boolean
      bina_origem?: string
      bina_destino?: string
      tags?: any
    }
  ) => Promise<Response<{ id: string }>>
  encerrar: (id: string) => Promise<Response<null>>
  buscar: (id: string) => Promise<Response<ChamadaObject>>
  downloadGravacao: (id: string) => Promise<any>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<ChamadaObject>>
  escutar: (id: string, numero: string, modo: any) => Promise<Response<any>>
  transferir: (id: string, numero: string, perna: string) => Promise<Response<any>>
  avaliar: (id: string, nota: string, comentario: string) => Promise<Response<any>>
}
