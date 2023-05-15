import { getEnvironment } from '@/config-adapter/enviroment'
import { createClient } from 'contentful'

const env = getEnvironment()

const client = createClient({
  space: env.contentfulSpaceId,
  accessToken: env.contentfulApiKey,
})

type GetPageParams = {
  pageContentType: string
  slug: string
  locale: string
}

export async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: params.pageContentType,
  }
  const {
    items: [page],
  } = await client.getEntries(query)
  return page || null
}
