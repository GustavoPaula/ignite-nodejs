import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

// Exibir os logs no console quando o ambiente for dev
export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
