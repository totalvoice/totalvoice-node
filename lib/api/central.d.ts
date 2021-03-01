import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface CentralObject {
  id: number
  ramal: number
  login: string
  bina: string
  webphone_key: string
  ligacao_externa: boolean
  ligacao_celular: boolean
  gravar_audio: boolean
  bina_inteligente: boolean
}

interface URAData {
  timeout?: number
  timeout_fila?: number
  menu: string
  opcao: string
  acao: string
  coletar_dtmf?: string
  queue_fail_timeout?: string
  acao_dados: Partial<{
    url_audio: string
    mensagem: string
    numero_telefone: string
    fila_id: string
    url: string
    menu: string
    dinamico: string
    stt: string
    fim: any
  }>
}

interface URAObject {
  id: number
  nome: string
  dados?: Partial<URAData>
}

export = Central
declare function Central(httpClient: AxiosInstance): void
declare class Central {
  constructor(httpClient: AxiosInstance)
  criarRamal: (data: object) => Promise<Response<CentralObject>>
  excluirRamal: (id: string) => Promise<Response<null>>
  buscaRamal: (id: string) => Promise<Response<CentralObject>>
  atualizarRamal: (id: string, data: Partial<CentralObject>) => Promise<Response<CentralObject>>
  relatorio: () => Promise<Response<any>>
  relatorioPausas: (id: string) => Promise<Response<any>>
  atualizarRamalFila: (id: string, data: any) => Promise<Response<any>>
  webphone: (data: any[]) => Promise<any>
  criarUra: (nome: string, dados: URAData[]) => Promise<Response<{ id: string }>>
  excluirUra: (id: string) => Promise<Response<null>>
  buscaUra: (id: string) => Promise<Response<URAObject>>
  atualizarUra: (id: string, nome: string, dados: URAData[]) => Promise<Response<URAObject>>
  relatorioUra: () => Promise<RelatorioResponse<URAObject>>
}
