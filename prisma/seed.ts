import { prisma } from '../src/server/db/client'

async function main() {
  const type = await prisma.productType.create({
    data: {
      name: 'Test Product Type',
    },
  })
  await prisma.product.create({
    data: {
      typeId: type.id,
      name: 'Test',
      price: 12,
      rating: 4,
      description: 'Test',
      image: 'Test',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
