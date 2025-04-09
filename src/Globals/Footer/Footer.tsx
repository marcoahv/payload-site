import type { Footer } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import type { Page } from '@/payload-types'

const payload = await getPayload({ config })
const footer = await payload.findGlobal({
  slug: 'footer',
})

export function Footer() {
  return (
    <footer className="flex  items-center justify-center p-80">
      <nav className="flex gap-36">
        {footer.navLinks?.map(
          (
            navLink: {
              destination?: number | Page | null
              newTab?: boolean | null
              id?: string | null
            },
            index: number,
          ) => {
            if (!navLink || !navLink.destination || typeof navLink.destination !== 'object') {
              return null
            }

            return (
              <Link key={index} href={navLink.destination.slug}>
                {navLink.destination.title}
              </Link>
            )
          },
        )}
      </nav>
    </footer>
  )
}
