import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/Blocks/RenderBlocks'

export default async function Page() {
  const payload = await getPayload({ config })

  const pageQuery = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: '/',
      },
    },
  })

  const page = pageQuery.docs[0]

  return <RenderBlocks blocks={page.section} />
}
