import { Hero } from './Hero/Hero'
import { Page } from '@/payload-types'
import { Fragment } from 'react'

const blockComponents = {
  hero: Hero,
}

export const RenderBlocks: React.FC<{
  blocks: Page['section']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* ts-expect-error block can have more than one type */}
                  <Block {...block} />
                </div>
              )
            }
            return null
          }
        })}
      </Fragment>
    )
  }
  return null
}
