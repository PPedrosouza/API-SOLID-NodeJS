import { CheckIn } from '@prisma/client'
import { CheckIsRepository } from '@/repositories/check-is-repository'

interface FetchUserCheckInHistoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchUserCheckInHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInHistoryUseCase {
  constructor(private checkIsRepository: CheckIsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInHistoryUseCaseRequest): Promise<FetchUserCheckInHistoryUseCaseResponse> {
    const checkIns = await this.checkIsRepository.findManyByUserId(userId, page)

    return {
      checkIns,
    }
  }
}
