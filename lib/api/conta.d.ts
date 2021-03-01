import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

export interface WebhookObject {
  webhook: string
  url: string
}

export interface ContaObject {
  id: number
  nome: string
  login: string
  senha: string
  cpf_cnpj?: string
  saldo?: number
  telefone?: string
  access_token?: string
  preco_fixo?: string
  preco_cel?: string
  preco_ramal?: string
  email_financeiro?: string
  nome_fantasia?: string
  conta_ativa?: number
  valor_aviso_saldo_baixo?: string
  metodo_pagamento?: string
  fatura_atual?: number
}

export = Conta
declare function Conta(httpClient: AxiosInstance): void
declare class Conta {
  constructor(httpClient: AxiosInstance)
  criar: (data: ContaObject) => Promise<Response<ContaObject>>
  buscar: (id: string) => Promise<Response<ContaObject>>
  excluir: (id: string) => Promise<Response<null>>
  atualizar: (id: string, data: Partial<ContaObject>) => Promise<RelatorioResponse<ContaObject>>
  relatorio: () => Promise<Response<ContaObject>>
  recargaBonus: (id: string, data: { valor: string }) => Promise<Response<null>>
  webhooksDefault: () => Promise<Response<{ webhooks: WebhookObject[] }>>
  excluirWebhookDefault: (nome: string) => Promise<Response<null>>
  salvaWebhookDefault: (nome: string, url: string) => Promise<Response<null>>
}
