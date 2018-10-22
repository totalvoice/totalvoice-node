# totalvoice-node
Cliente em NodeJS para API da Totalvoice

[![Build Status](https://travis-ci.org/totalvoice/totalvoice-node.svg?branch=master)](http://travis-ci.org/#!/totalvoice/totalvoice-node)

> ### Funcionalidades

- [X] Gerenciamento das chamadas
- [X] Consulta e envio de SMS
- [X] Consulta e envio de TTS
- [X] Consulta e envio de Audio
- [X] Gerenciamento da Conta
- [X] Gerenciamento da Central

> ### Requisitos

- NodeJS 6 ou superior

> ### Instalação

```bash
npm install --save totalvoice-node
```

ou

```bash
yarn add totalvoice-node
```

> ### Utilização

Para utilizar esta biblioteca, primeiramente você deverá realizar um cadastro no site da [Total Voice](http://www.totalvoice.com.br).
Após a criação do cadastro será disponibilizado um AccessToken para acesso a API.

Com o AccessToken em mãos será possível realizar as consultas/cadastros conforme documentação da [API](https://api.totalvoice.com.br/doc/#/)

Os métodos da API que poderão ser invocados:
- audio
- central
- chamada
- composto
- conferencia
- conta
- perfil
- sms
- tts

A seguir exemplos de como pode ser utilizada esta biblioteca.

> ##### Realiza uma chamada telefônica entre dois números: A e B

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.chamada.ligar("4832830151", "4811111111")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Consulta de chamada pelo ID

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.chamada.buscar(123) // ID da chamada
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```


> ##### Encerra uma chamada ativa

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.chamada.encerrar(123) // ID da chamada
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Envio de SMS

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.sms.enviar("4811111111", "Mensagem SMS")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Envio de TTS

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

var opcoes = {velocidade: 2, tipo_voz: "br-Vitoria"};
client.tts.enviar("4811111111", "Mensagem TTS", opcoes);
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Envio de Audio

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.audio.enviar("4811111111", "https://foo.bar/audio.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Configurações de central telefonica

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.central.buscaRamal(123546) // ID do Ramal
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Gerenciamento dos dados da Conta

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.conta.buscar(123546) // ID da Conta
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Consulta saldo da Minha Conta

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token");

client.perfil.consultaSaldo()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Caso você necessite utilizar seu próprio endereço configurado na Total Voice

```javascript

const totalvoice = require('totalvoice-node');
const client = new totalvoice("access-token", "https://seu-dominio.com.br");
...

```

> ##### Caso você necessite utilizar com Proxy

```javascript

const totalvoice = require('totalvoice-node');
let options = {
    proxy: {
        host: 'proxy.com',
        port: 8888,
        auth: {
            username: 'XXXX',
            password: 'XXXX'
        }
    }
};
const client = new totalvoice("access-token", "https://seu-dominio.com.br", options);
...

```

Mais informações sobre os métodos disponíveis podem ser encontrados na documentação da [API](https://api.totalvoice.com.br/doc/#/)

> ### Contribua!

Quer contribuir? [clique aqui](https://github.com/totalvoice/totalvoice-node/blob/master/CONTRIBUTING.md)

> ### Licença

Esta biblioteca segue os termos de uso da [MIT](https://github.com/totalvoice/totalvoice-node/blob/master/LICENSE)
