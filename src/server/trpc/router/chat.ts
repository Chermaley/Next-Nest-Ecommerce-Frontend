import EventEmitter from 'events'
import { protectedProcedure, router } from '../trpc'
import { z } from 'zod'
import { observable } from '@trpc/server/observable'
import { Consultation, ConsultationMessage } from '@prisma/client'

interface MyEvents {
  createConsultation: (consultation: Consultation) => void
  joinConsultation: (consultation: Consultation) => void
  leaveConsultation: (consultation: Consultation) => void
  message: (message: ConsultationMessage) => void
  isTypingUpdate: () => void
}

declare interface MyEventEmitter {
  on<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this
  off<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this
  once<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this
  emit<TEv extends keyof MyEvents>(
    event: TEv,
    ...args: Parameters<MyEvents[TEv]>
  ): boolean
}

class MyEventEmitter extends EventEmitter {}

const ee = new MyEventEmitter()

export const chatRouter = router({
  getOpenConsultations: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.consultation.findMany({
      where: {
        status: 'OPEN',
      },
    })
  }),
  createConsultation: protectedProcedure.mutation(async ({ ctx }) => {
    const consultation = await ctx.prisma.consultation.create({
      data: {
        creatorId: ctx.session.user.id,
        type: 'chat',
      },
    })
    ee.emit('createConsultation', consultation)
    return consultation
  }),
  joinConsultation: protectedProcedure
    .input(
      z.object({
        consultationId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const consultation = await ctx.prisma.consultation.update({
        where: {
          id: input.consultationId,
        },
        data: {
          activeParticipants: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      })
      ee.emit('joinConsultation', consultation)
      return consultation
    }),
  leaveConsultation: protectedProcedure
    .input(
      z.object({
        consultationId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const consultation = await ctx.prisma.consultation.update({
        where: {
          id: input.consultationId,
        },
        data: {
          activeParticipants: {
            disconnect: {
              id: ctx.session.user.id,
            },
          },
        },
      })
      ee.emit('leaveConsultation', consultation)
      return consultation
    }),
  getMessages: protectedProcedure
    .input(
      z.object({
        consultationId: z.string(),
      })
    )
    .query(async ({ ctx, input: { consultationId } }) => {
      return await ctx.prisma.consultationMessage.findMany({
        where: {
          consultationId,
        },
        include: {
          attachments: true,
        },
      })
    }),
  sendMessage: protectedProcedure
    .input(
      z.object({
        consultationId: z.string(),
        text: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.consultationMessage.create({
        data: {
          message: input.text,
          userId: ctx.session.user.id,
          consultationId: input.consultationId,
        },
      })
      ee.emit('message', message)
      return message
    }),
  onMessage: protectedProcedure.subscription(() => {
    return observable<ConsultationMessage>((emit) => {
      const onMessage = (data: ConsultationMessage) => {
        console.log('onMessage', data)
        emit.next(data)
      }
      ee.on('message', onMessage)
      return () => {
        ee.off('message', onMessage)
      }
    })
  }),
  onCreateConversation: protectedProcedure.subscription(() => {
    return observable<any>((emit) => {
      const onCreate = () => emit.next('fdg')
      ee.on('createConsultation', onCreate)
      return () => {
        ee.off('createConsultation', onCreate)
      }
    })
  }),
  onJoinConsultation: protectedProcedure.subscription(() => {
    return observable<any>((emit) => {
      const onCreate = () => {}
      ee.on('joinConsultation', onCreate)
      return () => {
        ee.off('joinConsultation', onCreate)
      }
    })
  }),
})
