import express from 'express'
import AdminJS, { AdminJSOptions } from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/prisma'
import { PrismaClient } from '@prisma/client'
import { DMMFClass } from '@prisma/client/runtime'
import { getAdminOptions } from './configureAdmin'

const PORT = process.env.port || 3205

const prisma = new PrismaClient()

AdminJS.registerAdapter({ Database, Resource })

const authenticate = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    return user
  }

  return null
}

const run = async () => {
  const app = express()

  // `_baseDmmf` contains necessary Model metadata. `PrismaClient` type doesn't have it included
  const dmmf = (prisma as any)._baseDmmf as DMMFClass

  const admin = new AdminJS(getAdminOptions(dmmf))

  admin.watch()

  const router = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: 'adminjs',
      cookiePassword: 'sessionsecret',
    },
    null,
    null
  )

  app.use(admin.options.rootPath, router)

  const server = app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

  process.on('SIGINT', () => {
    console.info('SIGTERM signal received.')
    console.log('Closing http server.')
    server.close((err) => {
      console.log('Http server closed.')
      process.exit(err ? 1 : 0)
    })
  })
}
run().finally(async () => {
  await prisma.$disconnect()
})
