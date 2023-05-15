import { getEnvironment } from '@/config-adapter/enviroment'

export default async function getPages() {
  const env = getEnvironment()
  return await fetch(
    `https://cdn.contentful.com/spaces/${env.contentfulSpaceId}/entries?access_token=${env.contentfulApiKey}&content_type=page`,
  )
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .catch((err) => {
      console.error(err)
    })
}
