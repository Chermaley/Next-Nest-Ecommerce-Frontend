// import { Product } from '../products/models/products.model'
// import AdminJS, { AdminJSOptions, flat } from 'adminjs'
// import { ProductType } from '../products/models/product-types.model'
// import { UserRoles } from '../roles/user-roles.model'
// import { User } from '../users/users.model'
// import { Role } from '../roles/roles.model'
// import { AuthService } from '../auth/auth.service'
// import { FilesService } from '../files/files.service'
// import { locale } from './locale'
// import { ProductComment } from '../products/models/product-comments.model'
// import { Order } from '../order/models/order.model'
// import { DMMFClass } from '@prisma/client/runtime'
//
// export const configureAdmin = (
//   authService: AuthService,
//   filesService: FilesService
// ): AdminModuleOptions => ({
//   auth: {
//     authenticate: async (email, password) =>
//       authService.loginAdmin({ email, password }),
//     cookieName: 'adminToken',
//     cookiePassword: 'pass',
//   },
//   adminJsOptions: {
//     rootPath: '/admin',
//     dashboard: {
//       component: chat,
//     },
//     assets: {},
//     resources: [
//       {
//         resource: Product,
//         options: {
//           actions: {
//             new: {
//               before: beforeSaveProduct(filesService),
//             },
//             edit: {
//               before: beforeSaveProduct(filesService),
//             },
//           },
//           properties: {
//             image1: {
//               components: {
//                 edit: uploadPhotoBundle,
//               },
//             },
//             image2: {
//               components: {
//                 edit: uploadPhotoBundle,
//               },
//             },
//             image3: {
//               components: {
//                 edit: uploadPhotoBundle,
//               },
//             },
//           },
//         },
//       },
//       { resource: ProductType, options: {} },
//       { resource: UserRoles },
//       { resource: User },
//       { resource: Role },
//       { resource: ProductComment },
//       { resource: Order },
//     ],
//     locale,
//   },
// })
//
// export const beforeSaveProduct =
//   (filesService: FilesService) => async (response: any) => {
//     const fields = flat.unflatten(response.payload)
//     const images = {}
//
//     for (const [key, param] of Object.entries<any>(fields)) {
//       if (param && param.file) {
//         images[key] = await filesService.createFile(param as { file: string })
//       }
//     }
//
//     return {
//       ...response,
//       payload: { ...fields, ...images },
//     }
//   }

import AdminJS, { AdminJSOptions } from 'adminjs'
import { DMMFClass } from '@prisma/client/runtime'
import { locale } from './locale'
import { PrismaClient } from '@prisma/client'
import { componentLoader, Components } from './components'
const prisma = new PrismaClient()

export const getAdminOptions = (dmmf: DMMFClass): AdminJSOptions => ({
  locale,
  componentLoader,
  dashboard: {
    component: Components.MyDashboard,
  },
  resources: [
    {
      resource: { model: dmmf.modelMap.Product, client: prisma },
      options: {
        actions: {
          // new: {
          //   before: beforeSaveProduct(filesService),
          // },
          // edit: {
          //   before: beforeSaveProduct(filesService),
          // },
        },
        properties: {
          // image1: {
          //   components: {
          //     edit: uploadPhotoBundle,
          //   },
          // },
          // image2: {
          //   components: {
          //     edit: uploadPhotoBundle,
          //   },
          // },
          // image3: {
          //   components: {
          //     edit: uploadPhotoBundle,
          //   },
          // },
        },
      },
    },
    {
      resource: { model: dmmf.modelMap.ProductType, client: prisma },
      options: {},
    },
    // {
    //   // resource: { model: dmmf.modelMap.User, client: prisma },
    //   // options: {},
    // },
  ],
})

const uploadPhotoBundle = AdminJS.bundle('./components/UploadPhoto')
const chat = AdminJS.bundle('./components/chat/index')
