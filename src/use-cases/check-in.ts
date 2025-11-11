import { CheckIn } from '@prisma/client'
import { CheckIsRepository } from '@/repositories/check-is-repository'

interface CheckInUseCaseRequest {
  userId: string
  gymId: string
}

interface CheckInUseCaseResponse {
  checkIn: CheckIn
}

export class CheckInUseCase {
  constructor(private checkIsRepository: CheckIsRepository) {}

  async execute({
    userId,
    gymId,
  }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
    const checkIn = await this.checkIsRepository.create({
      gym_id: gymId,
      user_id: userId,
    })

    return {
      checkIn,
    }
  }
}
