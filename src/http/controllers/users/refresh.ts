import { FastifyRequest, FastifyReply } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({ onlyCookie: true })

  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub,
      },
    },
  )

  const refreshToken = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub,
        expiresIn: '7d',
      },
    },
  )

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/', // make the cookie available in all routes
      secure: true, // send the cookie only over HTTPS
      sameSite: true, // protect against CSRF attacks
      httpOnly: true, // make the cookie inaccessible to JavaScript on the client side
    })
    .status(200)
    .send({
      token,
    })
}
