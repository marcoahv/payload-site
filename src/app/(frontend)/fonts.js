// https://fonts.google.com/

import { Montserrat, Vollkorn, Doto, Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export const vollkorn = Vollkorn({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})
export const doto = Doto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

// Font families created in 'styles/base/_typography.css'
