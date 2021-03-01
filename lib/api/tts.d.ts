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
declare function Tts(httpClient: AxiosInstance): void
declare class Tts {
  constructor(httpClient: AxiosInstance)
  enviar: (numero_destino: string, mensagem: string, opcoes: EnviarTTS) => Promise<{ id: string }>
  buscar: (id: string) => Promise<Response<TTSObject>>
  relatorio: (data_inicio: string, data_fim: string) => Promise<RelatorioResponse<TTSObject>>
}
