const Client = require('./client');
const Chamada = require('./api/chamada');
const Audio = require('./api/audio');
const Bina = require('./api/bina');
const Perfil = require('./api/perfil');
const Conta = require('./api/conta');
const Composto = require('./api/composto');
const Conferencia = require('./api/conferencia');
const SMS = require('./api/sms');
const TTS = require('./api/tts');
const Central = require('./api/central');
const DID = require('./api/did');
const Status = require('./api/status');
const Fila = require('./api/fila');
const ValidaNumero = require('./api/validanumero');
const Verificacao = require('./api/verificacao');
/**
 * Módulo TotalVoice
 * @param {string} accessToken 
 * @param {string} baseUrl 
 * @param {object} options
 */
function Totalvoice(accessToken, baseUrl, options) {
    options = options || {};
    let env = options.env || process.env;

    let opts = Object.assign({}, options);
    let token = accessToken || env.TOTALVOICE_ACCESS_TOKEN;
    if (!token) {
        throw new Error('Access Token inválido!');
    }

    opts['headers'] = {
        'Access-Token': token,
        'Content-Type': 'application/json'
    };

    this.httpClient = opts.httpClient || new Client(baseUrl, opts);

    this._chamada = undefined;
    this._audio = undefined;
    this._bina = undefined;
    this._perfil = undefined;
    this._conta = undefined;
    this._composto = undefined;
    this._conferencia = undefined;
    this._sms = undefined;
    this._tts = undefined;
    this._central = undefined;
    this._did = undefined;
    this._status = undefined;
    this._fila = undefined;
    this._validanumero = undefined;
    this._verificacao = undefined;
}

Object.defineProperty(Totalvoice.prototype,
    'chamada', {
    get: function() {
        this._chamada = this._chamada || new Chamada(this.httpClient);
        return this._chamada;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'audio', {
    get: function() {
        this._audio = this._audio || new Audio(this.httpClient);
        return this._audio;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'bina', {
    get: function() {
        this._bina = this._bina || new Bina(this.httpClient);
        return this._bina;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'perfil', {
    get: function() {
        this._perfil = this._perfil || new Perfil(this.httpClient);
        return this._perfil;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'conta', {
    get: function() {
        this._conta = this._conta || new Conta(this.httpClient);
        return this._conta;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'composto', {
    get: function() {
        this._composto = this._composto || new Composto(this.httpClient);
        return this._composto;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'conferencia', {
    get: function() {
        this._conferencia = this._conferencia || new Conferencia(this.httpClient);
        return this._conferencia;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'sms', {
    get: function() {
        this._sms = this._sms || new SMS(this.httpClient);
        return this._sms;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'tts', {
    get: function() {
        this._tts = this._tts || new TTS(this.httpClient);
        return this._tts;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'central', {
    get: function() {
        this._central = this._central || new Central(this.httpClient);
        return this._central;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'did', {
    get: function() {
        this._did = this._did || new DID(this.httpClient);
        return this._did;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'status', {
    get: function() {
        this._status = this._status || new Status(this.httpClient);
        return this._status;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'fila', {
    get: function() {
        this._fila = this._fila || new Fila(this.httpClient);
        return this._fila;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'validanumero', {
    get: function() {
        this._validanumero = this._validanumero || new ValidaNumero(this.httpClient);
        return this._validanumero;
    }
});

Object.defineProperty(Totalvoice.prototype,
    'verificacao', {
    get: function() {
        this._verificacao = this._verificacao || new Verificacao(this.httpClient);
        return this._verificacao;
    }
});

module.exports = Totalvoice;
