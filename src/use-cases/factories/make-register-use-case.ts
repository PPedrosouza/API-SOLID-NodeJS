import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { RegisterService } from '../register'

export function makeRegisterUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  const registerUseCase = new RegisterService(usersRepository)

  return registerUseCase
}
