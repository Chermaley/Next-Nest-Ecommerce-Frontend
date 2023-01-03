import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'

export const orderRouter = router({
  getOrders: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        products: true,
      },
    })
  }),
  getOrder: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input: { id } }) => {
      return ctx.prisma.order.findUnique({
        where: {
          id,
        },
        include: {
          products: true,
        },
      })
    }),
  createOrder: protectedProcedure
    .input(
      z.object({
        country: z.string(),
        city: z.string(),
        address: z.string(),
        zipCode: z.string(),
        phoneNumber: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const basket = await ctx.prisma.basket.findUnique({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          products: true,
        },
      })
      if (!basket) throw new Error('Basket not found')
      const order = await ctx.prisma.order.create({
        data: {
          userId: ctx.session.user.id,
          products: {
            connect: basket.products.map((product) => ({
              id: product.id,
            })),
          },
          email: ctx.session.user.email ?? '',
          amount: basket.products.reduce((acc, p) => acc + p.price, 0),
          ...input,
        },
        include: {
          products: true,
        },
      })
      await ctx.prisma.basket.delete({
        where: {
          id: basket.id,
        },
      })
      return order
    }),
})
