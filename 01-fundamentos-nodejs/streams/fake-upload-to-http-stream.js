import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() { // Método obrigatório para retornar os dados da stream
    const i = this.index++

    setTimeout(() => {
      if(i > 5) {
        this.push(null) // O método push do read serve para fornecer informação pra quem estiver consumindo ela
      }
      const buf = Buffer.from(String(i)) // Transformando os dados no tipo buffer(Buffer não aceita número, precisando converter para string)
      //porque não podemos retornar os dados no formato stream
  
      this.push(buf) // Enviando as informações
    }, 1000)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
}).then(response => {
  response.text()
}).then(data => {
  console.log(data)
})