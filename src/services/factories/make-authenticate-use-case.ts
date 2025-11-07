import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateService } from '../authenticate-service'

export function makeAuthenticateUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  const authenticateUseCase = new AuthenticateService(usersRepository)

  return authenticateUseCase
}
