import Image from 'next/image'
import Link from 'next/link'
import { CgEreader } from 'react-icons/cg'
import type { Hero } from '@/payload-types'

export function Hero(hero: Hero) {
  return (
    <div className="mt-[15rem]">
      <h1 className="-heading-1 -font-primary">{hero.headings.heading}</h1>
      <div className="flex items-center gap-2">
        <CgEreader className="-icon" />
        <p className="text-xl text-primary-d">{hero.headings.subheading} </p>
      </div>

      <Link href={hero.cta_button.url}>{hero.cta_button.label}</Link>
      {hero.image && typeof hero?.image === 'object' && (
        <Image src={hero.image.url ?? ''} alt={hero.image.alt} width={400} height={300} priority />
      )}
    </div>
  )
}
