import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetUserMatricsUseCase } from '../get-user-metrics'

export function makeGetUserMetricsUseCase() {
  const checkInRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMatricsUseCase(checkInRepository)

  return useCase
}
