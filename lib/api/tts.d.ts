import { AxiosInstance } from 'axios'
import { RelatorioResponse, Response } from '../totalvoice'

interface TTSObject {
  id: number
  numero_destino: string
  data_criacao: string
  data_inicio: string
  tipo: string
  status: string
  duracao_segundos: number
  duracao: string
  duracao_cobrada_segundos: number
  duracao_cobrada: string
  duracao_falada_segundos: number
  duracao_falada: string
  preco: number
  mensagem: string
  resposta_usuario: boolean
  resposta: string
  motivo_desconexao: string
  url_gravacao: string
}

interface EnviarTTS {
  resposta_usuario?: boolean
  tipo_voz?: string
  bina?: string
  gravar_audio?: boolean
  detecta_caixa?: boolean
  bina_inteligente?: boolean
}

export = Tts
/**
 * Módulo TTS
 * @param {object} httpClient
 */
declare function Tts(httpClient: AxiosInstance): void
declare class Tts {
  /**
   * Módulo TTS
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Envia um TTS (text-to-speach) para um número destino
   * @param {string} numero_destino
   * @param {string} mensagem
   * @param {object} opcoes
   * @return {Promise}
   */
  enviar: (numero_destino: string, mensagem: string, opcoes: EnviarTTS) => Promise<{ id: string }>
  /**
   * Busca um tts pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<Response<TTSObject>>
  /**
   * Relatório de mensagens de Tts
   * @param {string} data_inicio
   * @param {string} data_fim
   * @return {Promise}
   */
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<TTSObject>>
}
