'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Thankyou() {
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <>
      <h1 className="py-4 text-2xl">Thank you Component</h1>
    </>
  )
}
