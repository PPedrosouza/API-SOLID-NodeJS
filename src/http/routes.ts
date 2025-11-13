import { FastifyInstance } from 'fastify'
import { register } from './controllers/register-controller'
import { authenticate } from './controllers/authenticate-contoller'
import { profile } from './controllers/profile-controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** User Authenticated */
  app.get('/me', profile)
}
