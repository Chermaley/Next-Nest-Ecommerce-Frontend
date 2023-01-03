import { z } from 'zod'

import {
  router,
  publicProcedure,
  protectedProcedure,
  adminProcedure,
} from '../trpc'

export const productsRouter = router({
  getAllProductTypes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.productType.findMany()
  }),
  getAllProducts: publicProcedure
    .input(
      z.object({
        typeId: z.string().nullish(),
      })
    )
    .query(({ ctx, input: { typeId } }) => {
      return ctx.prisma.product.findMany({
        where: {
          typeId: typeId ?? undefined,
        },
      })
    }),
  getProductsByTerm: publicProcedure
    .input(
      z.object({
        term: z.string().nullish(),
      })
    )
    .query(({ ctx, input: { term } }) => {
      return ctx.prisma.product.findMany({
        where: {
          name: term ?? undefined,
        },
      })
    }),
  getProduct: publicProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findUnique({
        where: {
          id: input.productId,
        },
      })
    }),
  getProductComments: publicProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(({ ctx, input: { productId } }) => {
      return ctx.prisma.productComment.findMany({
        where: {
          productId,
        },
      })
    }),
  leaveComment: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        text: z.string(),
        rating: z.number(),
      })
    )
    .mutation(async ({ ctx, input: { productId, text, rating } }) => {
      return ctx.prisma.productComment.create({
        data: {
          productId,
          text,
          userId: ctx.session.user.id,
          email: ctx.session.user.email as string,
          rating,
        },
      })
    }),
})
