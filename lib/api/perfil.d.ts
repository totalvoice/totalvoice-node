import { AxiosInstance } from 'axios'
import { ContaObject, WebhookObject } from './conta'
import { RelatorioResponse, Response } from '../totalvoice'

interface AtualizarConta {
  nome?: string
  login?: string
  senha?: string
  cpf_cnpj?: string
  telefone?: string
  preco_fixo?: string
  preco_cel?: string
  preco_ramal?: string
  email_financeiro?: string
  nome_fantasia?: string
}

interface RecargaObject {
  id: number
  credito: number
  data: string
  descricao: string
}

export = Perfil
declare function Perfil(httpClient: AxiosInstance): void
declare class Perfil {
  constructor(httpClient: AxiosInstance)
  consultaSaldo: () => Promise<Response<{ saldo: number }>>
  minhaConta: () => Promise<Response<ContaObject>>
  atualizaDadosConta: (data: AtualizarConta) => Promise<any>
  relatorioRecarga: () => Promise<RelatorioResponse<RecargaObject>>
  urlRecarga: (url_retorno: string) => Promise<Response<{ url: string }>>
  webhooks: () => Promise<Response<{ webhooks: WebhookObject[] }>>
  excluirWebhook: (nome: string) => Promise<Response<null>>
  salvaWebhook: (nome: string, url: string) => Promise<Response<null>>
}
