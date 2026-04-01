import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <nav style={{ display: 'flex', gap: 4}}>
        <a>Home</a>
        <Link to="/about"> About </Link>
      </nav>
      <p>
        <button onClick={() => setCount(count + 1)}>
            Click Me: {count} clicks
        </button>
      </p>
    </div>
  )
}
