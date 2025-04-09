'use client'

import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import fetchHeaderData from './data'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    const getHeaderData = async () => {
      try {
        const data = await fetchHeaderData()
        setHeaderData(data)
      } catch (error) {
        console.error('Error fetching header data:', error)
      }
    }

    getHeaderData()
  }, [])

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('header')
      if (navbar) {
        navbar.classList.toggle('header__scroll', window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!headerData) {
    return <div>Loading...</div>
  }

  const links = headerData.navLinks.map((link) => (
    <li key={link.id}>
      <Link
        className="-link -link--mobile md:text-[var(--color-text-dark)]"
        href={link.destination.slug}
        target={link.target}
        aria-label={link.destination.title}
      >
        {link.destination.title}
      </Link>
    </li>
  ))

  const socialLinks = headerData.socialLinks.map((link) => (
    <li key={link.id}>
      <Link className="-link" href={link.url}>
        <Image className="" src={link.icon.url} alt={link.icon.alt} width={25} height={25} />
      </Link>
    </li>
  ))

  const ctaButtons = headerData.cta_button.map((link) => (
    <li key={link.id}>
      <Link href={link.url}>
        <button className="-btn">{link.label}</button>
      </Link>
    </li>
  ))

  return (
    <header className="header">
      <div className="-flex-row-container py-[2rem]">
        <Link href="#" aria-label="Home">
          <Image
            className="h-[5rem]"
            src={headerData.logo.url}
            alt="Company Logo"
            width={100}
            height={100}
          />
        </Link>

        <nav className="header__mobile-navbar">
          <button
            className="mobile-navbar-toggle"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <GiHamburgerMenu size={30} />
          </button>

          <ul className={`header__mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {links}
            {socialLinks}
            {ctaButtons}
          </ul>
        </nav>

        <nav className="header__navbar">
          <ul className="header__menu">
            {links}
            {socialLinks}
            {ctaButtons}
          </ul>
        </nav>
      </div>
    </header>
  )
}
