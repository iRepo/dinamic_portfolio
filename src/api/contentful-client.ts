import { getEnvironment } from '@/config-adapter/enviroment'
import { createClient } from 'contentful'

const env = getEnvironment()

export const contentfulClient = createClient({
  space: env.contentfulSpaceId,
  accessToken: env.contentfulApiKey,
})
