import { publicProcedure, router } from '../trpc'
import * as trpc from '@trpc/server'
import { z } from 'zod'
import { hash } from 'argon2'

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { password, email } }) => {
      const exists = await ctx.prisma.user.findFirst({
        where: { email },
      })
      if (exists) {
        throw new trpc.TRPCError({
          code: 'CONFLICT',
          message: 'User already exists.',
        })
      }
      const hashedPassword = await hash(password)
      return await ctx.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      })
    }),
})
