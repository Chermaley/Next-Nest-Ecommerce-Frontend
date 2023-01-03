import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'

export const basketRouter = router({
  getBasket: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.basket.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        products: true,
      },
    })
  }),
  addToBasket: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        quantity: z.number(),
      })
    )
    .mutation(async ({ ctx, input: { productId, quantity } }) => {
      let basket = await ctx.prisma.basket.findUnique({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          products: true,
        },
      })
      if (!basket) {
        basket = await ctx.prisma.basket.create({
          data: {
            userId: ctx.session.user.id,
          },
          include: {
            products: true,
          },
        })
      }
      const productInBasket = basket.products.find(
        (p) => p.productId === productId
      )
      if (productInBasket) {
        await ctx.prisma.basketProduct.update({
          where: {
            id: productInBasket.id,
          },
          data: {
            quantity: productInBasket.quantity + quantity,
          },
        })
      } else {
        const product = await ctx.prisma.product.findUnique({
          where: {
            id: productId,
          },
        })
        if (!product) throw new Error('Product not found')
        await ctx.prisma.basketProduct.create({
          data: {
            basketId: basket.id,
            productId,
            quantity,
            price: product.price,
            name: product.name,
          },
        })
      }
      return basket
    }),
  removeFromBasket: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { productId } }) => {
      const basket = await ctx.prisma.basket.findUnique({
        where: {
          userId: ctx.session.user.id,
        },
        include: {
          products: true,
        },
      })
      const productInBasket = basket?.products.find((p) => p.id === productId)
      if (productInBasket) {
        if (productInBasket.quantity > 1) {
          await ctx.prisma.basketProduct.update({
            where: {
              id: productInBasket.id,
            },
            data: {
              quantity: productInBasket.quantity - 1,
            },
          })
        } else {
          await ctx.prisma.basketProduct.delete({
            where: {
              id: productInBasket.id,
            },
          })
        }
      }
      return basket
    }),
})
