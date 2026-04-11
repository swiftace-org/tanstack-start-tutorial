import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/")({ component: IndexPage })

function IndexPage() {
  const [count, setCount] = useState(0)
  return (
    <div className="p-4">
      <nav className="flex gap-2">
        <span className="font-bold">Home</span>
        <Link to="/about">About</Link>
      </nav>
      <p className="mt-4">
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1 text-white"
          onClick={() => setCount(count + 1)}
        >
          Click Me: {count} clicks
        </button>
      </p>
    </div>
  )
}
