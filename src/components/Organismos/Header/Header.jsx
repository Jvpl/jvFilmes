'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Header() {
  return (
    <header>
      <Image src="/Logo.png" alt="" width={199} height={60} />
      <nav>
        <ul>
          <li>Home</li>
          <li>Movies & Shows</li>
          <li>Support</li>
          <li>Subscriptions</li>
        </ul>
      </nav>
      <div>
        <Image src="/Lupa.png" alt="" width={34} height={34} />
        <Image src="/Sino.png" alt="" width={34} height={34} />
      </div>
    </header>
  )
}
