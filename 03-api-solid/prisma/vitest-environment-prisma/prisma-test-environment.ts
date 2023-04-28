import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma', // Nome do ambiente
  async setup() {
    // Função responsável por executar antes de cada testes
    console.log('Setup')

    return {
      async teardown() {
        // Função responsável por executar após o final de cada teste
        console.log('Teardown')
      },
    }
  },
}
