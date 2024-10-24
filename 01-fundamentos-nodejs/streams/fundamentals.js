// process -> Variável global do Node
// pipe -> Encaminhar
// stdin -> São os dados que o usuário digitar no terminal
// stout -> São os dados que está sendo enviado para o usuário
// Stream Readable -> Só é possível ler dados nela
// Stream Writable -> Só consegue escrever dados pra ela, processar os dados
// Stream Transform -> Obrigatoriamente precisa ler dados de um lugar e escrever dados pra outro lugar, é utilizado como um intermeio pra outras duas streams

import { Readable, Transform, Writable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() { // Método obrigatório para retornar os dados da stream
    const i = this.index++

    setTimeout(() => {
      if(i > 100) {
        this.push(null) // O método push do read serve para fornecer informação pra quem estiver consumindo ela
      }
      const buf = Buffer.from(String(i)) // Transformando os dados no tipo buffer(Buffer não aceita número, precisando converter para string)
      //porque não podemos retornar os dados no formato stream
  
      this.push(buf) // Enviando as informações
    }, 1000)
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10) // Convertendo o buffer em um número, multiplicando por 10 e depois transformando em uma string
    callback() // Encerrar o que vai executar
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())