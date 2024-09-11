'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MyOrders() {
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>
  
  return (
    <div>
      Order History
    </div>
  )
}
