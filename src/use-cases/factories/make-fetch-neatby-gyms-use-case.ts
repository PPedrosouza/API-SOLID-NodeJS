import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { GetUserMetricsUseCase } from '../get-user-metrics'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new GetUserMetricsUseCase(gymsRepository)

  return useCase
}
