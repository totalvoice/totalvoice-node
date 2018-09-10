var Client = require('./client');
var Chamada = require('./api/chamada');
var Audio = require('./api/audio');
var Bina = require('./api/bina');
var Perfil = require('./api/perfil');
var Conta = require('./api/conta');
var Composto = require('./api/composto');
var Conferencia = require('./api/conferencia');
var SMS = require('./api/sms');
var TTS = require('./api/tts');
var Central = require('./api/central');
var DID = require('./api/did');
var Fila = require('./api/fila');

/**
 * Módulo TotalVoice
 * @param {string} accessToken 
 * @param {string} baseUrl 
 * @param {object} opts 
 */
function Totalvoice(accessToken, baseUrl, opts) {
    opts = opts || {};
    var env = opts.env || process.env;
  
    const token = accessToken || env.TOTALVOICE_ACCESS_TOKEN;
    if (!token) {
        throw new Error('Access Token inválido!');
    }

    this.httpClient = opts.httpClient || new Client(token, baseUrl);

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
    this._fila = undefined;
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
    'fila', {
    get: function() {
        this._fila = this._fila || new Fila(this.httpClient);
        return this._fila;
    }
});

module.exports = Totalvoice;