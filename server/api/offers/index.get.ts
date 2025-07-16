import { offers } from '~/server/schema/offers.sql'

const db = useDatabase()
const getOffers = db.select().from(offers).prepare('get-offers')

export default defineEventHandler(async (_) => {
  try {
    return await getOffers.execute()
  }
  catch (error) {
    throw createError({ statusMessage: 'Failed to fetch offers', statusCode: 500, cause: error })
  }
})
