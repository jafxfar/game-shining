'use client'

import dynamic from 'next/dynamic'

const Game = dynamic(() => import('./components/237'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      Loading...
    </div>
  ),
})

export default function Home() {
  return <Game />
}
